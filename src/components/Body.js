import React, { useState, useEffect } from "react";
import RestaurantCard from "./Restuarant";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useGetRestaurants from "../utils/useGetRestaurants";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filteredListOfRes, setFilteredListOfRes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const resData = useGetRestaurants();
console.log(resData)

  useEffect(() => {
    if (resData) {
      setFilteredListOfRes(resData);
      setListOfRes(resData);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [resData]);


  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (


      <h1>
        Looks like you're offline.
      </h1>

    )
  }

  return loading ? (
    <Shimmer />
  ) : (
    <div className="body ">
      <div className="flex">
        <div>
          <input
            type="text"
            className=" h-8 border border-solid border-black rounded-lg "
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className=" h-8 px-5 py-1 bg-green-100 mt-5 mx-1 rounded-lg"
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
            className=" h-8 px-5 py-1 bg-violet-100 m-5 rounded-lg"
            onClick={() => {
              const filteredList = listOfRes.filter(
                (res) => res.info.avgRating > 4.3
              );
              setFilteredListOfRes(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>

      <div className="flex flex-wrap bg-pink-50 border-solid border-black">
        {filteredListOfRes.map((restaurant) => (
          <Link key={restaurant.info.id} to={`/restaurant/${restaurant.info.id}`}>
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
