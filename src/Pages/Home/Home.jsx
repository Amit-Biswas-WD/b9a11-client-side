import Amenities from "../../Conponents/Amenities/Amenities";
import Harmony from "../../Conponents/Harmony/Harmony";
import HarmonyDifference from "../../Conponents/HarmonyDifference/HarmonyDifference";
import HarmonySuites from "../../Conponents/HarmonySuites/HarmonySuites";
import Banner from "../Banner/Banner";
import Promotions from "../Promotions/Promotions";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HarmonySuites></HarmonySuites>
      <Amenities></Amenities>
      <Promotions></Promotions>
      <HarmonyDifference></HarmonyDifference>
      <Harmony></Harmony>
    </div>
  );
};

export default Home;
