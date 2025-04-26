import React from "react";

interface CardData {
  title: string;
  tag: string;
  time: string;
  category: string;
  imgSrc: string;
}

const Card: React.FC<CardData> = ({ title, tag, time, category, imgSrc }) => (
  <div className="py-3  border rounded shadow-md ">
    <div className="flex flex-row items-center space-x-2 ">
      <img className="p-2 max-w-[80px] h-[80px]" src={imgSrc} alt="" />

      <div className="flex flex-col space-y-1 text-[12px] ">
        <h2 className="font-bold">{title}</h2>
        <p className="text-gray-600 dark:text-gray-300">Category: {category}</p>
        <p className="text-gray-800 dark:text-gray-300">{time}</p>
        <p className="text-gray-600 dark:text-gray-300 hidden">{tag}</p>
      </div>
    </div>
  </div>
);

export default Card;
