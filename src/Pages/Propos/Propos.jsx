import React, { useState, useEffect } from "react";
import Header from "../../Composants/Header/Header";
import LoadingBarre from "../../Composants/LoadingBarre/LoadingBarre";
import PorteOuvrante from "../../Composants/Porte-ouvrante/Porte-ouvrante";
import ProposTop from "../../Composants/ProposTop/ProposTop";
import SectionQuiJeSuis from "../../Composants/SectionQuiJeSuis/SectionQuiJeSuis";
import BorderPropos from "../../Composants/BorderPropos/BorderPropos";
import GifBannerFirst from '../../Composants/videos/gif-banner.gif';
import GifBannerSecond from '../../Composants/videos/ball_white.gif';
import SectionCommunication from "../../Composants/SectionCommunication/SectionCommunication";
import Footer from "../../Composants/Footer/Footer";
import "../Propos/Propos.scss";

function Propos() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 2000);
    }, []);

    return (
        <>
            <Header />
            <LoadingBarre />
            <PorteOuvrante />
            <ProposTop />
            <main id="main-propos" className={isVisible ? 'visible' : 'hidden'}>
                {isVisible && <SectionQuiJeSuis />}
                {isVisible && <BorderPropos 
                    imageSrc={GifBannerFirst}
                    altText="Image de la bannière représentant nos objectifs"
                    title="NOTRE OBJECTIF_"
                    text="RÉPONDRE AUX ATTENTES DE NOTRE CLIENTÈLE ET
                          MAINTENIR UN SITE À LA POINTE DE CES
                          PERFORMANCES AFIN DE NE JAMAIS ÊTRE DÉPASSÉ PAR
                          LES NOUVELLES TECHNOLOGIES"
                    imgWidth="20vw"
                />}
                <SectionCommunication />
                {isVisible && <BorderPropos
                imageSrc={GifBannerSecond}
                altText="Image de la bannière représentant nos objectifs"
                title="UNE CONNECTIVITÉ RÉSEAU CONSTANTE_"
                text="LES SERVEURS QUE NOUS UTILISONS,
                      PARMI LES PLUS FIABLES, ASSURENT UNE MISE EN LIGNE CONTINUE, 
                      UNE FLUIDITÉ OPTIMALE ET DES MISES À JOUR DE SÉCURITÉ CONSTANTES,
                      PARTOUT DANS LE MONDE."
                imgWidth="15vw"
                applyGap={true}
                />}
                <Footer />
            </main>
        </>
    );
}

export default Propos;