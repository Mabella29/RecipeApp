"use client";
import React, { useEffect, useState } from "react";
import { HeartIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';

const Card = ({ title, time, rating, diet, image, profiles}) => {
  return (
    <div className="w-full mt-6 h-auto flex flex-col bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-200">
     
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover"
      />
     
      <div className="p-4  space-y-2">
        <span className="text-gray-400 text-sm">{diet}</span>
        <h3 className="text-2xl font-semibold flex justify-between">{title} <span className="text-yellow-500 text-sm"> ★ {rating}</span></h3>
        <div className="text-orange-500 flex font-semibold justify-between">
          <p>{time}</p>
          <span className="flex">
          <HeartIcon className="h-6 w-6 text-gray-500 hover:text-red-500"/>
          <ChatBubbleBottomCenterTextIcon className="h-6 w-6 text-gray-500" />
          </span>
        </div>

        <div className="flex items-center space-x-2 mt-2">
        {profiles?.map((profile, index) => (
           <img
              key={index}
              src={profile.image}
              alt={profile.name}
              className={`w-8 h-8 rounded-full border-2 border-white shadow-md ${
                index > 0 ? "-ml-2" : ""
              }`}
           />
        ))}
        </div>
      </div>
    </div>
  );
};

const Recommend = () => {
  const [foodList, setFoodList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('/data/recommendData/recipes.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setFoodList(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading the JSON data:', error);
        setLoading(false);
      });
  }, []);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
       {foodList.length === 0 && !loading && (
      <p className="text-center text-gray-500 col-span-full">
        No recommendations available.
      </p>
    )}
      {foodList.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          time={item.time}
          rating={item.rating}
          diet={item.diet}
          image={item.image}
          profiles={item.profiles}
        />
      ))}
    </div>
  );
};

export default Recommend;
