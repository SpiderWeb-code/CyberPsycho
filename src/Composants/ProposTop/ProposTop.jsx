import React from "react";
import ImageLogo from "../../Composants/images/logo-cybertpsycho.webp";
import ImageGif from "../../Composants/videos/spark.gif";
import "../ProposTop/ProposTop.scss";

function ProposTop(){
    return(
        <section id="container-section-propos">
            <img src={ImageLogo} alt="Logo CyberPsycho"></img>
            <h1>CyberPsycho.Cie</h1>
            <div id="container-gif-propos_1">
                <img src={ImageGif}></img>
            </div>
            <div id="container-gif-propos_2">
                <img src={ImageGif}></img>
            </div>
            <div id="container-gif-propos_3">
                <img src={ImageGif}></img>
            </div>
            <div id="container-gif-propos_4">
                <img src={ImageGif}></img>
            </div>
            <div id="container-texte-citation-1">
                <h3>L'innovation est notre fardeau, notre passion, et notre plus grande opportunité. C'est à travers elle que nous sculptons l'avenir, façonnons le présent et défions les limites de ce qui est possible.</h3>
            </div>
            <div id="container-texte-citation-2">
            <h3>Je suis le fondateur de CyberPsycho, une entreprise de développement informatique spécialisée dans la programmation de sites web dynamiques. Notre ambition ? Élargir nos horizons en explorant des secteurs variés de l'informatique, notamment la sécurité et les nouvelles technologies.</h3>
            </div>
            <div id="container-button-propos">
                <button>
                    <i className="fa-solid fa-angles-down"></i>
                </button>
            </div>
        </section>
    )
}
export default ProposTop