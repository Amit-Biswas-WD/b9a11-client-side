import { useEffect, useState } from "react";
import Room from "./Room";
import Aos from "aos";
import "aos/dist/aos.css";

const RoomPage = () => {
  const [roomPage, setRoomPage] = useState([]);

  useEffect(() => {
    Aos.init();
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setRoomPage(data));
  }, []);
  return (
    <div className="max-w-7xl mx-auto">
      <details
        className="dropdown md:mb-4"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <summary className="m-1 btn">open or close</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-slate-200 rounded-box w-52">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
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
