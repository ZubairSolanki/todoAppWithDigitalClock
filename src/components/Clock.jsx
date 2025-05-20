/*
import { useState } from "react";

export const Clock = () => {


  const [time, setTime] = useState({
    hours:0,
    minuts:0,
    sec:0
  });


  const handleclockTime = () => {
    const date = new Date(Date.now());
    setTime({
      date: date.toLocaleDateString(),
      hours: date.getHours(),
      minuts: date.getMinutes(),
      sec: date.getSeconds(),
    });
  };

  setInterval(handleclockTime, 1000);

  return (
    <div className="p-4 bg-white rounded-xl shadow-md max-w-md mx-auto">
      
      <p className="text-lg font-semibold text-gray-700 text-center mb-4">
        Date: {time.date}
      </p>


      <div className="flex justify-center items-center gap-4">
        <div className="flex flex-col items-center">
          <label className="text-gray-700 font-medium mb-1">Hours</label>
          <input
            type="text"
            readOnly
            value={time.hours}
            className="w-20 text-center font-mono text-2xl bg-black text-green-400 rounded-md px-2 py-1"
          />
        </div>

        <span className="text-2xl font-mono">:</span>

        <div className="flex flex-col items-center">
          <label className="text-gray-700 font-medium mb-1">Minutes</label>
          <input
            type="text"
            readOnly
            value={time.minuts}
            className="w-20 text-center font-mono text-2xl bg-black text-green-400 rounded-md px-2 py-1"
          />
        </div>

        <span className="text-2xl font-mono">:</span>

        <div className="flex flex-col items-center">
          <label className="text-gray-700 font-medium mb-1">Seconds</label>
          <input
            type="text"
            readOnly
            value={time.sec}
            className="w-20 text-center font-mono text-2xl bg-black text-green-400 rounded-md px-2 py-1"
          />
        </div>
      </div>
    </div>
  );
};

*/


//................................................Local Storage...........................//


// here we use local storage its working
//
/*
❌ Issues in Your Current Code
1. setInterval() runs every render
Every time the component renders, setInterval() is called again, creating many intervals running at once.

🔥 This leads to memory leaks and repeated updates every millisecond over time!

2. localStorage.setItem() runs every render
You’re calling localStorage.setItem() on every render, even if time hasn't changed yet.*

*/

import { useState } from "react";


//use local Storage key

const clockkey='clock'

export const Clock = () => {


  const [time, setTime] = useState(()=>{
    const clockData=localStorage.getItem(clockkey)
    if(!clockData) return {};

   try {
    return JSON.parse(clockData)
   } catch (error) {
    console.log("dayta here",error)
    return {};
   }
  });





  // Local storage here

  localStorage.setItem(clockkey,JSON.stringify(time))

  const handleclockTime = () => {
    const date = new Date(Date.now());
    setTime({
      date: date.toLocaleDateString(),
      hours: date.getHours(),
      minuts: date.getMinutes(),
      sec: date.getSeconds(),
    });
  };

  setInterval(handleclockTime, 1000);

  return (
    <div className="p-4 bg-white rounded-xl shadow-md max-w-md mx-auto">
      
      <p className="text-lg font-semibold text-gray-700 text-center mb-4">
        Date: {time.date}
      </p>


      <div className="flex justify-center items-center gap-4">
        <div className="flex flex-col items-center">
          <label className="text-gray-700 font-medium mb-1">Hours</label>
          <input
            type="text"
            readOnly
            value={time.hours}
            className="w-20 text-center font-mono text-2xl bg-black text-green-400 rounded-md px-2 py-1"
          />
        </div>

        <span className="text-2xl font-mono">:</span>

        <div className="flex flex-col items-center">
          <label className="text-gray-700 font-medium mb-1">Minutes</label>
          <input
            type="text"
            readOnly
            value={time.minuts}
            className="w-20 text-center font-mono text-2xl bg-black text-green-400 rounded-md px-2 py-1"
          />
        </div>

        <span className="text-2xl font-mono">:</span>

        <div className="flex flex-col items-center">
          <label className="text-gray-700 font-medium mb-1">Seconds</label>
          <input
            type="text"
            readOnly
            value={time.sec}
            className="w-20 text-center font-mono text-2xl bg-black text-green-400 rounded-md px-2 py-1"
          />
        </div>
      </div>
    </div>
  );
};

