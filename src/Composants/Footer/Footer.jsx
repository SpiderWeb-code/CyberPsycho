import React from "react";
import "../Footer/Footer.scss";

function Footer(){
    return(
        <section id="sec-footer-propos">
            <div>
                <p>mentions légales</p>
                <p>politique de confidentialité</p>
                <p>conditions générales de ventes et d'utilisation</p>
            </div>
            <div>
                <p>liens GitHub</p>
                <p>numéro de téléphone</p>
                <p>liens vers le discord</p>
            </div>
            <div>
                <p>Qui je suis</p>
                <p>technologies utilisée</p>
                <p>backend ou frontend</p>
            </div>
        </section>
    )
}
export default Footer