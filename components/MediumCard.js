import React from "react";
import Image from "next/image";
const MediumCard = ({ image, location }) => {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-80 w-80">
        <Image src={image} layout="fill" className="rounded-xl" />
      </div>
      <h3 className="text-2xl mt-3">{location}</h3>
    </div>
  );
};

export default MediumCard;
