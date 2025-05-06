import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const Update = () => {
  const myData = useLoaderData();
  const { _id, date, rating_4, price, size, img, offer } = myData;

  const handleUpdate = (event) => {
    event.preventDefault();
    const from = event.target;
    const date = from.date.value;
    const rating_4 = from.rating_4.value;
    const price = from.price.value;
    const size = from.size.value;
    const img = from.img.value;
    const offer = from.offer.value;
    const Value = { date, rating_4, price, size, img, offer };
    console.log(Value);

    fetch(`http://localhost:5000/booking/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Value),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast("Updated!");
      });
  };

  return (
    <div className="max-w-7xl mx-auto mt-24">
      <form onSubmit={handleUpdate}>
        <div className="flex items-center gap-10 w-full my-8">
          <div className="w-[48%]">
            <label className="font-bold my-2 block">Date</label>
            <input
              type="text"
              name="date"
              defaultValue={date}
              className="border border-gray-300 px-4 py-2 w-full rounded"
              placeholder="Date"
            />
          </div>
          <div className="w-[48%]">
            <label className="font-bold my-2 block">Rating</label>
            <input
              type="number"
              name="rating_4"
              defaultValue={rating_4}
              className="border border-gray-300 px-4 py-2 w-full rounded"
              placeholder="Rating"
            />
          </div>
        </div>
        <div className="flex items-center gap-10 w-full my-8">
          <div className="w-[48%]">
            <label className="font-bold my-2 block">Price</label>
            <input
              type="number"
              name="price"
              defaultValue={price}
              className="border border-gray-300 px-4 py-2 w-full rounded"
              placeholder="Price"
            />
          </div>
          <div className="w-[48%]">
            <label className="font-bold my-2 block">Size</label>
            <input
              type="text"
              name="size"
              defaultValue={size}
              className="border border-gray-300 px-4 py-2 w-full rounded"
              placeholder="Size"
            />
          </div>
        </div>
        <div className="flex items-center gap-10 w-full my-8">
          <div className="w-[48%]">
            <label className="font-bold my-2 block">Image</label>
            <input
              type="text"
              name="img"
              defaultValue={img}
              className="border border-gray-300 px-4 py-2 w-full rounded"
              placeholder="Image URL"
            />
          </div>
          <div className="w-[48%]">
            <label className="font-bold my-2 block">Offer</label>
            <input
              type="text"
              name="offer"
              defaultValue={offer}
              className="border border-gray-300 px-4 py-2 w-full rounded"
              placeholder="Offer"
            />
          </div>
        </div>
        <div className="text-center mt-4">
          <button className="btn btn-primary w-full">Update</button>
        </div>
      </form>
    </div>
  );
};

export default Update;
