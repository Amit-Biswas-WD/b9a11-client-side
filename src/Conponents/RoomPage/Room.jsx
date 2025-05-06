import { Link } from "react-router-dom";
import image from "../../../public/Harmony/Harmony.png";

const Room = ({ room }) => {
  const { _id, room_images, price_per_night } = room;

  return (
    <div
      className="mb-10 border-2 border-gray-200 shadow-2xl relative"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
    >
      <Link to={`/roomDetails/${_id}`}>
        <img
          className="w-full h-[412px]"
          src={room_images || image}
          alt="Not Image Found"
        />
        <h2 className="text-xl absolute top-0 right-0 text-green-600 font-semibold px-6 py-2 bg-gray-300">
          Per Night: {price_per_night ? price_per_night : "N/A"} $
        </h2>
      </Link>
    </div>
  );
};

export default Room;
