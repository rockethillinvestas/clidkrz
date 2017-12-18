import React, { Component } from "react";
import "./App.css";
import * as axios from "axios";
import Fund from "./components/fund/";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], fetching: false, fetched: false, error: {} };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/portfolio")
      .then(res => {
        console.log(res.data);
        this.setState({ data: res.data, fetched: true, fething: false });
      })
      .catch(err => {
        this.setState({ fetched: false, fetching: false, error: err });
      });
  }

  render() {
    if (this.state.fetched && !this.state.fetching) {
      return (
        <main>
          {this.state.data.map((e, i) => {
            return <Fund data={e} key={i} />;
          })}
        </main>
      );
    } else {
      return <p>Laster</p>;
    }
  }
}

export default App;
