import React, { useEffect, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import Model3d from "../../../models-3d/panneau-tarifs.glb";

function Tarifs(){
    const [width, setWidth] = useState(130); // Modifier la largeur du modèle ici
    const [height, setHeight] = useState(92); // Modifier la hauteur du modèle ici

    useEffect(() => {
        const handleResize = () => {
            let newWidth = 92;
            if (window.innerWidth <= 1117) {
                newWidth = 60;
            }
            setWidth(newWidth);
            setHeight(92);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        // Créer la scène Three.js
        const scene = new THREE.Scene();

        // Créer une caméra avec un champ de vision réduit
        const camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 1000);
        camera.position.set(9, 0, 0); // Décaler légèrement la caméra vers la gauche
        camera.lookAt(5, 0, -0.2); // Orienter la caméra vers l'origine (0, 0, 0)

        // Définir la taille de rendu
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(width, height);
        const canvas = renderer.domElement;
        canvas.style.marginLeft = window.innerWidth <= 1117 ? '2vw' : '3vw'; // Ajouter une marge de 3vw ou 2vw à gauche en fonction de la largeur de la fenêtre
        document.getElementById('container-header').appendChild(canvas);

        // Ajouter une lumière ambiante pour éclairer toute la scène
        const ambientLight = new THREE.AmbientLight(0xffffff, 1.5); // Intensité à 50%
        scene.add(ambientLight);

        // Ajouter une lumière directionnelle pour simuler une source de lumière principale
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5); // Lumière blanche à pleine intensité
        directionalLight.position.set(70, 35, 3.5); // Position de la lumière
        scene.add(directionalLight);

        // Charger le modèle glTF avec animation
        const loader = new GLTFLoader();
        loader.load(`${Model3d}`, function (gltf) {
            const model = gltf.scene;
            scene.add(model);

            // Activer les ombres pour le modèle
            model.traverse((child) => {
                if (child.isMesh) {
                    child.castShadow = false; // Désactiver les ombres pour les objets
                    child.receiveShadow = false; // Désactiver la réception d'ombres pour les objets
                }
            });

            // Obtenir toutes les animations du modèle
            const animations = gltf.animations;

            // Créer un mélangeur d'animation
            const mixer = new THREE.AnimationMixer(model);

            // Jouer toutes les animations disponibles
            animations.forEach(animation => {
                const action = mixer.clipAction(animation);
                action.play(); // Jouer l'animation

                // Lire la dernière frame de l'animation
                action.time = animation.duration;

                // Arrêter l'animation une fois terminée
                action.clampWhenFinished = true;
                action.loop = THREE.LoopOnce;
            });

            // Boucle de rendu pour mettre à jour toutes les animations
            function animate() {
                requestAnimationFrame(animate);

                // Mettre à jour le rendu de la scène
                renderer.render(scene, camera);
            }

            animate();
        });

        // Fonction de nettoyage
        return () => {
            // Nettoyer les ressources si nécessaire
            // Par exemple, vous pouvez supprimer le renderer.domElement du document.body
            // et arrêter la boucle de rendu de Three.js
            document.getElementById('container-header').removeChild(canvas);
            renderer.dispose();
            // Autres opérations de nettoyage si nécessaire
        };
    }, [width, height]);

    return null; // Ce composant ne rend rien directement
}

export default Tarifs;