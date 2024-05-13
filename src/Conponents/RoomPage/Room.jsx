import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Room = ({ room }) => {
  const { _id, room_images, price_per_night } = room;
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      className="mb-10"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
    >
      <Link to={`/roomdetails/${_id}`}>
        <img className="w-full" src={room_images} alt="" />
      </Link>
      <h2 className="text-2xl">Price Per Night: {price_per_night}</h2>
    </div>
  );
};

export default Room;
