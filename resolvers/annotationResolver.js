module.exports = {
    Query: {
        annotationsByUser: (parent, {uid}, { models: { Annotation, User }}) => {
            User.findById(uid).then((user) => {
                if (user){
                    return Promise.all(user.annotations.map((annotationRef)=>{ 
                        return Annotation.findById(annotationRef)
                            .exec()
                            .then((annotation)=>{
                                console.log(annotation)
                                return annotation
                            })
                    }));
                } else {
                    return []
                }
            })
        }
    },
    Mutation: {
        toogleVotes: (parent, {id, isUpvote}, { models: { Annotation }, currentUser}) => {
            Annotation.findById(id).then((annotation)=>{
                // Get user id off the upvote or downvote list
                if (annotation) {
                    if (isUpvote) annotation.updateOne({$pull: {upvotes: currentUser.id}}).then();
                    // else
                    annotation.updateOne({$pull: {downvote: currentUser.id}}).then();
                }
            });
            return true;
        },
        // Lets do owner verification in the client side?
        deleteAnnotation: (parent, {anid}, { models: { User, Annotation, Article }}) => {
            // delete from the user's annotations list, and quote in article list, and the annotation itself
            // find the annotation
            Annotation.findById(anid).then((annotation) => {
                if (annotation) {
                    // find the user w author id in the article
                    User.findOneAndUpdate({id: annotation.author}, {$pull: {annotations: anid}}).then(()=>{
                        // find the quote from articles w quote id
                        Article.find({'quotes.annotations':anid}).then((article) => {
                            article.quotes.forEach((quote) =>{
                                if (quote.annotations.includes(anid)){
                                    // filter out current annotation id
                                    quote.annotations.filter(el => el !== anid);
                                }
                            })
                            article.save().then(
                                // delete from the document
                                Annotation.deleteOne({id: anid}).then(
                                    console.log("annotation successfully deleted")
                                )
                            );
                        })
                    })
                }
            });

            return true;
        }
    },
    Annotation: {
        upvotes: ({upvotes}, args, context) => {
            return upvotes.length;
        },
        downvotes: ({downvotes}, args, context) => {
            return downvotes.length;
        },
        author: ({id}, args, { models: {User} }) => {
            return User.find({"annotations": id}).exec().then((user)=>{console.log(user); return user});
        }
    }
}