import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./about.css";
import CarShow from "../CarShow";

const AboutCar = () => {
  const bgCityRef = useRef(null);

  useEffect(() => {
    const loadSVG = async () => {
      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/city.svg`);
        const svgText = await response.text();
        if (bgCityRef.current) {
          bgCityRef.current.innerHTML = svgText;
          const svgElement = bgCityRef.current.querySelector("svg");
          if (svgElement) {
            svgElement.setAttribute("preserveAspectRatio", "xMidYMid slice");
          }
        }
        setAnimationScroll();
      } catch (error) {
        console.error("Error loading SVG:", error);
      }
    };

    const setAnimationScroll = () => {
      gsap.registerPlugin(ScrollTrigger);
      let runAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: bgCityRef.current,
          start: "top top",
          end: "+=1000",
          scrub: true,
          pin: true,
        },
      });

      runAnimation
        .add([
          gsap.to("#bg_city svg", { scale: 1.5, duration: 2 }),
          gsap.to("#full_city", { opacity: 0, duration: 2 }),
        ])
        .add([
          gsap.to("#building_top", { y: -200, opacity: 0, duration: 2 }),
          gsap.to("#wall_side", { x: -200, opacity: 0, duration: 2 }),
          gsap.to("#wall_front", { x: 200, y: 200, opacity: 0, duration: 2 }),
        ])
        .add([
          gsap.to("#interior_wall_side", { x: -200, opacity: 0, duration: 2 }),
          gsap.to("#interior_wall_top", { y: -200, opacity: 0, duration: 2 }),
          gsap.to("#interior_wall_side_2", { opacity: 0, duration: 2 }),
          gsap.to("#interior_wall_front", { opacity: 0, duration: 2 }),
        ]);
    };

    loadSVG();
  }, []);

  return (
    <div>
      <div className="banner">
        <div id="bg_city" ref={bgCityRef}></div>
        <div className="content">
          <div className="item">
            <div>
              <p>LUNDEV CHANNEL</p>
              <p>DEVELOPER & DESIGNER</p>
            </div>
            <div>
              <p>CONTENT CREATOR</p>
              <p>ALL LANGUAGE</p>
            </div>
          </div>
          <div className="item title">
            <p>Hong Kong</p>
            <p>Real Estate</p>
          </div>
        </div>
      </div>
      <main>
        <CarShow />
        <div className="friend">
          <div className="me">
            <h1>Lun Dev</h1>
            <h2>Developer & Designer</h2>
            <p>
              Please like and subscribe to the channel to watch many interesting
              videos about programming and web design.
            </p>
          </div>
          <ul>
            {[...Array(10)].map((_, index) => (
              <li key={index}>
                <img src={`img/${index + 1}.png`} alt={`Friend ${index + 1}`} />
              </li>
            ))}
          </ul>
        </div>
        <div className="lorem">
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form...
          </p>
        </div>
      </main>
    </div>
  );
};

export default AboutCar;
