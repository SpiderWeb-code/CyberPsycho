import React from "react";
import "../DescriptionSites/DescriptionSites.scss";

function DescriptionSites() {
    // Obtient l'URL de la page
    const currentPath = window.location.pathname;

    // Fonction pour déterminer le texte du h2 en fonction de l'URL
    const getTitle = () => {
        switch (currentPath) {
            case "/portfolio/sites-prevue/booki":
                return "Booki";
            case "/portfolio/sites-prevue/sophie-bluel":
                return "Sophie Bluel";
            case "/portfolio/sites-prevue/kasa":
                return "Kasa";
            default:
                return "Hello World";
        }
    };

    // Fonction pour déterminer le texte du paragraphe en fonction de l'URL
    const getDescription = () => {
        switch (currentPath) {
            case "/portfolio/sites-prevue/booki":
                return `
                Booki est une plateforme de gestion de réservation en ligne qui offre aux entreprises et aux particuliers la possibilité de planifier et de gérer leurs rendez-vous, leurs réservations et leurs événements. Que ce soit pour des restaurants, des salons de coiffure, des spas, des studios de fitness ou d'autres services, Booki simplifie le processus de réservation, aidant ainsi les entreprises à organiser leur emploi du temps et à offrir une meilleure expérience client. Avec des fonctionnalités de réservation en temps réel, de gestion des disponibilités et de rappels automatiques, Booki contribue à optimiser l'efficacité opérationnelle et à fidéliser la clientèle.`;
            case "/portfolio/sites-prevue/sophie-bluel":
                return "Notre vision est simple : transformer les espaces ordinaires en oasis de sophistication. Chaque projet est une aventure, où nous travaillons en étroite collaboration avec nos clients pour capturer leur essence et la traduire en design. Nous croyons en l'importance de créer des intérieurs qui reflètent le caractère unique de ceux qui y vivent. Prêt à donner vie à votre vision ? Parlons de votre projet ! Que vous ayez déjà une idée claire en tête ou que vous recherchiez l'inspiration, nous sommes là pour vous aider à concrétiser vos aspirations.";
            case "/portfolio/sites-prevue/kasa":
                return `Kasa est une plateforme de location de logements qui facilite la recherche, la réservation et la gestion des hébergements pour les voyageurs et les hôtes. Que vous cherchiez un appartement, une maison ou une chambre pour une nuit ou pour un séjour prolongé, Kasa propose une variété d'options dans différentes villes. Les voyageurs bénéficient d'une expérience sans tracas avec des processus de réservation simples et des logements vérifiés répondant à des normes de qualité élevées. Les hôtes peuvent maximiser leurs revenus en mettant en location leurs propriétés de manière transparente grâce à la plateforme de gestion tout-en-un de Kasa.`;
            default:
                return "Description par défaut";
        }
    };

    return (
        <section className="container-section-descriptionsites">
            <h2>{getTitle()}</h2>
            <p>{getDescription()}</p>
        </section>
    );
}

export default DescriptionSites;