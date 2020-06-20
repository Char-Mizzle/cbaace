module.exports = {
    Query: {
        annotationsByUser: (parent, {uid}, { models: { Annotation }}) => {
            User.findById(args.id).then((user) => {
                return user.annotations.map((annotationRef)=>Annotation.findById(annotationRef));
            })
            // not found
            return [];
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
        deleteAnnotation: (parent, {aid, qid}, { models: { User, Annotation, Article }}) => {
            // delete from the user's annotations list, and quote in article list, and the annotation itself
            // find the annotation
            Annotation.findById(aid).then((annotation) => {
                if (annotation) {
                    // find the user w author id in the article
                    User.findOneAndUpdate({id: annotation.author}, {$pull: {annotations: aid}}).then(()=>{
                        // find the quote from articles w quote id
                        Article.findById(annotation.articleRef).then((article) => {
                            article.quotes.forEach((quote) =>{
                                if (quote.id === qid){
                                    // filter out current annotation id
                                    quote.annotations.filter(el => el !== aid);
                                }
                            })
                            article.save().then(
                                // delete from the document
                                Annotation.deleteOne({id: aid}).then(
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
        article: ({articleRef}, args, {Article}) => {
            return Article.findById(articleRef)
        },
        quote: ({id, articleRef}, args, {models: {Article}}) => {
            Article.findById(articleRef).then((article) => {
                return article.quotes.find(quote => quote.annotations.includes(id));
            })
        },
    }
}