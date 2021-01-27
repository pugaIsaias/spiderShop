import { Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Dashboard from "./components/Dashboard/Dashboard";
import Layout from "./containers/Layout/Layout";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/" exact component={Dashboard} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
