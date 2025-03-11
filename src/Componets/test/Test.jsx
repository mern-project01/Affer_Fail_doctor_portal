import React, { useState } from "react";

const Test = () => {
  //  const data = [
  //    { id: 1, name: "............." },
  //    { id: 2, name: "............." },
  //    { id: 3, name: "............." },
  //    { id: 4, name: "............." },
  //    { id: 5, name: "............." },
  //    { id: 6, name: "............." },
  //    { id: 7, name: "............." },
  //    { id: 8, name: "............." },
  //    { id: 9, name: "............." },
  //    { id: 10, name: "............." },
  //    { id: 11, name: "............." },
  //    { id: 12, name: "............." },
  //    { id: 13, name: "............." },
  //    { id: 14, name: "............." },
  //    { id: 15, name: "............." },
  //    { id: 16, name: "............." },
  //    { id: 17, name: "............." },
  //    { id: 18, name: "............." },
  //    { id: 19, name: "............." },
  //    { id: 20, name: "............." },
  //    { id: 21, name: "............." },
  //    { id: 22, name: "............." },
  //    { id: 23, name: "............." },
  //    { id: 24, name: "............." },
  //    { id: 25, name: "............." },
  //    { id: 26, name: "............." },
  //    { id: 27, name: "............." },
  //    { id: 28, name: "............." },
  //    { id: 29, name: "............." },
  //    { id: 30, name: "............." },
  //    { id: 31, name: "............." },
    
    
  // ];
  
 
  return (
    <>
      <div className="center">
        <h className="text-5xl ">
          <span>Month:..............</span>
          <span>Year:...............</span>
        </h>
        <img
          className="mx-auto my-8"
          src="public/March-2025-calendar-printable-1.jpg"
        />
        <div className="text-3xl">
          <h1>Name:.........................</h1>
          <h1>Roll:.......... class..............</h1>
          <h1>School_Name:.........................</h1>
          <h1>Phone Number:.........................</h1>
        </div>
        <h1 className="text-left -m-4">Sahadat:01606081657</h1>
      </div>
      <div>
      
        {/* <div>
          <div className="overflow-x-auto p-4">
            <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
              <thead>
                <tr className="bg-gray-100 border">
                  <th className="px-4 py-2 text-left border-l">Subject</th>
                  <th className="px-4 py-2 text-left border-l">Bangla</th>
                  <th className="px-4 py-2 text-left border-l">Enlish</th>
                  <th className="px-4 py-2 text-left border-l">Math</th>
                  <th className="px-4 py-2 text-left border-l">BGS</th>
                  <th className="px-4 py-2 text-left border-l">Science</th>
                  <th className="px-4 py-2 text-left border-l">Islam</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id} className="border hover:bg-gray-50">
                    <td className=" border">{item.id}</td>
                    <td className=" border">{item.name}</td>
                    <td className=" border">{item.name}</td>
                    <td className="px-4 py-2 border">{item.name}</td>
                    <td className="px-4 py-2 border">{item.name}</td>
                    <td className="px-4 py-2 border">{item.name}</td>
                    <td className="px-4 py-2 border">{item.name}</td>
                    <td>{} </td>
                  
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Test;
