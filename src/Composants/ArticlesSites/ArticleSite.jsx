import React, { useState, useEffect } from "react";
import "../ArticlesSites/ArticleSite.scss";

function ArticlesSites({ imageSrc, title }) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {windowWidth > 425 && (
                    <div className="articles-sites">
                        <img src={imageSrc} alt="images des sites proposé par CyberPsycho" />
                    </div>
            )}
        </>
    );
}

export default ArticlesSites;