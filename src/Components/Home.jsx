/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import { useState } from "react";
import "./components.css";
import { useRef, useState, useEffect } from "react";
import { FaMicrophone } from "react-icons/fa";

export const Home = ({ setfile }) => {
  const [status, setstatus] = useState("inActive");
  const [recording, setrecording] = useState(null);
  const [Duration, setDuration] = useState(0);
  const mediaRecorderRef = useRef(null);
  const fileInputRef = useRef(null);
  const mimeType = "audio/webn";
  const handleClick = () => {
    fileInputRef.current.click();
  };
  const Recording = async () => {
    let tempstream;
    console.log("Start Recording");
    console.log(status);
    try {
      const Audiodata = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false,
      });
      tempstream = Audiodata;
    } catch (error) {
      console.log(error.message);
      return;
    }
    setstatus("Active");
    const media = new MediaRecorder(tempstream, { type: mimeType });
    mediaRecorderRef.current = media;
    mediaRecorderRef.current.start();
    let localAudiaoChunks = [];
    mediaRecorderRef.current.ondataavailable = (event) => {
      console.log(event.data);
      if (typeof event.data === "undefined") {
        return;
      }
      if (event.data.size === 0) {
        return;
      }
      localAudiaoChunks.push(event.data);
    };
    setrecording(localAudiaoChunks);
  };
  const StopRecording = () => {
    setstatus("inActive");
    console.log("Stop Recording");
    console.log(status);
    mediaRecorderRef.current.stream
      .getTracks()
      .forEach((track) => track.stop());
    mediaRecorderRef.current.stop();

    mediaRecorderRef.current.onstop = () => {
      const audioBlob = new Blob(recording, { type: mimeType });

      setrecording([]);
      setDuration(0);
      setfile(true);
    };
  };

  useEffect(() => {
    if (status === "inActive") {
      return;
    }
    if (status === "Active") {
      const interval = setInterval(() => {
        setDuration((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  });

  return (
    <>
      <div className="mainHomeContanier">
        <div className="flex flex-col  items-center">
          <h1 className=" flex text-[25px]">
            Vocal <p className=" text-blue-400">Transcribe</p>
          </h1>
          <p>Recod &rarr; Transcribe &rarr; Translate </p>
          <button
            className="btn w-full  rounded-xl mt-3"
            onClick={() => {
              if (status === "inActive") {
                Recording();
              } else {
                StopRecording();
              }
            }}
          >
            <p
              className={`
                 ${status === "inActive" ? "text-black" : "text-blue-500"}`}
            >
              {status === "Active" ? `Stop Recording...` : `Record`}
            </p>{" "}
            <div className="flex gap-2 justify-center items-center ">
              <p
                className={`
                ${status === "inActive" ? "hidden" : ""}`}
              >
                {Duration}
              </p>
              <FaMicrophone
                className={`
                 ${status === "inActive" ? "text-black" : "text-red-500"}`}
              />{" "}
            </div>
          </button>
          <p className=" mt-[10px] cursor-pointer">
            Or{" "}
            <span className="text-blue-400" onClick={handleClick}>
              Upload
              <input
                ref={fileInputRef}
                type="file"
                accept="audio/*"
                className="hidden"
                onChange={(e) => {
                  //   e.target.value;
                  setfile(e.target.files[0]);
                  console.log(e.target.value);
                  console.log("Afzal");
                  console.log(e.target.files[0]);
                }}
              />
            </span>{" "}
            a mp3 file
          </p>
          <p className="text-[16px] text-slate-400    italic">
            Free Now Free ForeEver
          </p>
        </div>
      </div>
    </>
  );
};
