import React from "react";

const Pages = props => {
    return(
        <div className="py-3">
            <button onClick={props.previousPage} className="btn btn-info mr-1">Previous &larr;</button>
            <button onClick={props.nextPage} className="btn btn-info">Next &rarr;</button>
        </div>
    )
}

export default Pages;