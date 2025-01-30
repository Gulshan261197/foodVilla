import ResturantCard from "../components/ResturantCard"
import { useEffect, useState } from "react"
import Shimmer from "../components/Shimmer"
const Body = () => {
    const [restaurantList, setrestaurantList] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage0-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log("Testing.....",json)
        const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setrestaurantList(restaurants);
        setFilteredRestaurant(restaurants);
    };

    return restaurantList.length === 0 ? <Shimmer /> : (
        <div className="Body">
            <div className="filter">
                <div className="search">
                    <input 
                        type="text" 
                        className="search-bar" 
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button onClick={() => {
                        const filteredRestaurant = restaurantList.filter(
                            (res) => res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurant(filteredRestaurant);
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const rateWiseFilter = restaurantList.filter(
                        (res) => res?.info?.avgRating > 3
                    );
                    setFilteredRestaurant(rateWiseFilter);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {filteredRestaurant.map((restaurant) => (
                    <ResturantCard key={restaurant?.info?.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};


export default Body