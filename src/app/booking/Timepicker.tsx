import React, { useState } from "react";
import "./timepicker.css";

interface TimePickerProps {
  onTimeSelected: (time: string) => void;
}

const TimePicker = ({ onTimeSelected }: TimePickerProps) => {
  const hoursArray = Array.from({ length: 24 }, (_, i) =>
    i.toString().padStart(2, "0")
  );
  const minutesArray = Array.from({ length: 60 }, (_, i) =>
    i.toString().padStart(2, "0")
  );
  const secondsArray = Array.from({ length: 1 }, (_, i) =>
    i.toString().padStart(2, "00")
  );

  const [selectedHour, setSelectedHour] = useState("12");
  const [selectedMinute, setSelectedMinute] = useState("30");
  const [selectedSecond, setSelectedSecond] = useState("30");

  return (
    <div className="flex flex-col items-center p-4">
      <div className="flex justify-center items-center mb-4">
        <div className="overflow-auto h-32 w-20 hide-scrollbar">
          {hoursArray.map((hour) => (
            <div
              key={hour}
              onClick={() => setSelectedHour(hour)}
              className={`cursor-pointer p-2 text-center ${
                selectedHour === hour ? "bg-gray-200" : ""
              }`}
            >
              {hour}
            </div>
          ))}
        </div>
        <div className="overflow-auto h-32 w-20 hide-scrollbar">
          {minutesArray.map((minute) => (
            <div
              key={minute}
              onClick={() => setSelectedMinute(minute)}
              className={`cursor-pointer p-2 text-center ${
                selectedMinute === minute ? "bg-gray-200" : ""
              }`}
            >
              {minute}
            </div>
          ))}
        </div>
        <div className="overflow-auto h-32 w-20 hide-scrollbar">
          {secondsArray.map((second) => (
            <div
              key={second}
              onClick={() => setSelectedSecond(second)}
              className={`cursor-pointer p-2 text-center ${
                selectedSecond === second ? "bg-gray-200" : ""
              }`}
            >
              {second}
            </div>
          ))}
        </div>
      </div>
      <button
        className="bg-[#FF8A00] px-4 py-2 border rounded-lg text-white text-lg hover:scale-105"
        onClick={() => {
          onTimeSelected(`${selectedHour}:${selectedMinute}:${selectedSecond}`);
        }}
      >
        Set Time
      </button>
      {/* <p>{onTimeSelected}</p> */}
      {/* <button onClick={handleSetTime}>Set Time</button> */}
    </div>
  );
};

export default TimePicker;
