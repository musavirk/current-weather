import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";

const Index = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=f06cefb176c9dcfdd72eed3f30449200`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };
  return (
    <Container className="main centered-div">
      <Row>
        <div className="search mt-3">
          <input
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            placeholder="Enter your location"
          />
        </div>
      </Row>
      {data.name !== undefined && (
        <>
          <Row>
            <Col className="location">
              {data.main ? (
                <p>
                  <b>{data.name}</b>
                </p>
              ) : null}
            </Col>
          </Row>
          <Row>
            <Col className="temp">
              {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
            </Col>
          </Row>
          <Row>
            <Col className="feels">
              Feels Like
              {data.main ? <p>{data.main.feels_like.toFixed()}°C</p> : null}
            </Col>
          </Row>
          <Row>
            <Col className="description">
              {data.weather ? <p>{data.weather[0].description}</p> : null}
            </Col>
          </Row>
          <Row>
            <Col className="humidity">
              {data.main ? (
                <p>Humidity:{data.main.humidity.toFixed()}</p>
              ) : null}
            </Col>
          </Row>
          <Row>
            <Col className="wind">
              {data.wind ? (
                <p>Wind Speed:{data.wind.speed.toFixed()}MPH</p>
              ) : null}
            </Col>
          </Row>
          <Row>
            <Col className="rain">
              {data.rain ? <p>Rain:{data.rain} </p> : null}
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};
export default Index;

//const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=f06cefb176c9dcfdd72eed3f30449200`

//http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=f06cefb176c9dcfdd72eed3f30449200
