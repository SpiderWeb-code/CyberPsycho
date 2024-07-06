import React, { useState, useEffect } from "react";
import Portfolio3D from "../3D/Portfolio-3d/Portfolio3D";
import Tarifs3D from "../3D/Tarifs-3d/Tarifs3D";
import Propos3D from "../3D/À-Propos-3d/Propos";
import Contacte3D from "../3D/Contacte-3d/Contacte";
import ImageBulls from "../images/bulls1.webp";
import ImageCerisier from "../images/cerisier.webp";
import "../Header/Header.scss";

function Header() {
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
                <header>
                    <div id="container-header">
                        <img className="bulls" src={ImageBulls} alt="Bulls"></img>
                        <img className="cerisier1" src={ImageCerisier} alt="Cerisier"></img>
                        <img className="cerisier2" src={ImageCerisier} alt="Cerisier"></img>
                        <div id="header-3d-container">
                            <Portfolio3D />
                            <Tarifs3D />
                            <Propos3D />
                            <Contacte3D />
                        </div>
                    </div>
                </header>
            )}
        </>
    );
};

export default Header;