import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="font-general text-sm uppercase md:text-[10px]">
          Welcome to SXBC MEDIA
        </h2>

        <AnimatedTitle
          title="Disc<b>o</b>ver the <b>w</b>orld of <br />
        <b>media</b> inside <br />
        ST.X<b>A</b>VIER'S <b>B</b>OYS' <b>C</b>OLLEGE"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">
          <p>
            The group of MEDIA begins your imagination with images, now become
            an epic journey through development.
          </p>
          <p className=" opacity-65">
            MEDIA unites all the memories of S.X.B.C.
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.webp"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover border border-stone-700"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
