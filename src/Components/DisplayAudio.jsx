/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./components.css";
import { GrPowerReset } from "react-icons/gr";
import { SiConvertio } from "react-icons/si";

export const DisplayAudioFile = ({ file, setfile }) => {
  return (
    <div className="mainHomeContanier flex flex-col ">
      <div className="flex flex-col  items-center ">
        <h1 className=" flex text-[25px]">
          Vocal <p className=" text-blue-400">Transcribe</p>
        </h1>
        <h2>Name </h2>
        <p className="text-[20px] text-blue-400 ">{file.name}</p>
      </div>
      <div
        className=" flex  gap-4 
      sm:w-[30%] justify-between mt-[10px]"
      >
        <button
          className="btn  rounded-md gap-2"
          onClick={() => {
            setfile(null);
          }}
        >
          <GrPowerReset />
          reset
        </button>
        <button className="btn  rounded-md gap-2">
          <SiConvertio />
          Transcribe
        </button>
      </div>
    </div>
  );
};
