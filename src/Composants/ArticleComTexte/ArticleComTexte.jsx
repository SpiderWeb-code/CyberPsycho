import React, { useState, useEffect, useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";
import CarteDiscord from "../../models-3d/carte-discord_com.glb";
import CarteGithub from "../../models-3d/carte-github_com.glb";
import CarteTelephone from "../../models-3d/carte-telephone_com.glb";
import CartePaypal from "../../models-3d/carte-paypal_com.glb";
import "./ArticleComTexte.scss";

const animationSpeed = 1; // Ajustez cette valeur pour changer la vitesse des animations

// Composant pour le modèle Discord
function ModelDiscord(props) {
  const group = useRef();
  const { scene, animations } = useGLTF(CarteDiscord);
  const { actions } = useAnimations(animations, group);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    if (actions && !hasPlayed) {
      Object.values(actions).forEach((action) => {
        action.setLoop(THREE.LoopOnce, 1);
        action.clampWhenFinished = true;
        action.setEffectiveTimeScale(animationSpeed);
        action.play();
      });
      setHasPlayed(true);
    }
  }, [actions, hasPlayed]);

  return <primitive ref={group} object={scene} {...props} />;
}

// Composant pour le modèle GitHub
function ModelGithub(props) {
  const group = useRef();
  const { scene, animations } = useGLTF(CarteGithub);
  const { actions } = useAnimations(animations, group);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    if (actions && !hasPlayed) {
      Object.values(actions).forEach((action) => {
        action.setLoop(THREE.LoopOnce, 1);
        action.clampWhenFinished = true;
        action.setEffectiveTimeScale(animationSpeed);
        action.play();
      });
      setHasPlayed(true);
    }
  }, [actions, hasPlayed]);

  return <primitive ref={group} object={scene} {...props} />;
}

// Composant pour le modèle Telephone
function ModelTelephone(props) {
  const group = useRef();
  const { scene, animations } = useGLTF(CarteTelephone);
  const { actions } = useAnimations(animations, group);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    if (actions && !hasPlayed) {
      Object.values(actions).forEach((action) => {
        action.setLoop(THREE.LoopOnce, 1);
        action.clampWhenFinished = true;
        action.setEffectiveTimeScale(animationSpeed);
        action.play();
      });
      setHasPlayed(true);
    }
  }, [actions, hasPlayed]);

  return <primitive ref={group} object={scene} {...props} />;
}

// Composant pour le modèle PayPal
function ModelPaypal(props) {
  const group = useRef();
  const { scene, animations } = useGLTF(CartePaypal);
  const { actions } = useAnimations(animations, group);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    if (actions && !hasPlayed) {
      Object.values(actions).forEach((action) => {
        action.setLoop(THREE.LoopOnce, 1);
        action.clampWhenFinished = true;
        action.setEffectiveTimeScale(animationSpeed);
        action.play();
      });
      setHasPlayed(true);
    }
  }, [actions, hasPlayed]);

  return <primitive ref={group} object={scene} {...props} />;
}

function ArticleComTexte({ selectedIcon }) {
  const [content, setContent] = useState(null);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    let newContent;

    switch (selectedIcon) {
      case "discord":
        newContent = (
          <div className="model-container">
            <Canvas
              camera={{ position: [32, -5, 0], fov: 50 }}
              style={{ width: "100%", height: "100%" }}
            >
              <Suspense fallback={null}>
                <ambientLight intensity={50} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <pointLight position={[-5, -5, -5]} intensity={0.5} />
                <spotLight
                  position={[0, 1, 5]}
                  intensity={50}
                  angle={Math.PI / 8}
                  penumbra={1}
                />
                <ModelDiscord scale={1.5} position={[0, -1, 0]} />
              </Suspense>
            </Canvas>
          </div>
        );
        break;
      case "github":
        newContent = (
          <div className="model-container">
            <Canvas
              camera={{ position: [32, -5, 0], fov: 50 }}
              style={{ width: "100%", height: "100%" }}
            >
              <Suspense fallback={null}>
                <ambientLight intensity={50} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <pointLight position={[-5, -5, -5]} intensity={0.5} />
                <spotLight
                  position={[0, 1, 5]}
                  intensity={50}
                  angle={Math.PI / 8}
                  penumbra={1}
                />
                <ModelGithub scale={1.5} position={[0, -1, 0]} />
              </Suspense>
            </Canvas>
          </div>
        );
        break;
      case "phone":
        newContent = (
          <div className="model-container">
            <Canvas
              camera={{ position: [32, -5, 0], fov: 50 }}
              style={{ width: "100%", height: "100%" }}
            >
              <Suspense fallback={null}>
                <ambientLight intensity={50} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <pointLight position={[-5, -5, -5]} intensity={0.5} />
                <spotLight
                  position={[0, 1, 5]}
                  intensity={50}
                  angle={Math.PI / 8}
                  penumbra={1}
                />
                <ModelTelephone scale={1.5} position={[0, -1, 0]} />
              </Suspense>
            </Canvas>
          </div>
        );
        break;
      case "paypal":
        newContent = (
          <div className="model-container">
            <Canvas
              camera={{ position: [32, -5, 0], fov: 50 }}
              style={{ width: "100%", height: "100%" }}
            >
              <Suspense fallback={null}>
                <ambientLight intensity={50} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <pointLight position={[-5, -5, -5]} intensity={0.5} />
                <spotLight
                  position={[0, 1, 5]}
                  intensity={50}
                  angle={Math.PI / 8}
                  penumbra={1}
                />
                <ModelPaypal scale={1.5} position={[0, -1, 0]} />
              </Suspense>
            </Canvas>
          </div>
        );
        break;
      default:
        newContent = null; // Pas de contenu par défaut
    }

    setShowContent(false);
    setTimeout(() => {
      setContent(newContent);
      setShowContent(!!newContent); // Montrer le contenu seulement si newContent n'est pas null
    }, 100);
  }, [selectedIcon]);

  return (
    <div className="container-comtexte">
      {content && (
        <article
          className={`content-article ${showContent ? "show" : ""} ${selectedIcon === 'discord' ? 'border-aqua' : ''}`}
        >
          {content}
        </article>
      )}
    </div>
  );
}

export default ArticleComTexte;