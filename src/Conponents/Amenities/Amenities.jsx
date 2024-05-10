import { FaWifi } from "react-icons/fa";
import { BsCupHot } from "react-icons/bs";
import { FaSquareParking } from "react-icons/fa6";
import { SiOpenaigym } from "react-icons/si";
import { PiSwimmingPool } from "react-icons/pi";
import { FaKey } from "react-icons/fa";
import { SiGotomeeting } from "react-icons/si";
import { MdOutlineLocalAtm } from "react-icons/md";
import { MdBusinessCenter } from "react-icons/md";

const Amenities = () => {
  return (
    <div className="max-w-3xl mx-auto font-serif">
      <h1 className="md:text-5xl text-3xl font-bold text-center">AMENITIES</h1>
      <div className="">
        <div className="flex justify-between my-10">
          <div className="flex items-center gap-2">
            <FaWifi className="text-[#c18d58]" />
            <h2>Free Wifi</h2>
          </div>
          <div className="flex items-center gap-2">
            <BsCupHot className="text-[#c18d58]" />
            <h2>Complimentary Breakfast</h2>
          </div>
          <div className="flex items-center gap-2">
            <FaSquareParking className="text-[#c18d58]" />
            <h2>Free Parking</h2>
          </div>
          <div className="flex items-center gap-2">
            <SiOpenaigym className="text-[#c18d58]" />
            <h2> Gym</h2>
          </div>
          <div className="flex items-center gap-2">
            <PiSwimmingPool className="text-[#c18d58]" />
            <h2>Swimming Pool</h2>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <FaKey className="text-[#c18d58]" />
            <h2>Key Card</h2>
          </div>
          <div className="flex items-center gap-2">
            <SiGotomeeting className="text-[#c18d58]" />
            <h2>Meeting Facilities</h2>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlineLocalAtm className="text-[#c18d58]" />
            <h2>ATM</h2>
          </div>
          <div className="flex items-center gap-2">
            <MdBusinessCenter className="text-[#c18d58]" />
            <h2>Business Center</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
