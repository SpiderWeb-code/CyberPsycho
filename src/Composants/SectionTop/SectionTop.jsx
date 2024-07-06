import React, { useState, useEffect } from "react";
import ImageDeFond from "../../Composants/images/cerisier-fond.webp";
import ImageLogo from "../../Composants/images/logo-cybertpsycho.webp"
import "../SectionTop/SectionTop.scss";

function SectionTop() {
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
                <section id="cerisier-fond">
                    <div id="container-cyberpsycho-home">
                        <img src={ImageLogo} alt="logo cyberpsycho compagny" id="logo-cyberpsycho-home"></img>
                        <h1>CyberPsycho</h1>
                    </div>
                    <img src={ImageDeFond} alt="image de fond d'un cerisier" id="cerisier-image-home"></img>
                </section>
            )}
        </>
    );
}

export default SectionTop;