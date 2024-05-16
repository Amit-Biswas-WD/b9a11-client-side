import { useState } from "react";

const DateDetails = ({ bookings, handleUpdate }) => {
  const { _id, date, price, size, img, offer } = bookings;
  const [newDate, setNewDate] = useState(date);

  const handleChange = (e) => {
    setNewDate(e.target.value);
  };

  const handleUpdateClick = () => {
    handleUpdate(_id, newDate);
  };

  return (
    <tr>
      <td>
        <div className="avatar">
          <div className="rounded w-24 h-24">
            <img src={img} alt="Booking Avatar" />
          </div>
        </div>
      </td>
      <td>{offer}</td>
      <td>{price}</td>
      <td>{size}</td>
      <td>
        <input
          type="date"
          value={newDate}
          onChange={handleChange}
          className="input input-bordered"
        />
      </td>
      <td>
        <button className="btn" onClick={() => handleUpdateClick()}>
          Update
        </button>
      </td>
    </tr>
  );
};

export default DateDetails;
