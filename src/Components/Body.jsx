import React from "react";

function Body(props) {
  return (
    <div>
      <div className="w-[400px] rounded-xl p-4 border border-red-950 mt-[40px] ">
      <img src={props.image} alt="" className="w-full h-[300px] "/>
      <h1 className="font-bold">{props.title}</h1>
      <p>{props.desc}</p>
      <button className="btn">Download MY CV</button>
      </div>
    </div>
  );
}

export default Body;
