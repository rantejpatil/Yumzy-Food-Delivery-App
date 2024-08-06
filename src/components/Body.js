


import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
        /* /////filteredRestaurants */
  const [filteredRestaurants, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  console.log("Body Rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);

    const restaurantCard = json?.data?.cards?.find(card => card?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    if (restaurantCard) {
      const restaurants = restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setListOfRestaurant(restaurants);
      setFilteredRestaurant(restaurants);
    } else {
      console.error("Restaurants data not found in the cards");
    }
  };
    
    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false)
      return (
        <h1>
          Looks like you're offline!! Please check your internet connection;
        </h1>
      );
;
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* <div className="filter">
        <div className="search"> */}
      <div className="filter flex">
      <div className="search m-4 p-4"> 
          <input
            type="text"
            // className="search-box"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
          className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
          </div>  
       {/* </div>
         <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurant(filteredList); // Update only the filteredRestaurant state
          }}
        >
          Top Rated Restaurants
        </button> 
      </div>*/}
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurant(filteredList); // Update only the filteredRestaurant state
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        </div>  
      {/* <div className="res-container"> */}
      <div className="flex flex-wrap">
        {/* /////filteredRestaurants */}
        {filteredRestaurants.map((restaurant) => (
          <Link  
          key={restaurant.info.id} to={"/restaurants/"+ restaurant.info.id}>
            <RestaurantCard  resData={restaurant} />
            </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;


