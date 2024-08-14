"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const SliderTxt = () => {
  const sliderContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sliderContainer,
    offset: ["start end", "end start"],
  });

  // Map the scrollYProgress to a scaling value
  const scale = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 1],
    [0.25, 1, 1, 0.75]
  );

  return (
    <div className="w-screen h-screen bg-gray-300">
      <motion.div
        ref={sliderContainer}
        style={{
          scale: scale,
          backgroundColor: "red",
          backgroundImage:
            "linear-gradient(#0000006e, #0000006e), url('/properties/hd-bg-properties-in-egypt.jpeg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "scroll",
          backgroundSize: "cover",
        }}
        className="slider-container w-screen h-screen transition-all flex justify-center items-center text-white font-bold text-5xl"
      >
        <div className="w-full whitespace-nowrap overflow-hidden">
          <p className="slider-txt">
            امتلك منزل احلامك الان باسعار تناسب ميزانيتك. وحدات متنوعة في افضل
            الاماكن في مصر
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default SliderTxt;
