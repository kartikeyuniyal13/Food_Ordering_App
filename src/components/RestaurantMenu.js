import React, { useEffect,useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";

import { useParams } from "react-router-dom";
import Shimmer from "./shimmer";

const RestaurantMenu = () => {
  // Destructure resId from the result of useParams
  const { resId } = useParams();
  //const [resInfo,setResInfo]=useState(null)


  const resInfo=useRestaurantMenu(resId)
  // useEffect(() => {
  //   fetchMenu();
  // }, []); // Include resId in the dependency array if you want to run the effect when it changes

  // const fetchMenu = async () => {
  //   try {
  //     const data = await fetch(MENU_URL+resId)
  //     const json = await data.json();
  //     //console.log(json.data);
  //     setResInfo(json.data)
  //     //console.log(resInfo);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  if (resInfo===null)
  return <Shimmer/>;



const {name,cuisines,costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info;
console.log("resinfo from restmenu",resInfo)
const {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
console.log(itemCards);
return (
  <div className="menu">
    <h1>{name}</h1>
    <h3>{cuisines.join(" ,")}</h3>
    
    {Array.isArray(itemCards) && (
      itemCards.map((res) => (
        <p key={res.card.info.id}>{res.card.info.name}</p>
      ))
    )}
  </div>
);

};

export default RestaurantMenu;
