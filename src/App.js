import React from "react";
import { fetchData } from "./api";
import SearchBar from "./components/SearchBar/SearchBar";
import Tweets from "./components/Tweets/Tweets";
import Weather from "./components/Weather/Weather";
import Corona from "./components/Corona/Corona";
import Popup from "./components/Popup/Popup";
import "./App.css";

class App extends React.Component {
  // The App's state/variables
  state = {
    // the current location that the user selected, in dictionary format
    location: {
      city: null,
      country: null,
      province: null,
      lat: null,
      lng: null,
    },

    // list of tweets id, initialized to be empty
    tweets: [],

    // list of weather data, initialized to be empty
    weather: [],

    // list of corona data, initialized to be empty
    corona: [],

    // boolean: app's initial state, after user select a city this will be forever false until the page reloads
    initial: true,

    // is the tweets page loading?
    tweetLoading: false,

    // is the weather page loading?
    weatherLoading: false,

    // is the covid-19 page loading?
    coronaLoading: false,
  };

  // Distributing data fetched from the api call
  handleData = async (data) => {
    await this.setState({ tweets: [], weather: [] });
    this.setState({ initial: false });
    this.setState({
      tweetLoading: true,
      weatherLoading: true,
      // coronaLoading: true,
    });
    this.setState({ location: data });
    const { tweets, weather } = await fetchData(data);
    this.setState({ tweets: tweets, weather: weather });
  };

  // handles all the loading states
  handleTweetLoading = (bool) => {
    this.setState({ tweetLoading: bool });
  };

  handleWeatherLoading = (bool) => {
    this.setState({ weatherLoading: bool });
  };

  handleCoronaLoading = (bool) => {
    this.setState({ coronaLoading: bool });
  };

  // this function checks whether the data about the tweets are received, then it will determine whether to show the loading page or the tweets
  TweetConditionalRender = () => {
    return (
      <div>
        <div
          style={{
            display:
              this.state.tweetLoading || this.state.initial ? "" : "none",
          }}
        >
          <section className="icon fa fa-twitter">
            <span className="title">TREND</span>
            <div
              style={{
                visibility:
                  this.state.tweets.length === 0 ? "hidden" : "visible",
              }}
            >
              <span className="loader">
                <span className="loader-inner"></span>
              </span>
            </div>
          </section>
        </div>
        <div
          style={{
            visibility:
              this.state.tweetLoading || this.state.initial
                ? "hidden"
                : "visible",
          }}
        >
          <Tweets
            show={this.state.tweetLoading || this.state.initial ? false : true}
            loading={(bool) => this.handleTweetLoading(bool)}
            data={this.state.tweets}
          />
        </div>
      </div>
    );
  };

  // this function checks whether the data about the weather is received, then it will determine whether to show the loading page or the weather card
  WeatherConditionalRender = () => {
    return (
      <div>
        <div
          style={{
            display:
              this.state.weatherLoading || this.state.initial ? "" : "none",
          }}
        >
          <section className="icon fas fa-cloud-sun">
            <span className="title">WEATHER</span>
            <div
              style={{
                visibility:
                  this.state.weather.length === 0 ? "hidden" : "visible",
              }}
            >
              <span className="loader">
                <span className="loader-inner"></span>
              </span>
            </div>
          </section>
        </div>
        <div
          style={{
            visibility:
              this.state.weatherLoading || this.state.initial
                ? "hidden"
                : "visible",
          }}
        >
          <Weather
            loading={(bool) => this.handleWeatherLoading(bool)}
            weather={this.state.weather}
          />
        </div>
      </div>
    );
  };

  // this function checks whether the data about covid is received, then it will determine whether to show the loading page or the covid card
  CoronaConditionalRender = () => {
    return (
      <div>
        <div
          style={{
            display:
              this.state.coronaLoading || this.state.initial ? "" : "none",
          }}
        >
          <section className="icon fas fa-virus">
            <span className="title">COVID-19</span>
            <div
              style={{
                visibility: "visible",
              }}
            >
              <span className="loader">
                <span className="loader-inner"></span>
              </span>
            </div>
          </section>
        </div>
        <div
          style={{
            visibility: "visible",
          }}
        >
          <Corona loading={false} data={this.state.corona} />
        </div>
      </div>
    );
  };

  render() {
    return (
      // theme credits to Alberto Hartzet www.albertohartzet.com
      <div className="ct" id="t1">
        <div className="ct" id="t2">
          <div className="ct" id="t3">
            <div className="ct" id="t4">
              <div className="ct" id="t5">
                <ul id="menu">
                  <a href="#t1">
                    <li className="icon fa fa-search" id="uno"></li>
                  </a>
                  <a href="#t2">
                    <li className="icon fas fa-cloud-sun" id="dos"></li>
                  </a>
                  <a href="#t3">
                    <li className="icon fab fa-twitter" id="tres"></li>
                  </a>
                  <a href="#t4">
                    <li className="icon fas fa-virus" id="cuatro"></li>
                  </a>
                </ul>
                <div className="page" id="p1">
                  <section>
                    <Popup />
                    <SearchBar
                      className="searchBar"
                      getData={(data) => this.handleData(data)}
                    />
                  </section>
                </div>
                <div className="page" id="p2">
                  {this.WeatherConditionalRender()}
                </div>
                <div className="page" id="p3">
                  {this.TweetConditionalRender()}
                </div>
                <div className="page" id="p4">
                  {this.CoronaConditionalRender()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
