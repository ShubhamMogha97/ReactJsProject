import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  //  console.log("itemCards-----------------",itemCards);

  return (
    <div className="menu">
      <h1 className="resName">{name}</h1>
      <p className="cuisineName">
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      <h3>Menu</h3>
      <ul>
        {itemCards.map((item) => (
          <li className="resList" key={item.card.info.id}>
            {item.card.info.name} -{" "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}

        {/* <li>{itemCards[0]?.card?.info.name}</li>
        <li>{itemCards[1]?.card?.info.name}</li>
        <li>{itemCards[2]?.card?.info.name}</li> */}
        {/* <li>Burgers</li>
        <li>Diet Code</li> */}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
