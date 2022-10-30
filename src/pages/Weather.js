import React, { Component } from "react";
import { Helmet} from "react-helmet";
import "./Weather.css";
import { Input } from "../components/Input";
import Button from "../components/Button";
import { ClearButton } from "../components/ClearButton";
import * as math from 'mathjs'

class Weather extends Component {

  render() {
    return (
        <div className="main">
            <h1>What's the weather?</h1>
            <form>
                <input id="weatherInput" type="text" placeholder="Enter a U.S. city"/><br/>
                <input id="weatherSubmit" type="submit" value="Submit"></input>
            </form>
            <div id="weatherInfo">
                <p id="exit">x</p>

                <div id="weatherResults">
                </div>
                <div id="forecastResults">
                </div>
            </div>
            <Helmet>
                <script src="../components/script.js" type="text/javascript"/>
            </Helmet>
        </div>
    );
  }
  
}

export default Weather;
