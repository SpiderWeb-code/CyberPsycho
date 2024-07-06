import React, { useEffect, useRef, useState } from "react";
import PictureFuture from "../images/picture-border.webp";
import "../SectionQuiJeSuis/SectionQuiJeSuis.scss";

function SectionTechnologie() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const top = sectionRef.current.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                setIsVisible(top < windowHeight);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section id="container-technologie" ref={sectionRef} className={isVisible ? "visible" : ""}>
            <div id="container-image-computer">
                <div id="container-picture_computer">
                    <div id="border-computer_1">
                    <img src={PictureFuture} className="picture-border-computer_1" alt="image bordure image"></img>
                    <img src={PictureFuture} className="picture-border-computer_2" alt="image bordure image"></img>
                    </div>
                    <div id="border-computer_2">
                    <img src={PictureFuture} className="picture-border-computer_1" alt="image bordure image"></img>
                    <img src={PictureFuture} className="picture-border-computer_2" alt="image bordure image"></img>
                    </div>
                </div>
            </div>
            <div id="container-h4_h5-computer">
                <div id="container-texte-computer">
                    <h2>QUI JE SUIS</h2>
                    <h3>À la croisée de la jeunesse et de la passion, je suis un créateur de sites web déterminé à offrir des expériences numériques exceptionnelles à des tarifs abordables. Armé de technologies de pointe, mon objectif est de concevoir des sites web à la pointe de l'innovation, exploitant les dernières avancées technologiques pour donner vie à vos idées. Grâce à ma maîtrise des technologies avancées, je peux réaliser des sites web avec des designs variés, allant de l'élégance minimaliste à l'éclatante extravagance. Mon expertise s'étend également au-delà du web statique : je suis en constante formation pour maîtriser l'animation 2D et 3D, apportant ainsi une dimension dynamique et immersive à chaque projet. La sécurité est une priorité absolue dans mon travail. Conscient des enjeux croissants liés à la protection des données et à la confidentialité en ligne, je m'engage à intégrer des mesures de sécurité robustes à chaque étape du processus de développement. Vos données et celles de vos utilisateurs sont entre de bonnes mains. En choisissant mes services, vous optez pour bien plus qu'un simple site web : vous investissez dans une expérience numérique de qualité, conçue avec passion, expertise et engagement. Ensemble, créons l'avenir du web, où l'innovation et la créativité se rencontrent pour inspirer et captiver.</h3>
                </div>
            </div>
        </section>
    );
}

export default SectionTechnologie;