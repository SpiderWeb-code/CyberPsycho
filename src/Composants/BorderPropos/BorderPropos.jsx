import React, { useEffect, useRef } from "react";
import "../BorderPropos/BorderPropos.scss";

function BorderPropos({ imageSrc, altText, title, text, imgWidth, applyGap }) {
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        }, { threshold: 0.5 });

        observer.observe(containerRef.current);

        return () => observer.disconnect();
    }, []);

    const handleHover = () => {
        const container = containerRef.current;
        if (!container.classList.contains("visible")) {
            container.classList.add("hovered");
        }
    };

    return (
        <section id="section-border-propos" className={applyGap ? "apply-gap" : ""}>
            <div id="container-img-border" style={{ width: imgWidth }}>
                <img src={imageSrc} alt={altText} style={{ width: imgWidth }}></img>
            </div>
            <div
                id="container-texte-border"
                ref={containerRef}
                onMouseEnter={handleHover}
                onMouseLeave={() => containerRef.current.classList.remove("hovered")}
            >
                <h4>{title}</h4>
                <h4>{text}</h4>
            </div>
        </section>
    );
}

export default BorderPropos;