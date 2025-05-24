import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Conponents/Context/AuthContextProvider";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";

const MyBooking = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/booking?email=${user?.email}`;

  useEffect(() => {
    if (user?.email) {
      fetch(url, {withCredentials: "include"})
        .then((res) => res.json())
        .then((data) => setBookings(data));
    }
  }, [url, user?.email]);

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
          withCredentials: "include",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = bookings.filter(
                (bookingItem) => bookingItem._id !== id
              );
              setBookings(remaining);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto my-4 mt-20">
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
              <th>Edit</th>
              <th>
                <h2>Cancel</h2>
              </th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingRow
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
              ></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBooking;
