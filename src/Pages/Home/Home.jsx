import Amenities from "../../Conponents/Amenities/Amenities";
import HarmonyDifference from "../../Conponents/HarmonyDifference/HarmonyDifference";
import HarmonySuites from "../../Conponents/HarmonySuites/HarmonySuites";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HarmonySuites></HarmonySuites>
      <Amenities></Amenities>
      <HarmonyDifference></HarmonyDifference>
    </div>
  );
};

export default Home;
