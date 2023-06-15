"use client"
import React, { useState } from "react";

export default function InputArrays() {
    const [arrays, setArrays] = useState([1,2,]);
    const [addno, setAddno] = useState(0);

    const handleChange = (e) => {
        setAddno(e.target.value)
    }
    // console.log(arrays);
  
  return (
    <div className="">
      <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center relative">
        <div className="flex justify-center self-center">
          <div className="p-12 bg-white mx-auto rounded-2xl w-100">
            <div className="mb-4">
              <h3 className="font-semibold text-2xl text-gray-800">
                Integers Each
              </h3>
              <p className="text-gray-500">
                Display list of integers of all 3 arrays
              </p>
            </div>
            <div className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 tracking-wide">
                  Usernumber
                </label>
                <input
                  className=" w-full text-base text-black px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                  type="number"
                  placeholder="Usernumber"
                  value={arrays[0]}
                  onChange={handleChange}
                />
              </div>

              <div>
                <button
                  onClick={() => {
                    setArrays([...arrays, arrays[0]]);
                  }}
                  type="button"
                  className="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
