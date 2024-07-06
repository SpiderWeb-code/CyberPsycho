import React from "react";
import "./ArticlesProposition.scss";

function ArticlesProposition({ content, soustext }) {
    return (
        <article className="articles-propositions">
            <div className="container-i-proposition">
                <i className="fa-regular fa-eye-slash"></i>
                <i className="fa-solid fa-eye"></i>
            </div>
            <h5>{content}</h5>
            <h6>{soustext}</h6>
        </article>
    );
}

export default ArticlesProposition;