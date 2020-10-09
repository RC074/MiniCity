import React from "react";
import { fetchData } from "./api";
import SearchBar from "./components/SearchBar/SearchBar";
import Tweets from "./components/Tweets/Tweets";
import Weather from "./components/Weather/Weather";
import Corona from "./components/Corona/Corona";
import "./App.css";

class App extends React.Component {
  state = {
    location: {
      city: null,
      country: null,
      province: null,
      lat: null,
      lng: null,
    },
    tweets: [],
    weather: [],
    corona: [],
    initial: true,
    tweetLoading: false,
    weatherLoading: false,
    coronaLoading: false,
  };

  // Distributing data fetched from the api call
  handleData = async (data) => {
    console.log(data);
    await this.setState({ tweets: [], weather: [], corona: [] });
    this.setState({ initial: false });
    this.setState({
      tweetLoading: true,
      weatherLoading: true,
      coronaLoading: true,
    });
    this.setState({ location: data });
    const { tweets, weather, corona } = await fetchData(data);
    this.setState({ tweets: tweets, weather: weather, corona: corona });
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
                visibility:
                  this.state.corona.length === 0 ? "hidden" : "visible",
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
              this.state.coronaLoading || this.state.initial
                ? "hidden"
                : "visible",
          }}
        >
          <Corona
            loading={(bool) => this.handleCoronaLoading(bool)}
            data={this.state.corona}
          />
        </div>
      </div>
    );
  };

  render() {
    return (
      // <div id="wrapper">
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
      // </div>
    );
  }
}

export default App;
