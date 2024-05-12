import { Link } from "react-router-dom";

const Room = ({ room }) => {
  const { _id, room_images, price_per_night } = room;
  return (
    <div className="mb-10">
      <Link to={`/roomdetails/${_id}`}>
        <img className="w-full" src={room_images} alt="" />
      </Link>
      <h2 className="text-2xl">Price Per Night: {price_per_night}</h2>
    </div>
  );
};

export default Room;
