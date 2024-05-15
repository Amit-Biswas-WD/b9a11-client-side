import Aos from "aos";
import { Map, Marker } from "pigeon-maps";
import { useEffect } from "react";
import "aos/dist/aos.css";

const Maps = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      className="max-w-7xl mx-auto"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
    >
      <Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
        <Marker width={50} anchor={[50.879, 4.6997]} />
      </Map>
    </div>
  );
};

export default Maps;
