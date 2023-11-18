import React from "react";
import { useState, useEffect } from "react";
import RestaurantCard from "./Restuarant";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";


const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filteredListOfRes, setFilteredListOfRes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = async () => {
    try {
      const data = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();

      function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {
          let checkData =
            json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
          console.log(checkData)

          if (checkData !== undefined) {
            return checkData;
          }
        }
      }

      const resData = await checkJsonData(json);
      console.log(resData);
      setListOfRes(resData);
      setFilteredListOfRes(resData)
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  //   if (loading) {
  //     return <shimmer />;
  //   }


  return (loading) ? <Shimmer /> : (
    <div className="body">
      <div className="search">
        <input type="text" className="search-box" value={searchText} onChange={(e) => { setSearchText(e.target.value) }}></input>
        <button
          className="search-btn"
          onClick={() => {
            const filteredRes = listOfRes.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );

            setFilteredListOfRes(filteredRes);
          }}
        >
          Search
        </button>



      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRes.filter((res) => res.info.avgRating > 4.3);
            setFilteredListOfRes(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredListOfRes.map((restaurant) => (
          
          <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}><RestaurantCard resData={restaurant}/> console.log(restaurant.info.id)</Link> ))
        }
      </div>
    </div>
  );
};

export default Body;
