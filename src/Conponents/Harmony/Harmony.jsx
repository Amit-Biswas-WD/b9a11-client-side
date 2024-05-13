import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Harmony = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      className="my-20 max-w-7xl mx-auto"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
    >
      <div className="md:flex gap-20 w-full">
        <img
          className="md:w-1/2"
          src="https://i.ibb.co/F5XVcs9/2-1024x791.jpg"
          alt=""
        />
        <div className="md:w-1/2 md:mt-32 mt-8">
          <h1 className="md:text-5xl text-3xl font-serif font-bold mb-8">
            ACCOMMO DATIONS
          </h1>
          <p className="text-base font-serif">
            Indulge in the allure of spacious sophistication that only Harmony
            Suites can offer. Our suites redefine luxury, setting the stage for
            unforgettable memories and timeless experiences. Elevate your stay,
            and let us weave a tapestry of opulence around you. Secure your
            reservation now, and step into a world where grandeur knows no
            bounds. Our windows offer uninterrupted views of the city,s skyline
            or breathtaking landscapes, creating an ever-changing masterpiece
            that captivates your senses.
          </p>
        </div>
      </div>
      <div
        className="md:flex gap-20 w-full mt-20"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <div className="md:w-1/2 md:mt-32 mb-8">
          <h1 className="md:text-5xl text-3xl font-serif font-bold mb-8">
            MEETINGS & EVENTS
          </h1>
          <p className="text-base font-serif">
            Discover a haven for memorable events at our hotel, where modern
            luxury meets impeccable functionality. Our meticulously designed
            meeting and event facilities offer a seamless fusion of elegance and
            practicality. From intimate gatherings to grand celebrations, our
            versatile spaces are equipped with state-of-the-art amenities and
            supported by a dedicated team. Elevate your event with exquisite
            catering, advanced technology, and a prime location that ensures
            both convenience and sophistication. Your extraordinary event begins
            here.
          </p>
        </div>
        <img
          className="md:w-1/2"
          src="https://i.ibb.co/71mX6N2/3-1024x791.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Harmony;
