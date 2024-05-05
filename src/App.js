import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 5;
  apiKey = process.env.REACT_APP_NEWS_API;

  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <Router>
        <Navbar />
        <LoadingBar color="#f11946" height={3} progress={this.state.progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div>
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="general"
                  pageSize={this.pageSize}
                  country="in"
                  category="general"
                />
              </div>
            }
          ></Route>
          <Route
            exact
            path="/business"
            element={
              <div>
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="business"
                  pageSize={this.pageSize}
                  country="in"
                  category="business"
                />
              </div>
            }
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={
              <div>
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="entertainment"
                  pageSize={this.pageSize}
                  country="in"
                  category="entertainment"
                />
              </div>
            }
          ></Route>
          <Route
            exact
            path="/general"
            element={
              <div>
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="general"
                  pageSize={this.pageSize}
                  country="in"
                  category="general"
                />
              </div>
            }
          ></Route>
          <Route
            exact
            path="/science"
            element={
              <div>
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="science"
                  pageSize={this.pageSize}
                  country="in"
                  category="science"
                />
              </div>
            }
          ></Route>
          <Route
            exact
            path="/health"
            element={
              <div>
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="health"
                  pageSize={this.pageSize}
                  country="in"
                  category="health"
                />
              </div>
            }
          ></Route>
          <Route
            exact
            path="/sports"
            element={
              <div>
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="sports"
                  pageSize={this.pageSize}
                  country="in"
                  category="sports"
                />
              </div>
            }
          ></Route>
          <Route
            exact
            path="/technology"
            element={
              <div>
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="technology"
                  pageSize={this.pageSize}
                  country="in"
                  category="technology"
                />
              </div>
            }
          ></Route>
        </Routes>
      </Router>
    );
  }
}
