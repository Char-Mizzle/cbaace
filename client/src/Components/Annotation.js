import React from "react";

// Component to process annotation information
// Annotation is passed down from Article by Props
const Annotation = ({annotation}) => {
    return (
        <p>
            {JSON.stringify(annotation)}
        </p>
    )
}

export default Annotation;