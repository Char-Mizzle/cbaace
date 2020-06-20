# cbaace

## How to build dist folder to be imported for Chrome Extension
1. cd client (move to client directory)
1. npm install (to install dependencies) 
1. npm run build (this will create dist folder)
1. Open Chrome Extension page in developer mode and select load unpacked

## How to run the server
1. npm install
1. npm run dev (this will run index.js with nodemon which will auto recompile on changes)

## Config File
This file will be discarded from git repo in our final deployment

## MongoDB Structure
### Depending on our decision between annotion on the article vs on quotes, the structure will change

```
user{
    id
    username
    [refs to annotations]
}

article{
    [quotes{
        [refs to annotations]
    }]
}

annotation{
    ref to quote
    ref to author
    content
    upvotes
    downvotes
    *maybe sentiment info*
}
```
