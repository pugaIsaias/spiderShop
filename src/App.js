import { Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Courses from "./components/Courses/Courses";
import Dashboard from "./components/Dashboard/Dashboard";
import Layout from "./containers/Layout/Layout";

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/" exact component={Dashboard} />
          <Route path="/courses" component={Courses} />
        </Switch>
      </Layout>
    </>
  );
}

export default App;
