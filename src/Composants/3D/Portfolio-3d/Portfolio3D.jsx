import React, { useEffect, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import Model3d from "../../../models-3d/panneau-portfolio.glb";
import "../../Header/Header.scss";

function Portfolio3D(){
    const [width, setWidth] = useState(130);
    const [height, setHeight] = useState(92);
    let renderer, scene, camera, mixer;

    useEffect(() => {
        const handleResize = () => {
            let newWidth = 130;
            if (window.innerWidth <= 1440) {
                newWidth = 100;
            }
            if (window.innerWidth <= 1122) {
                newWidth = 70;
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
        scene = new THREE.Scene();

        // Créer une caméra avec un champ de vision réduit
        camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 1000);
        camera.position.set(9, 0, 0); // Décaler légèrement la caméra vers la gauche
        camera.lookAt(5, 0, -0.2); // Orienter la caméra vers l'origine (0, 0, 0)

        // Définir la taille de rendu
        renderer = new THREE.WebGLRenderer();
        renderer.setSize(width, height);
        document.getElementById('container-header').appendChild(renderer.domElement);

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
            
            // Obtenir toutes les animations du modèle
            const animations = gltf.animations;

            // Créer un mélangeur d'animation
            mixer = new THREE.AnimationMixer(model);

            // Jouer toutes les animations disponibles
            animations.forEach(animation => {
                const action = mixer.clipAction(animation);
                action.play(); // Jouer l'animation

                // Arrêter l'animation une fois terminée
                action.clampWhenFinished = true;
                action.loop = THREE.LoopOnce;
            });

            // Boucle de rendu pour mettre à jour toutes les animations
            function animate() {
                requestAnimationFrame(animate);

                // Mettre à jour le rendu de la scène
                if (mixer) mixer.update(0.01); // Mettre à jour toutes les animations
                renderer.render(scene, camera);
            }

            animate();
        });

        // Fonction de nettoyage
        return () => {
            // Nettoyer les ressources si nécessaire
            // Par exemple, vous pouvez supprimer le renderer.domElement du document.body
            // et arrêter la boucle de rendu de Three.js
            if (document.getElementById('container-header')) {
                document.getElementById('container-header').removeChild(renderer.domElement);
                renderer.dispose();
            }
            // Autres opérations de nettoyage si nécessaire
        };
    }, [width, height]);

    return (
        <div id="container-header"></div>
    );
}

export default Portfolio3D;