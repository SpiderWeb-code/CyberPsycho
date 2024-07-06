import React from "react";
import "../ConstructionSItes/ConstructionSItes.scss";

function ConstructionSites() {
    // Obtient l'URL de la page
    const currentPath = window.location.pathname;

    // Fonction pour déterminer le texte du paragraphe en fonction de l'URL de la page
    const getDescription = () => {
        switch (currentPath) {
            case "/portfolio/sites-prevue/kasa":
                return `Bienvenue chez Kasa, où la magie de la technologie rencontre le confort de chez vous pour créer une expérience d'hospitalité sans pareille. Plongez dans un monde où la réservation d'un logement devient un plaisir simple et intuitif, où chaque séjour est une expérience inoubliable. Imaginez un site web qui vous offre une expérience de réservation fluide et transparente, où vous pouvez découvrir et réserver votre logement idéal en un instant. Avec Kasa, c'est exactement ce que vous obtenez. Notre plateforme conviviale et intuitive vous permet de trouver facilement l'endroit parfait pour votre prochain séjour, que ce soit une escapade en ville, une retraite à la campagne ou une aventure en bord de mer. Grâce à React, une technologie de développement web innovante, notre site web est non seulement élégant et réactif, mais aussi rapide et fiable. Vous pouvez naviguer en toute fluidité à travers nos listes de logements, explorer des photos époustouflantes et réserver en toute confiance, sans jamais vous soucier des complications d'un backend. Avec Kasa, la planification de votre prochain voyage devient un plaisir, pas une corvée. Dites adieu aux tracas de la recherche d'hébergement et bonjour à une expérience de réservation simplifiée et sans stress. Réservez dès maintenant et préparez-vous à vivre des moments magiques avec Kasa.`;
            case "/portfolio/sites-prevue/sophie-bluel":
                return "Le site de Sophie Bluel est bien plus qu'une simple vitrine en ligne. C'est une invitation à découvrir le talent et la passion d'une designer d'espace visionnaire. Notre site web, construit avec HTML, CSS et JavaScript, offre une expérience immersive qui met en valeur le portfolio varié et inspirant de Sophie Bluel. Grâce à des fonctionnalités interactives et une navigation fluide, vous pouvez explorer ses projets, trouver l'inspiration et même contacter Sophie pour discuter de votre prochain projet de design. Nous avons choisi d'utiliser HTML, CSS et JavaScript pour créer le site de Sophie Bluel pour plusieurs raisons. Ces langages sont polyvalents, largement pris en charge par les navigateurs web modernes, et permettent de créer des sites web riches en fonctionnalités et en interactivité. De plus, leur combinaison offre une flexibilité totale pour concevoir une expérience utilisateur unique et engageante, sans la nécessité d'un backend complexe. Que vous soyez un amateur de design d'espace à la recherche d'inspiration ou un client potentiel souhaitant collaborer avec Sophie Bluel sur un projet, le site de Sophie Bluel est là pour vous accueillir. Rejoignez-nous dès aujourd'hui et laissez-vous emporter par un voyage au cœur du design d'espace avec Sophie Bluel.";
            case "/portfolio/sites-prevue/booki":
                return "Notre site web, créé avec du HTML et du CSS, offre une interface intuitive et conviviale qui simplifie le processus de réservation et vous permet de trouver l'endroit parfait pour votre prochain voyage en un rien de temps. Nous avons choisi d'utiliser HTML et CSS pour créer Booki pour plusieurs raisons. Tout d'abord, ces langages sont largement pris en charge par les navigateurs web modernes, garantissant une compatibilité maximale avec tous les appareils et systèmes d'exploitation. De plus, HTML et CSS sont des langages simples et faciles à apprendre, ce qui nous a permis de créer rapidement et efficacement une expérience utilisateur fluide et attrayante, sans la nécessité d'un backend complexe. Vous vous demandez peut-être pourquoi nous n'avons pas utilisé de backend pour alimenter Booki. La réponse est simple : nous voulions offrir une expérience légère et rapide, sans les complications et les coûts supplémentaires associés à la gestion d'un serveur et d'une base de données. En utilisant uniquement HTML et CSS, nous avons pu créer un site web réactif et fonctionnel qui met l'accent sur ce qui compte vraiment : la facilité de réservation et la découverte d'hôtels fantastiques.";
            default:
                return ""; // Retourne une chaîne vide par défaut
        }
    };

    return (
        <section className="container-section-constructionsites">
            <h2>Construction Developpeur</h2>
            <p>{getDescription()}</p>
        </section>
    );
}

export default ConstructionSites;