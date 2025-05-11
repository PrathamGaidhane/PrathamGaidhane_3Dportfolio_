import React from "react";
import TitleHeader from "../components/TitleHeader";
import { sub } from "three/tsl";
import { testimonials } from "../constants";
import GlowCard from "../components/GlowCard";

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-centre section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="what People Say About Me?"
          sub="⭐ Client Feedback Highligts"
        />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-18">
          {testimonials.map(({ imgPath, name, mentions, review }, ) => (
            <GlowCard className='text-white' card={{ review }} >
              <div className="flex items-center gap-3">
                <div>
                  <img
                    src={imgPath}
                    alt={name}
                    className="w-10 h-10 object-cover rounded-full"
                  />
                </div>
                <div>
                  <p className="font-bold">{name}</p>{" "}
                  {/* Name should be shown here */}
                  <p className="text-white-50">{mentions}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
