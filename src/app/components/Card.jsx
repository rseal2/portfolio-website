import React from "react";

const Card = ({ imgUrl, title, role, onClick }) => {
  return (
    <div onClick={onClick} className="cursor-pointer">
      {" "}
      <div
        className="h-52 md:h-72 rounded-t-xl rounded-b-xl relative group"
        style={{ background: `url(${imgUrl}) center center / cover no-repeat` }}
      >
        <div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 rounded-t-xl rounded-b-xl transition-all duration-500"></div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818]py-6 px-4"> 
        <h5 className="text-xl font-semibold mb-2 mt-5">{role? role : title}
        </h5>
      </div>
    </div>
  );
};

export default Card;
