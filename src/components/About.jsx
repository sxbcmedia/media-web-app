import React from "react";

const About = () => {
  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="font-general text-sm uppercase md:text-[10px]">
          Welcome to SXBC MEDIA
        </h2>

        <div className="mt-5 text-center text-4xl uppercase leading-[0.8] md:text-[6rem]">
          Disc<b>o</b>ver the world of <br />
          media inside <br />
          ST.X<b>A</b>VIER'S BOYS' COLLEGE
        </div>
      </div>
    </div>
  );
};

export default About;
