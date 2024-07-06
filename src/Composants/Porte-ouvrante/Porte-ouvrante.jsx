import React, { useEffect, useState } from "react";
import PictureShojiLeft from "../images/shoji-japonais-gauche.webp";
import PictureLogoLeft from "../images/logo-cybertpsycho-left.webp";
import PictureShojiRight from "../images/shoji-japonais-droit.webp";
import PictureLogoRight from "../images/logo-cybertpsycho-right.webp";
import "../Porte-ouvrante/Porte-ouvrante.scss";

function PorteOuvrante() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [showImages, setShowImages] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (windowWidth <= 425) {
            // Ne pas afficher les images
            setShowImages(false);
        } else {
            setShowImages(true);
        }
    }, [windowWidth]);

    // Gestion de l'événement de transition pour supprimer les images de droite du DOM à la fin de l'animation
    const handleTransitionEnd = () => {
        const rightImgs = document.querySelectorAll('.right-image');
        rightImgs.forEach(img => img.remove());
    };

    useEffect(() => {
        if (showImages) {
            const leftImgs = document.querySelectorAll('.left-image');
            const rightImgs = document.querySelectorAll('.right-image');

            // Ajouter la classe "disappear-left" après un délai de 2 secondes pour les images de gauche
            const leftTimeout = setTimeout(() => {
                leftImgs.forEach(img => img.classList.add('disappear-left'));
            }, 300);

            // Ajouter la classe "disappear-right" après un délai de 2 secondes pour les images de droite
            const rightTimeout = setTimeout(() => {
                rightImgs.forEach(img => img.classList.add('disappear-right'));
            }, 300);

            // Nettoyer les timeouts lorsque le composant est démonté pour éviter les fuites de mémoire
            return () => {
                clearTimeout(leftTimeout);
                clearTimeout(rightTimeout);
            };
        }
    }, [showImages]);

    return (
        <div>
            {showImages && (
                <>
                    <img className="left-image image shoji-left" id="shoji-left" src={PictureShojiLeft} alt="Shoji gauche"/>
                    <img className="right-image image shoji-right" id="shoji-right" src={PictureShojiRight} alt="Shoji droit" onTransitionEnd={handleTransitionEnd}/>
                    <img className="left-image image image-logo logo-left" id="porte-logo-left" src={PictureLogoLeft} alt="Oni gauche" />
                    <img className="right-image image image-logo logo-right" id="porte-logo-right" src={PictureLogoRight} alt="Oni droit" onTransitionEnd={handleTransitionEnd}/>
                </>
            )}
        </div>
    );
}

export default PorteOuvrante;