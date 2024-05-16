import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Conponents/Context/AuthContextProvider";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";
// import useAxiosSecure from "../../Conponents/Context/useAxiosSecure";

const MyBooking = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  // const axiosSecure = useAxiosSecure();

  const url = `https://assignment-11-server-side-steel-pi.vercel.app/booking?=${user?.img}`;
  // const url = `/booking?=${user?.img}`;
  useEffect(() => {
    // axiosSecure;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [url]);

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
        fetch(
          `https://assignment-11-server-side-steel-pi.vercel.app/booking/${id}`,
          {
            method: "DELETE",
          }
        )
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
    <div className="max-w-7xl mx-auto">
      <div className="overflow-x-auto">
        <table className="table">
          <h2 className="text-3xl">This is {bookings.length}</h2>
          {/* head */}
          <thead>
            <tr className="text-xl">
              <th>
                <h2>Delete</h2>
              </th>
              <th>Image</th>
              <th>Offer</th>
              <th>Price</th>
              <th>Size</th>
              <th>Date</th>
              <th>Edit</th>
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
