import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/planability.jpg" alt="Ryde App Interface" />
            </div>
            <div className="text-content">
              <h2>
                On-Demand Plan Management Software called Planability built for
                Credability Systems
              </h2>
              <p className="text-white-50 md:text-xl">
                An app built with React Native, firebase, google analytics, MMKV
                & Mobx for a fast, user-friendly experience.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img src="/images/cri.png" alt="Library Management Platform" />
              </div>
              <h2>Carbon Reduction Institute (CRI)</h2>
              <p className="text-white-50 md:text-xl">
                An app built with React, Typescript, TailwindCSS, Zustand &
                React Hook Form for a fast, user-friendly experience.
              </p>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/fifaWc.png" alt="YC Directory App" />
              </div>
              <h2>A blog Template for Football</h2>
              <p className="text-white-50 md:text-xl">
                A template built with just HTML & CSS for a simple, responsive
                design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
