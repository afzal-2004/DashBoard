import "./components.css";
import { FaPlus } from "react-icons/fa6";
export const Header = () => {
  return (
    <div className="flex justify-between  items-center ">
      <h1 className=" flex text-[25px]">
        Vocal <p className=" text-blue-400">Transcribe</p>
      </h1>
      <button className="btn  rounded-md">
        <FaPlus />
        New
      </button>
    </div>
  );
};
