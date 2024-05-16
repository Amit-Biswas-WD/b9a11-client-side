import { useEffect, useState } from "react";
import Room from "./Room";
import Aos from "aos";
import "aos/dist/aos.css";
// import { useLoaderData } from "react-router-dom";

const RoomPage = () => {
  const [roomPage, setRoomPage] = useState([]);
  const [sortedRooms, setSortedRooms] = useState([]);
  // const loaded = useLoaderData([]);

  useEffect(() => {
    Aos.init();
    fetch("https://assignment-11-server-side-steel-pi.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        setRoomPage(data);
        setSortedRooms(data); // Initially set sortedRooms to the fetched data
      });
  }, []);

  const sortHighToLow = () => {
    const sorted = [...roomPage].sort(
      (a, b) => b.price_per_night - a.price_per_night
    );
    setSortedRooms(sorted);
  };

  const sortLowToHigh = () => {
    const sorted = [...roomPage].sort(
      (a, b) => a.price_per_night - b.price_per_night
    );
    setSortedRooms(sorted);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <details className="dropdown">
        <summary className="m-1 btn">Sort by Price</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li>
            <button onClick={sortHighToLow}>High Price</button>
          </li>
          <li>
            <button onClick={sortLowToHigh}>Low Price</button>
          </li>
        </ul>
      </details>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
        {sortedRooms.map((room) => (
          <Room key={room._id} room={room}></Room>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default RoomPage;
