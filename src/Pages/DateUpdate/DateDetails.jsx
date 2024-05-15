import { CiEdit } from "react-icons/ci";

const DateDetails = ({ booking }) => {
  const { date, price, size, img, offer } = booking;

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
      <td>{date}</td>

      <td>
        <button className="btn" aria-label="Edit">
          <CiEdit className="w-8 h-8" />
        </button>
      </td>
    </tr>
  );
};

export default DateDetails;
