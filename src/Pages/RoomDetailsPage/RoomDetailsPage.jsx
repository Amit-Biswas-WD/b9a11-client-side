// import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
// import { AuthContext } from "../../Conponents/Context/AuthContextProvider";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const RoomDetailsPage = () => {
  // const { user } = useContext(AuthContext);
  const rooms = useLoaderData();
  const [book, setBook] = useState(rooms);
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
    setIsButtonClicked(true);

    // const email = form.email.value;

    const roomDetails = {
      // email,
      date,
      services_id: _id,
      price: price_per_night,
      size: room_size,
      img: room_images,
      offer: special_offers,
    };
    console.log(roomDetails);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "confirm Button!",
    }).then((result) => {
      if (result.isConfirmed) {
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
            if (data.insertedId) {
              Swal.fire({
                title: "Success!",
                text: "Your booking has been confirmed.",
                icon: "success",
              });
              const remaining = book.filter((room) => room._id !== _id);
              setBook(remaining);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
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
        <div className="flex justify-between mt-6">
          <input
            type="date"
            name="date"
            className="input input-bordered"
            required
          />
          {/* <input
            type="email"
            name="email"
            placeholder="type your email"
            id=""
          /> */}
          {
            <div className="form-control">
              <input
                className="btn btn-primary btn-block"
                type="submit"
                value="Book Now"
                disabled={isButtonClicked}
              />
            </div>
          }
        </div>
      </div>
    </form>
  );
};

export default RoomDetailsPage;
