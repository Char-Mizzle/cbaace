# File Structures
## schema
  * Defines what we promise to return to the client through graphql
  * Inputs or arguments are what we expect to receive from the client
  * Required fields are marked with ! at the end of the type

## models
  * Defines the actual MongoDB data
  * Required fields are defined by creating an object with required field specified (there are examples on the code)

## resolvers
  * Defines how the mongoDB data gets reformed to process graphQL Queries and Mutations
  * In resolvers function, it takes three arguments (parents, args, context)
    * parents is a context on parent schema
       * i.e. if User schema has a field called id, we can call id from parent.id
       * (parent fields are only useful for the subqueries on fields which are defined at the bottom)
    * args are arguments that is passed down
    * context is calling the MongoDB or Passport context which is defined on index.js (in const server = new ApolloServer(...))
       * currentUser gives access to the logged in user's context as in MongoDB

  * The resolvers at the bottom with the Schema name (i.e. Article: {quotes: ()=>{} ... })
    * these are used to define or override how the subschema are unpacked

# How to debug the features
1. run the server, login using localhost:5000/auth/google (saveAnnotation takes currentUser as a context and requires login)
  * This will redirect to localhost:5000/graphql 
  * You can reference what are the queries and mutations we have available with the docs and schemas on the right side
2. run queries
Example queries
```
mutation{
  saveAnnotation(article: {aid: "507f1f77bcf86cd799439011", url: "testurl"}, quote: {qid: "507f1f77bcf86cd799439012", quote: "testquote"}, annotation: {anid:"507f1f77bcf86cd799439014", content:"testcontent1"})
}
(ids will later be generated in the client using mongoose.ObjectID but for now manually written)

query{
  articleByUrl(url:"testurl"){
    id
    url
    quotes{
      quote
      annotations{
        content
      }
    }
  }
}
```


# Things to add
1. title and description
1. reference (optional field)
1. Reactions (Like, Laugh, Love) (Replace Upvotes and Downvotes)
1. types (support, cross, exclamation)
1. date of publish (use node's new Date().getTime(), MongoDB Date type, and graphQL idk actually, String should suffice )
1. Adding additional sort logic to return Annotations in the order of likes
    * we need to discuss how we want to rank the annotations since we have 3 different choices
* We need to discuss where we want to process sentiment data and whether we would like to 

* Modify the structure in annotation schema and annotetion model
* Update the saveAnnotation resolver in the articleResolver