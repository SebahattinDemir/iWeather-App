import { Form, Spinner } from "react-bootstrap";
import PropTypes from "prop-types";

const WelcomePage = ({ location, locationChange, handleKeyDown, searching }) => {
  return (   
      <>
        <div className=" text-center fs-1 position-absolute top-0 d-flex align-items-center">
          <span>
            <img
              src="../public/img/Vector.png"
              alt="logo"
              className="me-2"
              width={36}
              height={24}
              style={{ color: "#8fb2f5;" }}
            />
          </span>
          <h3 className="m-0 mt-2">iWeather</h3>
        </div>
        <div className="text-center fs-2 ">
          Welcome to <span style={{ color: "#8fb2f5" }}>TypeWeather</span>
        </div>
        <div className="subTitle">
          Choose a location to see the weather forecast
        </div>
        <Form.Control
          type="text"
          id="weatherText"
          placeholder="Search location"
          value={location}
          onChange={locationChange}
          onKeyDown={handleKeyDown}
          className="form-control"
          style={{ "--placeholder-color": "rgb(230, 230, 230)" }}
        />
        {searching && (
        <Spinner animation="border" variant="primary"/>
      )}
      </>
  );
};
WelcomePage.propTypes = {
    location: PropTypes.string.isRequired,
    locationChange: PropTypes.func.isRequired,
    handleKeyDown: PropTypes.func.isRequired,
    searching: PropTypes.bool.isRequired,
  };
export default WelcomePage;