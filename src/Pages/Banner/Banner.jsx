import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      className="flex items-center justify-center h-screen mb-12 overflow-hidden"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
    >
      <video autoPlay loop muted>
        <source
          src="https://www.staging3.harmonysuites.com/wp-content/uploads/2023/08/1920-x-895-Reel-V6.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Banner;
