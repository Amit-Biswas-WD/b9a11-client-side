import { useState, useEffect, useContext } from "react";
import Swal from "sweetalert2";
import DateDetails from "./DateDetails";
import { AuthContext } from "../../Conponents/Context/AuthContextProvider";

const DateUpdate = () => {
  const { user } = useContext(AuthContext);
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    fetch(
      `https://assignment-11-server-side-steel-pi.vercel.app/booking/${user?.img}`
    )
      .then((res) => res.json())
      .then((data) => setBooking(data))
      .catch((error) => {
        console.error("Error fetching booking data:", error);
      });
  }, [user]);

  const handleUpdate = (id, newDate) => {
    fetch(
      `https://assignment-11-server-side-steel-pi.vercel.app/booking/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ date: newDate }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.updatedCount > 0) {
          const updatedBooking = booking.map((bookingItem) =>
            bookingItem._id === id
              ? { ...bookingItem, date: newDate }
              : bookingItem
          );
          setBooking(updatedBooking);
          Swal.fire("Updated!", "Booking date has been updated.", "success");
        }
      })
      .catch((error) => {
        console.error("Error updating booking:", error);
      });
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="text-xl">
              <th>Image</th>
              <th>Offer</th>
              <th>Price</th>
              <th>Size</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {booking.length === 0 ? (
              <tr>
                <td colSpan="6">Loading...</td>
              </tr>
            ) : (
              booking.map((bookings) => (
                <DateDetails
                  key={bookings._id}
                  bookings={bookings}
                  handleUpdate={handleUpdate}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DateUpdate;
