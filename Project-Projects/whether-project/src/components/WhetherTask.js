import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import "../components/Weather.css";
// import SpinnerReact from "./SpinnerReact";
import Shimmer from "./Shimmer";

function WhetherTask() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d1845658f92b31c64bd94f06f7188c9c&units=metric`
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const json = await response.json();
      console.log(json);
      setWeatherData(json);
      setLoading(false);
    } catch (error) {
      console.error("Error Fetching weather data:", error.message);
      setLoading(false);
    }
  };

  function handleSearch() {
    fetchData();
  }
  return (
    <div className="border-black flex justify-center">
      <div>
        <label>Enter City :</label>

        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter your City name"
          className="text-black border-black w-96 pl-4 rounded-full mt-5 flex-grow-2 border-none"
        />
        <button
          onClick={handleSearch}
          //   className="bg-white text-black rounded-l-none rounded-full mr-5 w-11 h-8"
        >
          <IoSearchOutline fontSize={25} />
        </button>
      </div>
      {/* or we can add Spinner */}
      {loading ? (
        <Shimmer />
      ) : (
        weatherData && (
          <div>
            <h1>
              Weather Information for {weatherData.name},
              {weatherData.sys.country}
            </h1>
            <h2>Temperature_feels_like : {weatherData?.main?.feels_like}</h2>
            <h2>Pressure : {weatherData?.main?.pressure}</h2>
            <h2>Humidity : {weatherData?.main?.humidity}</h2>
            <h2>Wind : {weatherData?.wind?.speed}</h2>
            <h2>Temperature : {weatherData?.main?.temp}</h2>
          </div>
        )
      )}
    </div>
  );
}

export default WhetherTask;

// import { useState } from "react";
// import { IoSearchOutline } from "react-icons/io5";
// function WhetherTask() {
//   const [search, setSearch] = useState("");

//   const fetchData = (value) => {
//     fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=kanpur&appid=d1845658f92b31c64bd94f06f7188c9c&units=metric`
//     )
//       .then((response) => response.json())
//       .then((json) => {
//         // console.log(json);
//         const results = json.filter((item) => {
//           return item && item.id && item.id.toLowerCase().includes(value);
//         });
//         console.log(results);
//       });
//   };

//   function handleChang(value) {
//     // setSearch(value);
//     fetchData(value);
//   }

//   function handleSearch(search) {
//     setSearch(search);
//   }

//   return (
//     <div>
//       <IoSearchOutline id="search-icon" />

//       <input
//         type="text"
//         placeholder="Search here..."
//         className="text-black"
//         value={search}
//         onChange={(e) => handleChang(e.target.value)}
//       />
//       <button onClick={handleSearch}>Search</button>
//     </div>
//   );
// }
// export default WhetherTask;

// import React, { useState, useEffect } from "react";

// const WeatherInfo = () => {
//   const [weatherData, setWeatherData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           `https://api.openweathermap.org/data/2.5/weather?q=kanpur&appid=d1845658f92b31c64bd94f06f7188c9c&units=metric`
//         );

//         if (!response.ok) {
//           throw new Error(`Error: ${response.statusText}`);
//         }

//         const json = await response.json();
//         setWeatherData(json);
//       } catch (error) {
//         console.error("Error fetching weather data:", error.message);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       {weatherData && (
//         <div>
//           <h2>
//             Weather Information for {weatherData.name},{" "}
//             {weatherData.sys.country}
//           </h2>
//           <p>Temperature: {weatherData.main.temp}°C</p>
//           <p>Feels Like: {weatherData.main.feels_like}°C</p>
//           <p>Description: {weatherData.weather[0].description}</p>
//           <p>Wind Speed: {weatherData.wind.speed} m/s</p>
//           <p>Humidity: {weatherData.main.humidity}%</p>
//           {/* Display other relevant information as needed */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default WeatherInfo;

// import React, { useState } from "react";

// const WeatherInfo = () => {
//   const [city, setCity] = useState("");
//   const [weatherData, setWeatherData] = useState(null);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d1845658f92b31c64bd94f06f7188c9c&units=metric`
//       );

//       if (!response.ok) {
//         throw new Error(`Error: ${response.statusText}`);
//       }

//       const json = await response.json();
//       setWeatherData(json);
//     } catch (error) {
//       console.error("Error fetching weather data:", error.message);
//     }
//   };

//   const handleSearch = () => {
//     fetchData();
//   };

//   return (
//     <div>
//       <label>
//         Enter City:
//         <input
//           type="text"
//           className="text-black"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           placeholder="Enter city name"
//         />
//       </label>
//       <button onClick={handleSearch}>Search</button>

//       {weatherData && (
//         <div>
//           <h2>
//             Weather Information for {weatherData.name},{" "}
//             {weatherData.sys.country}
//           </h2>
//           <p>Temperature: {weatherData.main.temp}°C</p>
//           <p>Feels Like: {weatherData.main.feels_like}°C</p>
//           <p>Description: {weatherData.weather[0].description}</p>
//           <p>Wind Speed: {weatherData.wind.speed} m/s</p>
//           <p>Humidity: {weatherData.main.humidity}%</p>
//           {/* Display other relevant information as needed */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default WeatherInfo;
