import { useEffect, useState } from "react";
import { MENU_API_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  // fetching data
  useEffect(() => {
    fetchData();
  }, []); //fetch data only once

  const fetchData = async () => {
    const data = await fetch(MENU_API_URL + resId);
    const json = await data.json();
    setResInfo(json.data);
  };
  return resInfo;
};

export default useRestaurantMenu;
