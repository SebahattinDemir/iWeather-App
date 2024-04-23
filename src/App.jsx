import { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import WelcomePage from "./components/welcomePage";
import WeatherCard from "./components/weatherCard";

function App() {
  const [weathers, setWeathers] = useState([]);
  const [location, setLocation] = useState("");
  const [searching, setSearching] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [backgroundImage, setBackgroundImage] = useState("");

  const fetchWeather = async () => {
    const apiKey = import.meta.env.VITE_WEATHER_API;
    try {
      const res = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=5&aqi=yes&alerts=yes&lang=en`
        /*  `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}` */
      );
      setWeathers([{ ...res.data, showDetails: false }, ...weathers]);
      console.log(res);
    } catch (error) {
      alert("Hava durumu verileri alınamadı. Lütfen lokasyonu tekrar girin.");
    } finally {
      setSearching(false);
      setShowWelcome(false);
    }
  };

  useEffect(() => {
    const setBackgroundByWeather = () => {
      if (
        weathers.length > 0 &&
        weathers[weathers.length - 1].forecast &&
        weathers[weathers.length - 1].forecast.forecastday.length > 0
      ) {
        const currentWeather =
          weathers[weathers.length - 1].current.condition.text;
        const moment =
          weathers[weathers.length - 1].current.is_day === 1 ? "Day" : "Night";
        const condition = currentWeather.toLowerCase().replace(/\s/g, "");
        const imageName = `Weather=${condition},Moment=${moment}`;
        setBackgroundImage(`img/background/${imageName}.png`);
      }
    };

    setBackgroundByWeather();
  }, [weathers]);

  const locationChange = (e) => {
    setLocation(e.target.value);
    setShowWelcome(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && location.trim() !== "") {
      setSearching(true);
      fetchWeather();
      setLocation("");
    }
  };

  const handleBackButtonClick = () => {
    setShowWelcome(true);
  };

  const toggleWeatherDetails = (index) => {
    const newWeathers = [...weathers];
    newWeathers[index].showDetails = !newWeathers[index].showDetails;
    setWeathers(newWeathers);
  };

  const deleteWeather = (index) => {
    const newWeathers = [...weathers];
    newWeathers.splice(index, 1);
    setWeathers(newWeathers);
    if (newWeathers.length === 0) {
      setShowWelcome(true);
    }
  };

  return (
    <div
      className="app-container"
      style={{ overflow: "scroll", height: "100vh" }}
    >
      <Container>
        {showWelcome && (
          <WelcomePage
            location={location}
            locationChange={locationChange}
            handleKeyDown={handleKeyDown}
            searching={searching}
          />
        )}

        {!showWelcome && (
          <WeatherCard
            className="custom-weather-card"
            weathers={weathers}
            handleBackButtonClick={handleBackButtonClick}
            deleteWeather={deleteWeather}
            toggleWeatherDetails={toggleWeatherDetails}
            backgroundImage={backgroundImage}
          />
        )}
      </Container>
    </div>
  );
}

export default App;
