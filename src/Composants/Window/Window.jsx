import React from "react";
import ImageSophieBluel from '../../Composants/images/sophie_bluel._mignature.webp';
import ImageBookiMignature from '../../Composants/images/booki-mignature.webp';
import ImageKasa from '../../Composants/images/mignature-kasa.webp';
import "../Window/Window.scss";

function Window() {
    // Obtient l'URL de la page
    const currentPath = window.location.pathname;

    // Fonction pour déterminer l'URL de l'image en fonction de l'URL de la page
    const getImageUrl = () => {
        switch (currentPath) {
            case "/portfolio/sites-prevue/sophie-bluel":
                return ImageSophieBluel;
            case "/portfolio/sites-prevue/booki":
                return ImageBookiMignature;
            case "/portfolio/sites-prevue/kasa":
                return ImageKasa;
            default:
                return ""; // Retourne une chaîne vide par défaut
        }
    };

    return (
        <section className="container-section-sectionsites">
            <div>
                <button></button>
                <article><img src={getImageUrl()} alt="Image"></img></article>
                <button></button>
            </div>
        </section>
    );
}

export default Window;