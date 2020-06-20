const annotation = require("../schemas/annotation");

module.exports = {
    Query: {
        articleByUrl: (parent, {url}, { models: { Article }}) => {
            console.log("loading article")
            return Article.findOne({url: url});
        }
    },
    Mutation: {
        // In the client, only allow owner of the annotation to edit
        saveAnnotation: (parent, args, { models: { Annotation, Article }, currentUser}) => {
            // Add to Annotation
            let {aid, url} = args.article;
            let {qid, quote} = args.quote;
            let {anid, type, title, content, reference} = args.annotation;
            Annotation.findById(anid).then((oldAnnotation)=>{
                // Annotation already exists
                if (oldAnnotation){
                    oldAnnotation.updateOne({content: content}).then(
                        console.log("Annotation updated")
                    );
                } else {
                    const newAnnotation = new Annotation({
                        _id: anid,
                        id: anid,
                        type: type,
                        title: title,
                        content: content,
                        reference: reference,
                        author: currentUser.id,
                        created: new Date().getTime(),
                        likes: [],
                        loves: [],
                        smiles: [],
                    });
                    newAnnotation.save().then(
                        console.log("New Annotation saved")
                    )
                }
            });

            // Add to Article => quotes
            Article.findById(aid).then((article)=>{
                // create an article if it does not exist
                if (article){
                    // if article exists
                    let quoteFound = false;
                    article.quotes.forEach(quote => {
                        if (quote.id === qid){
                            quoteFound = true;
                            // add annotation if it does not exist
                            if (!quote.annotations.includes(anid)) quote.annotations.push(anid);
                        }                    
                    });
                    if (!quoteFound) {
                        // if quote does not exist, add a new one
                        article.quotes.push({
                            id: qid,
                            quote: quote,
                            annotations: [anid],
                        })
                    }
                } else {
                    // add a new article
                    article = new Article({
                        _id: aid,
                        id: aid,
                        url: url,
                        quotes: [{
                            id: qid,
                            quote: quote,
                            annotations: [
                                anid,
                            ]
                        }]
                    })
                }
                article.save().then(
                    console.log("Annotation saved to article")
                )
            })

            // Add to User's annotations
            if (!currentUser.annotations.includes(anid)){
                currentUser.annotations.push(anid);
                currentUser.save().then(
                    console.log("Annotation added to current user")
                );
            }
        },
    },
    Article: {
        quotes: ({quotes}, args, { models: { Annotation }}) => {
            return Promise.all(quotes.map((quote) => {
                return Annotation.find({'id': { $in: quote.annotations}})
                    .exec()
                    .then((annotations)=>{
                        quote.annotations = annotations;
                        return quote;
                    })
            }))
        },
    }
}