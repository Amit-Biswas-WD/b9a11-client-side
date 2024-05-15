import Amenities from "../../Conponents/Amenities/Amenities";
import Harmony from "../../Conponents/Harmony/Harmony";
import HarmonyDifference from "../../Conponents/HarmonyDifference/HarmonyDifference";
import HarmonySuites from "../../Conponents/HarmonySuites/HarmonySuites";
import Maps from "../../Conponents/Map/Map";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HarmonySuites></HarmonySuites>
      <Amenities></Amenities>
      <HarmonyDifference></HarmonyDifference>
      <Harmony></Harmony>
      <Maps></Maps>
    </div>
  );
};

export default Home;
