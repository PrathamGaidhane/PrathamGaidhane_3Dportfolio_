import React, { useEffect } from "react";
import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
  useEffect(() => {
    // Animate timeline cards
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      gsap.fromTo(
        card,
        {
          xPercent: -100,
          opacity: 0,
          transformOrigin: "left left",
        },
        {
          xPercent: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: card,
            start: "top 60%",
            end: "top 30%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Animate timeline scale
    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        onUpdate: (self) => {
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });

    // Animate expText only when it's available in DOM
    setTimeout(() => {
      gsap.utils.toArray(".expText").forEach((text) => {
        gsap.fromTo(
          text,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: text,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, 100); // Slight delay ensures elements are mounted
  }, []);
  // ✅ dependency array fixed

  return (
    <section
      id="experience"
      className="w-full md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Professional work Experince"
          sub="My Carrer Overview"
        />

        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((card, index) => (
              <div className="exp-card-wrapper" key={card.title}>
                <div className="xl:w-2/6">
                  <GlowCard card={card} index={index}>
                    <div className="flex flex-col items-start gap-3">
                      <img
                        src={card.imgPath}
                        alt={card.title}
                        className="w-26 h-18 object-contain"
                      />
                      <h2 className="text-xl font-bold">{card.title}</h2>
                      <p className="text-sm text-white-50">
                        {card.shortDescription}
                      </p>
                    </div>
                  </GlowCard>
                </div>
                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>
                    <div className="expText flex xl:gap20 md:gap-10 gap-5 relative z-20">
                      <div className="timeline-logo">
                        <img src={card.logoPath} alt="logo" />
                      </div>
                      <div>
                        <h1 className="font-semibold text-3xl">{card.title}</h1>
                        <p className="my-5 text-white-50">📆{card.date}</p>
                        <p className="text-[#839cb5] italic">
                          Responsibilities
                        </p>
                        <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                          {card.responsibilities.map((responsibilities) => (
                            <li key={responsibilities} className="text-lg">
                              {responsibilities}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
