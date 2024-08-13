import React, { useRef, useState } from "react";

const Weather = () => {
  const api = {
    key: "234c6d1df8ed6f17bc4b82be1ef29afc",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather?q=",
  };
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});
  const searchPressed = () => {
    fetch(`${api.baseUrl}${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };
  console.log(weather);

  function useEffect(callback, dependencies) {
    const previousDependencie = useRef([]);
    useEffect(() => {
      const dependencyChanged = dependencies.some((dependency, index) => {
        return dependency !== previousDependencie.current[index];
      })

      if (dependencyChanged ) {
        callback();
      }
    previousDependencie.current = dependencies;
    }, dependencies)
  }

  return (
    <div>
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={searchPressed}>Search</button>

      {typeof weather.main !== "undefined" ? (
        <>
          <p>{weather.name}</p>
          <p>{weather.main.temp}</p>
          <div>
            <p>{weather.weather[0].main}</p>
            <p>{weather.weather[0].description}</p>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Weather;
