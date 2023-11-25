import { useEffect, useState } from "react";

const useGetRestaurants = () => {
  const [listOfRes, setListOfRes] = useState([]);

  useEffect(() => {
    const getRestaurants = async () => {
      try {
        const response = await fetch(
          "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const json = await response.json();
        const resData = checkJsonData(json);

        if (resData) {
          setListOfRes(resData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getRestaurants();
  }, []); // Empty dependency array to run the effect only once on mount

  const checkJsonData = (jsonData) => {
    for (let i = 0; i < jsonData?.data?.cards.length; i++) {
      let checkData =
        jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      if (checkData !== undefined) {
        return checkData;
      }
    }

    // Return an empty array if the condition is never met
    return [];
  };

  return listOfRes;
};

export default useGetRestaurants;
