import { useState } from "react";
import Swal from "sweetalert2";
import DateDetails from "./DateDetails";

const DateUpdate = () => {
  const [booking, setBooking] = useState([]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/booking/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = booking.filter(
                (bookingItem) => bookingItem._id !== id
              );
              setBooking(remaining);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-xl">
              <th>Image</th>
              <th>Offer</th>
              <th>Price</th>
              <th>Size</th>
              <th>Date</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {booking.map((booking) => (
              <DateDetails
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
              ></DateDetails>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DateUpdate;
