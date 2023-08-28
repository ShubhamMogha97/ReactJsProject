import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
// import resList from "../utils/mockData";

const Body = () => {
  // state varibale- super powerful variable
  // Introduction to hook

  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filterRestaurant,setFilterRestaurant] = useState([]);
  const [searchText, setSearchText] = useState([]); //state representing the search text of the input field
  
  console.log("Body Rendered");

  useEffect(() => {
    // console.log("use Effect called");
    fetchData();
  }, []);

  // console.log("body rendred"); // what will be printed first, Body will render first and after that Use effect
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.934626&lng=77.7054388&page_type=DESKTOP_WEB_LISTING"
    ); // fetch method is given by brower
    const jsonData = await data.json();
    let checkData =
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurant(checkData);
    setFilterRestaurant(checkData) // optional chaining in Java Script
  };

  // Conditional Rendering

  // if(listOfRestaurants?.length === 0){
  //   return <Shimmer/>
  // }

  return listOfRestaurants?.length === 0 ? (
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
                res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
              );
              // console.log("filteredList------",filteredList );
              setFilterRestaurant(filteredRestaurant);
              // Filter the restaurant and update the UI
              // search
            }}
          >
            Search
          </button>
        </div>
        <button
          class="filter-btn"
          onClick={() => {
            // Filter logic here
            const filteredList = listOfRestaurants.filter(
              (res) => res?.info?.avgRating > 4
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filterRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
