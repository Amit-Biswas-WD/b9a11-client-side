import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";

const RoomDetailsPage = () => {
  const { user } = useAuth();
  const email = user?.email;
  const rooms = useLoaderData([]);
  console.log(rooms);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

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
    const form = event.target;
    const date = form.date.value;
    const rating_4 = form.rating_4.value;
    setIsButtonClicked(true);

    const roomDetails = {
      date,
      rating_4,
      email: email,
      services_id: _id,
      price: price_per_night,
      size: room_size,
      img: room_images,
      offer: special_offers,
    };
    console.log(roomDetails);

    fetch("https://b9a11-server-side-amit44777.vercel.app/booking", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(roomDetails),
      withCredentials: "include"
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast("Data added");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // useEffect(() => {
  //   Aos.init();
  // }, []);

  return (
    <form
      onSubmit={handleRoomDetails}
      className="max-w-7xl mx-auto md:flex mt-24 gap-10 mb-6"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
    >
      <div className="md:w-1/2">
        <img className="w-full" src={room_images} alt="" />
      </div>
      <div className="md:w-1/2 flex-wrap h-full">
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
        <div className="flex justify-between mt-6">
          <input
            type="date"
            name="date"
            className="input input-bordered"
            required
          />
          <div className="rating">
            <input
              type="radio"
              name="rating_4"
              className="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name="rating_4"
              className="mask mask-star-2 bg-green-500"
              checked
            />
            <input
              type="radio"
              name="rating_4"
              className="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name="rating_4"
              className="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name="rating_4"
              className="mask mask-star-2 bg-green-500"
            />
          </div>
        </div>
        <div className="form-control mt-6 max-w-36">
          {user?.email ? (
            <input
              className="btn btn-primary btn-block"
              type="submit"
              value="Book Now"
              disabled={isButtonClicked}
            />
          ) : (
            <Link to={`/login`}>
              <input
                className="btn btn-primary btn-block"
                type="submit"
                value="Book Now"
                disabled={isButtonClicked}
              />
            </Link>
          )}
        </div>
      </div>
    </form>
  );
};

export default RoomDetailsPage;
