import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Conponents/Context/AuthContextProvider";

const RoomDetailsPage = () => {
  const rooms = useLoaderData();
  const { user } = useContext(AuthContext);

  const {
    room_description,
    price_per_night,
    room_size,
    availability,
    room_images,
    special_offers,
  } = rooms;

  fetch("http://localhost:5000/services", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });

  return (
    <div className="max-w-7xl mx-auto flex gap-10">
      <div className="w-1/2">
        <img className="w-full" src={room_images} alt="" />
      </div>
      <div className="w-1/2 flex-wrap h-full">
        <div>
          <p className="text-lg font-normal my-2 ">
            Price Par Night: {price_per_night}
          </p>
          <p className="text-lg font-normal my-2 ">Room Size: {room_size}</p>
          <p className="text-lg font-normal my-2 ">
            Availability: {availability}
          </p>
          <p className="text-lg font-normal my-2 ">
            Special Offers: {special_offers}
          </p>
          <p className="text-base font-normal my-2 ">
            Room Description: {room_description}
          </p>
        </div>
        <div className="mt-auto">
          <button className="btn btn-primary">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailsPage;
