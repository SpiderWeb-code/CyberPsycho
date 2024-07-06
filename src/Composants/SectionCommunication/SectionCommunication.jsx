import React, { useState } from "react";
import ArticleComTexte from "../../Composants/ArticleComTexte/ArticleComTexte";
import "../SectionCommunication/SectionCommunication.scss";

function SectionCommunication(){
    const [selectedIcon, setSelectedIcon] = useState("");

    const handleIconClick = (iconName) => {
        setSelectedIcon(iconName);
    };

    return(
        <section id="section-communication">
            <article>
                <h2>Contacte | Informations | Payement</h2>
                <div className="article-communication">
                <i className="fa-brands fa-discord" onClick={() => handleIconClick("discord")}></i>
                <i className="fa-brands fa-github" onClick={() => handleIconClick("github")}></i>
                <i className="fa-solid fa-phone" onClick={() => handleIconClick("phone")}></i>
                <i className="fa-brands fa-paypal" onClick={() => handleIconClick("paypal")}></i>
                </div>
                <div id="container-comtexte">
                <ArticleComTexte selectedIcon={selectedIcon} />
                </div>
            </article>
        </section>
    )
}

export default SectionCommunication;