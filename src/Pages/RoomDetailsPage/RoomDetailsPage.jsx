// import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
// import { AuthContext } from "../../Conponents/Context/AuthContextProvider";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const RoomDetailsPage = () => {
  // const { user } = useContext(AuthContext);
  const rooms = useLoaderData();
  const {
    _id,
    room_description,
    price_per_night,
    room_size,
    availability,
    room_images,
    special_offers,
  } = rooms;

  const handleRoomDetails = (event) => {
    event.preventDefault();

    const roomDetails = {
      services_id: _id,
      price: price_per_night,
      size: room_size,
      img: room_images,
    };
    console.log(roomDetails);

    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(roomDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <form
      onSubmit={handleRoomDetails}
      className="max-w-7xl mx-auto flex gap-10"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
    >
      <div className="w-1/2">
        <img className="w-full" src={room_images} alt="" />
      </div>
      <div className="w-1/2 flex-wrap h-full">
        <div>
          <p className="text-lg font-normal my-2">
            Price Par Night: {price_per_night}
          </p>
          <p className="text-lg font-normal my-2">Room Size: {room_size}</p>
          <p className="text-lg font-normal my-2">
            Availability: {availability}
          </p>
          <p className="text-lg font-normal my-2">
            Special Offers: {special_offers}
          </p>
          <p className="text-base font-normal my-2">
            Room Description: {room_description}
          </p>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-primary btn-block"
            type="submit"
            value="Order Confirm"
          />
        </div>
      </div>
    </form>
  );
};

export default RoomDetailsPage;
