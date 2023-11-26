import { MENU_URL } from "./constants";
import { useState,useEffect } from "react";

const useRestaurantMenu=(resId)=>{

    
    const [resInfo,setResInfo]=useState(null)
    useEffect(() => {
      fetchMenu();
    }, [resId]); // Include resId in the dependency array if you want to run the effect when it changes
  
    const fetchMenu = async () => {
      try {
        const data = await fetch(MENU_URL+resId)
        const json = await data.json();
        //console.log(json.data);
        setResInfo(json.data)
        //console.log(resInfo);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    return(resInfo);
}
export default useRestaurantMenu;