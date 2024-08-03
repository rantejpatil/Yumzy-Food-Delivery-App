
// import RestaurantCard from "./RestaurantCard";
// import {useState, useEffect } from "react";
// //import resList from "../utils/mockData";

// const Body = () => {
//   const [listOfRestaurants,setListOfRestaurant ] = useState([]);
//   useEffect(() => {
//     fetchData();

//   }, []);

//   const fetchData = async () => {
//     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  
//   const json = await data.json();
//   console.log(json);
//   // console.log((json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants));

//   //chatgpt cooking here
//   const restaurantcard = json?.data?.cards?.find(card => card?.card?.card?.gridElements?.infoWithStyle?.restaurants);

//     if (restaurantcard) {
//       const restaurants = restaurantcard?.card?.card?.gridElements?.infoWithStyle?.restaurants;
//       setListOfRestaurant(restaurants);
//     } else {
//       console.error("Restaurants data not found in the cards");
//     }
//   } 
// ;
// /////comment

// //  setListOfRestaurants(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
// //   json.data.cards[2].card.card.resaturants
// //  };
// ////commment
//     return(
//       <div className="body">
//         <div className="filter">
//           <button className="filter-btn"
//           onClick={ () => {
//             const filteredList = listOfRestaurants.filter(
//               (res) => res.info.avgRating > 4
//             );
//             setListOfRestaurant(filteredList);
//           }}

//           >top rated restaurant</button>
//         </div>
//         <div className="res-container">
//           {listOfRestaurants.map((restaurant) =>(
//             <RestaurantCard key={restaurant.info.id} resData = {restaurant}/>
//           )
//          )};
          
          
//         </div>
  
  
//       </div>
//     )    
  
//   };

//   export default Body;











// import RestaurantCard from "./RestaurantCard";
// import {useState, useEffect } from "react";
// //import resList from "../utils/mockData";
// import Shimmer from "./Shimmer";

// const Body = () => {
//   const [listOfRestaurants,setListOfRestaurant ] = useState([]);
//   const [filteredRestaurant, setFilteredRestaurant] = useState([]);
//   //const [filteredList, setTopListOfRestaurant] = useState([]);
//   const [searchText, setSearchText] = useState("");

//   // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
//   console.log("Body Rendered");
//   useEffect(() => {
//     fetchData();

//   }, []);

//   const fetchData = async () => {
//     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  
//   const json = await data.json();
//   console.log(json);
//   // console.log((json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants));

//   //chatgpt cooking here
//   const restaurantCard = json?.data?.cards?.find(card => card?.card?.card?.gridElements?.infoWithStyle?.restaurants);

//     if (restaurantCard) {
//       const restaurants = restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;
//       setListOfRestaurant(restaurants);
//       setFilteredRestaurant(restaurants);
//       //setTopListOfRestaurant(restaurants);
//     } else {
//       console.error("Restaurants data not found in the cards");
//     }
    
//   } 
// ;

//  // setListOfRestaurants(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//   //json.data.cards[2].card.card.resaturants
//  // };

//  return listOfRestaurants.length === 0 ? (
//   <Shimmer />
// ) : (
//   <div className="body">
//     <div className="filter">
//       <div className="search">
//         <input
//           type="text"
//           className="search-box"
//           value={searchText}
//           onChange={(e) => {
//             setSearchText(e.target.value);
//           }}
//         />
//         <button
//           onClick={() => {
//             // Filter the restraunt cards and update the UI
//             // searchText
//             console.log(searchText);

//             const filteredRestaurant = listOfRestaurants.filter((res) =>
//               res.info.name.toLowerCase().includes(searchText.toLowerCase())
//             );

//             setFilteredRestaurant(filteredRestaurant);
//           }}
//         >
//           Search
//         </button>
//       </div>
//       <button
//         className="filter-btn"
//         onClick={() => {
//           const filteredList = listOfRestaurants.filter(
//             (res) => res.info.avgRating > 4
//           );
//           setListOfRestaurant(filteredList);
//         }}
//       >
//         Top Rated Restaurants
//       </button>
//     </div>
//     <div className="res-container">
      
//       {filteredRestaurant.map((restaurant) => (
//         <RestaurantCard key={restaurant.info.id} resData={restaurant} />
//       ))}
//     </div>
//   </div>
// );
// };
// export default Body;



import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

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

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
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
      </div>
      <div className="res-container">
        {/* /////filteredRestaurants */}
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;


