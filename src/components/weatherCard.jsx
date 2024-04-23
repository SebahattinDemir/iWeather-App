import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import {
  MdAddLocationAlt,
  MdDeleteForever,
  MdExpandLess,
  MdExpandMore,
} from "react-icons/md";

const WeatherCard = ({
  weathers,
  showWelcome,
  handleBackButtonClick,
  deleteWeather,
  toggleWeatherDetails,
  backgroundImage,

}) => {
  
  return (
    <>
      {weathers.length > 0 && !showWelcome && (
        <>
          {weathers.map((weather, index) => (
            <Card className="custom-weather-card" key={index}>
              <div className="weather-today">
                <div
                  className="weather-today-card"
                  style={{ backgroundImage: `url(${backgroundImage})` }}
                >
                  <Button
                    className="back-button end-0  me-5 "
                    onClick={handleBackButtonClick}
                  >
                    <MdAddLocationAlt size={24} />
                  </Button>

                  <Button
                    className="delete-button end-0  me-2"
                    onClick={() => deleteWeather(index)}
                  >
                    <MdDeleteForever />
                  </Button>
                  <div
                    className="toggle-details"
                    onClick={() => toggleWeatherDetails(index)}
                  >
                    {weather.showDetails ? <MdExpandLess /> : <MdExpandMore />}
                  </div>
                  <Card.Header>
                    <h3 className="location">{weather.location.name}, TR</h3>
                    <h6 className="date">
                      {new Date().toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </h6>
                  </Card.Header>

                  <Card.Body>
                    <div className="weather-info">
                      <div className="weather-info-text">
                        <p className="temp">
                          {weather.current.temp_c.toString().split(".")[0]}°C
                        </p>
                        <div className="min-max-temp">
                          {
                            weather.forecast.forecastday[0].day.mintemp_c
                              .toString()
                              .split(".")[0]
                          }
                          °C /{" "}
                          {
                            weather.forecast.forecastday[0].day.maxtemp_c
                              .toString()
                              .split(".")[0]
                          }
                          °C
                        </div>
                        <p className="condition">
                          {weather.current.condition.text}
                        </p>
                      </div>

                      <img
                        className="weather-info-img"
                        src={`../public/img/${weather.current.condition.text
                          .toLowerCase()
                          .replace(/\s/g, "")}.png`}
                        alt={weather.current.condition.text}
                      />
                    </div>
                  </Card.Body>
                </div>
              </div>
              {weather.showDetails && (
                <>
                  <div className="weather-info-details">
                    <div className="weather-info-item">
                      <span className="weather-info-label">
                        <img
                          src="../public/img/info-icons/thermal.png"
                          alt="Thermal sensation"
                          className="weather-info-icon"
                        />
                        Thermal sensation
                      </span>
                      <span className="weather-info-value">
                        {weather.current.feelslike_c.toString().split(".")[0]}°C
                      </span>
                    </div>
                    <div className="weather-info-item">
                      <span className="weather-info-label">
                        <img
                          src="../public/img/info-icons/rain.png "
                          alt="Probability of rain"
                          className="weather-info-icon"
                        />
                        Probability of rain
                      </span>
                      <span className="weather-info-value">
                        {
                          weather.forecast.forecastday[0].day
                            .daily_chance_of_rain
                        }
                        %
                      </span>
                    </div>
                    <div className="weather-info-item">
                      <span className="weather-info-label">
                        <img
                          src="../public/img/info-icons/wind.png"
                          alt="Wind speed"
                          className="weather-info-icon"
                        />
                        Wind speed
                      </span>
                      <span className="weather-info-value">
                        {weather.forecast.forecastday[0].day.maxwind_kph} km/h
                      </span>
                    </div>
                    <div className="weather-info-item">
                      <span className="weather-info-label">
                        <img
                          src="../public/img/info-icons/air.png"
                          alt="Air humidity"
                          className="weather-info-icon"
                        />
                        Air humidity
                      </span>
                      <span className="weather-info-value">
                        {weather.current.humidity}%
                      </span>
                    </div>
                    <div className="weather-info-item">
                      <span className="weather-info-label">
                        <img
                          src="../public/img/info-icons/UV.png"
                          alt="UV Index"
                          className="weather-info-icon"
                        />
                        UV Index
                      </span>
                      <span className="weather-info-value">
                        {weather.current.uv}
                      </span>
                    </div>
                  </div>

                  <div className="weather-daily">
                    {weather.forecast.forecastday.map((day) => (
                      <div className="day-container" key={day.id}>
                        <Card className="day-card">
                          <h4>
                            {new Date(day.date).toLocaleDateString("en-US", {
                              weekday: "short",
                            })}
                          </h4>

                          <img
                            src={`../public/img/${day.day.condition.text
                              .toLowerCase()
                              .replace(/\s/g, "")}.png`}
                            alt={day.day.condition.text}
                          />
                          <p className="day-maxtemp">
                            {day.day.maxtemp_c.toString().split(".")[0]}°C
                          </p>
                          <p className="day-mintemp">
                            {day.day.mintemp_c.toString().split(".")[0]}
                            °C
                          </p>
                        </Card>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </Card>
          ))}
        </>
      )}
    </>
  );
};
WeatherCard.propTypes = {
  weathers: PropTypes.array.isRequired,
  showWelcome: PropTypes.bool.isRequired,
  handleBackButtonClick: PropTypes.func.isRequired,
  deleteWeather: PropTypes.func.isRequired,
  toggleWeatherDetails: PropTypes.func.isRequired,
  backgroundImage: PropTypes.string.isRequired,
};
export default WeatherCard;