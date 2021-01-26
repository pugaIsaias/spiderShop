import { Component } from "react";
import About from "../../components/About/About";
import Dashboard from "../../components/Dashboard/Dashboard";

class Layout extends Component {
  render() {
    return (
      <div>
        <Toolbar />
        <About />
        <Dashboard />
      </div>
    );
  }
}
