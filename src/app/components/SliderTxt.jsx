import React from "react";

const SliderTxt = () => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(#0000006e, #0000006e), url('/properties/hd-bg-properties-in-egypt.jpeg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "scroll",
        backgroundSize: "cover",
      }}
      className="w-screen h-screen transition-all flex justify-center items-center text-white font-bold text-5xl"
    >
      <div className="w-full whitespace-nowrap overflow-hidden">
        <p className="slider-txt">
          امتلك منزل احلامك الان باسعار تناسب ميزانيتك.وحدات متنوعة في افضل
          الاماكن في مصر
        </p>
      </div>
    </div>
  );
};

export default SliderTxt;
