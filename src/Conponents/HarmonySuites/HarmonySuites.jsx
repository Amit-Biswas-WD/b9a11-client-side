import { Link } from "react-router-dom";
import image from "../../../public/image/image1.jpg"

const HarmonySuites = () => {

  return (
    <div>
      <div className="max-w-7xl mx-auto bg-white md:my-20 mb-14 mt-8">
        <div
          className="hero-content flex-col lg:flex-row-reverse "
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          <img
            src={image}
            className="rounded-lg  md:w-1/2"
          />
          <div className="md:w-1/2 mr-8">
            <h1 className="md:text-5xl text-3xl font-serif font-bold">
              WELCOME TO HARMONY SUITES
            </h1>
            <h2 className="italic font-medium md:text-xl text-lg mt-4">
              Book Your Dream Getaway
            </h2>
            <p className="py-6 text-base font-serif">
              Nestled in the vibrant heart of Secaucus, New Jersey, Harmony
              Suites welcomes you to a world of refined indulgence. Immerse
              yourself in the pinnacle of comfort, just moments away from the
              iconic American Dream Mall, where shopping fantasies come to life.
              Feel the exhilaration of being near the legendary MetLife Stadium,
              home to unforgettable events. Our lavish accommodations and
              personalized service promise a stay beyond compare. Embrace the
              perfect blend of convenience and luxury, where every moment is a
              cherished memory in the making. Your journey to opulence begins at
              Harmony Suites. Book your escape today!
            </p>
            <Link to={`/room`}>
              <button className="btn btn-primary uppercase">Book Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HarmonySuites;
