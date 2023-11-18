import React, { useEffect,useState } from "react";
import { MENU_URL } from "../../utils/constants";
import { useParams } from "react-router-dom";
import Shimmer from "./shimmer";

const RestaurantMenu = () => {
  // Destructure resId from the result of useParams
  const { resId } = useParams();
  const [resInfo,setResInfo]=useState(null)
  useEffect(() => {
    fetchMenu();
  }, []); // Include resId in the dependency array if you want to run the effect when it changes

  const fetchMenu = async () => {
    try {
      const data = await fetch(MENU_URL+resId)
      const json = await data.json();
      console.log(json);
      setResInfo(json)
      console.log(resInfo);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

//   if (resInfo===null)
//   return <Shimmer/>;



// const {name,cuisine,costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info;
// const {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  return (
    <div className="menu">
      <h1>Name of Restaurant</h1>
    </div>
  );
};

export default RestaurantMenu;
