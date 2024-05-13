import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HarmonyDifference = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      className="md:mt-20 mt-14 max-w-7xl mx-auto"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
    >
      <h1 className="md:text-5xl text-3xl font-serif font-bold text-center md:mb-14 mb-10">
        THE HARMONY DIFFERENCE
      </h1>
      <img
        src="https://i.ibb.co/0GJ93Dr/image-2024-01-18-T10-32-59-007-Z.jpg"
        alt=""
      />
    </div>
  );
};

export default HarmonyDifference;
