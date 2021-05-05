import { Route, Switch } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import Courses from "./components/Courses/Courses";
import Layout from "./containers/Layout/Layout";

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/" exact component={Courses} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </Layout>
    </>
  );
}

export default App;
