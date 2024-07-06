import React, { useState, useEffect } from 'react';
import Header from '../../Composants/Header/Header';
import PorteOuvrante from '../../Composants/Porte-ouvrante/Porte-ouvrante';
import SectionTop from '../../Composants/SectionTop/SectionTop';
import ArticlesSites from '../../Composants/ArticlesSites/ArticleSite';
import ImageBookiMignature from '../../Composants/images/booki-mignature.webp';
import ImageSophieBluel from '../../Composants/images/sophie_bluel._mignature.webp';
import ImageKasa from '../../Composants/images/mignature-kasa.webp';
import { Link } from 'react-router-dom';
import '../Home/Home.scss';

function Home() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Rend tous les composants visibles après 2 secondes
        const timer = setTimeout(() => {
            setVisible(true);
        }, 2000);

        // Nettoie le timer pour éviter les fuites de mémoire
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Header style={{ display: visible ? 'block' : 'none' }} />
            <PorteOuvrante />
            <SectionTop style={{ display: visible ? 'block' : 'none' }} />
            <section id="container-articles-sites" style={{ display: visible ? 'flex' : 'none' }}>
            <Link to={"/portfolio/sites-prevue/booki"}>
                <ArticlesSites imageSrc={ImageBookiMignature} title="Site Booki" />
            </Link>
            <Link to={"/portfolio/sites-prevue/sophie-bluel"}>
                <ArticlesSites imageSrc={ImageSophieBluel} title="Sophie Bluel" />
            </Link>
            <Link to={"/portfolio/sites-prevue/kasa"}>
                <ArticlesSites imageSrc={ImageKasa} title="Kasa" />
            </Link>
                {/* Vous pouvez ajouter autant d'instances que vous le souhaitez */}
            </section>
        </>
    );
}

export default Home;