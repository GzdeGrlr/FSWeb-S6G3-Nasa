import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { fakeData } from "./fakeData";

function App() {
  const [picture, setPicture] = useState(null);
  const [day, setDay] = useState(1);

  const url = `https://api.nasa.gov/planetary/apod?api_key=Zm6FlM2qHrhm4NLaAUQCOch84xk3BM35yqamTlWm`;

  const urlDifference = [
    "&date=2022-11-25",
    "&&date=2022-12-01",
    "&date=2022-11-28",
    "&date=2022-11-10",
    "&date=2022-12-02",
    "&date=2022-10-23",
    "&date=2022-10-22",
    "&date=2022-10-24",
  ];

  useEffect(() => {
    axios.get(url + urlDifference[day - 1]).then((response) => {
      setPicture(response.data);
    });
  });

  return (
    <div className="App">
      <div className="App-header">
        <span>
          <img
            src="https://api.nasa.gov/assets/img/favicons/favicon-192.png"
            className="App-logo"
            alt="logo"
          />
        </span>

        {picture === null ? (
          <div>APOD is loading...</div>
        ) : (
          <div>
            <img className="App-photo" src={picture.url} alt={"Apod"} />
            <div className="App-info">
              <p>
                <strong>Title: </strong>
                {picture.title}
              </p>
              <p>
                <strong>Date: </strong>
                {picture.date}
              </p>
              <p>
                <strong>Explanation:</strong> {picture.explanation}
              </p>
              <button
                onClick={() => {
                  setDay(day + 1);
                }}
              >
                Click me to change the photo!
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
