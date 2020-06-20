import React, { Fragment } from "react";
import { useQuery, useApolloClient } from '@apollo/react-hooks';
import { ARTICLE_BY_URL, CURRENT_USER_QUERY } from '../stores/queries';
import Annotation from "./Annotation";

const Quote = ({quote}) => {
    return (
        <div>
            <p>Quote: {quote.quote}, id: {quote.id}</p>
            {
                quote.annotations && quote.annotations.map((annot, i) => {
                    return <Annotation key={i} annotation={annot}/>
                })
            }
        </div>
    )
}

// Component to process article information
// Assumes url is being passed down in props
const Article = ({url}) => {
    // get current article data
    console.log(url)
    const { loading, error, data }= useQuery(ARTICLE_BY_URL, {
        variables: {url: url}
    });
    // If we can have a cute loading sequence itd be cute
    if (loading) return 'Loading';
    if (error) return `Error! ${error.message}`;
    const article = data.articleByUrl
    console.log(article)

    // Logged in user query example
    // const { loading, error, data }= useQuery(CURRENT_USER_QUERY);
    // if (loading) return 'Loading';
    // if (error) return `Error! ${error.message}`;
    // console.log(data.loggedInUser);

    return (
        // Check if the article exists
        (data && article)?
        <div>
            <p>Article id {article.id}</p>
            {/* if quotes exist, generate quotes*/
                article.quotes && article.quotes.map((quote, i)=>{
                    return <Quote key={i} quote={quote}/>
                })
            }
        </div>
        : <p>No Annotations Created Yet!</p>
    )
}

export default Article;