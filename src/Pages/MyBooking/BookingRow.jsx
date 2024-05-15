import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";

const BookingRow = ({ booking, handleDelete }) => {
  const { _id, date, price, size, img, offer } = booking;

  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-square btn-outline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        {/* <div className="flex items-center gap-3"> */}
        <div className="avatar">
          <div className="rounded w-24 h-24">
            <img src={img} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
        {/* <div>
          <div className="font-bold">{offer}</div>
        </div> */}
        {/* </div> */}
      </td>
      <td>{offer}</td>
      <td>{price}</td>
      <td>{size}</td>
      <td>{date}</td>

      <th>
        <button className="btn">
          <Link to={`/dateupdate/${_id}`}>
            <CiEdit className="w-8 h-8" />
          </Link>
        </button>
      </th>
    </tr>
  );
};

export default BookingRow;
