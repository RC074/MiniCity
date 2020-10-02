import React from "react";

import "./App.css";

import { fetchData } from './api'
import SearchBar from "./components/SearchBar/SearchBar";
import Tweets from './components/Tweets/Tweets'

class App extends React.Component {

  state = {
    data : {

    }
  }

  handleData = async (data) => {
    const res = await fetchData(data);
    this.setState({data: res})
  }

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
                      <SearchBar className="searchBar" getData={(data) => this.handleData(data)}/>
                  </section>
                </div>
                <div className="page" id="p2">
                  <section className="icon fas fa-cloud-sun">
                  <span className="title">WEATHER</span>
                  </section>
                </div>
                <div className="page" id="p3">
                  {/* <section className="icon fa fa-twitter">
                    <span className="title">TREND</span>
                  </section> */}
                  <Tweets data={this.state.data} />
                </div>
                <div className="page" id="p4">
                  <section className="icon fas fa-virus">
                    <span className="title">COVID-19</span>
                  </section>
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
