import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Conponents/Context/AuthContextProvider";

const RoomDetailsPages = () => {
  const { user } = useContext(AuthContext);
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

  const handleBookServices = (event) => {
    event.preventDefault();
    const from = event.target;
  };
  return (
    <form onSubmit={handleBookServices} className="card-body">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="photoUrl"
            defaultValue={room_images}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input
            type="text"
            name="price"
            defaultValue={price_per_night}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <input
            type="text"
            name="area"
            defaultValue={room_size}
            placeholder="Your Email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Due Amount</span>
          </label>
          <input
            type="text"
            name="special"
            defaultValue={special_offers}
            className="input input-bordered"
            required
          />
        </div>
      </div>
      {/* <textarea className="mt-8" rows="4" cols="50">
          Enter text here...
        </textarea> */}
      <div className="form-control mt-6">
        <input
          className="btn btn-primary btn-block"
          type="submit"
          value="Order Confirm"
        />
      </div>
    </form>
  );
};

export default RoomDetailsPages;
