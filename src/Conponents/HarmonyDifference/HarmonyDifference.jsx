import image from "../../../public/image/image2.jpg"

const HarmonyDifference = () => {

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
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        src={image}
        alt=""
      />
    </div>
  );
};

export default HarmonyDifference;
