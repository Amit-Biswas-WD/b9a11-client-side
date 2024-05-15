import { useEffect, useState } from "react";
import Room from "./Room";
import Aos from "aos";
import "aos/dist/aos.css";

const RoomPage = () => {
  const [roomPage, setRoomPage] = useState([]);

  // const producetCard = () => {
  //   const products = {
  //     price: ,
  //     price: ,
  //   }
  // }

  useEffect(() => {
    Aos.init();
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setRoomPage(data));
  }, []);
  return (
    <div className="max-w-7xl mx-auto">
      <details className="dropdown">
        <summary className="m-1 btn">open or close</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li>
            <a>High Price</a>
          </li>
          <li>
            <a>low Price</a>
          </li>
        </ul>
      </details>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
        {roomPage.map((room) => (
          <Room key={room._id} room={room}></Room>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default RoomPage;
