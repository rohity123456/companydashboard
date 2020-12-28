import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NonAuthRoute from "./components/NonAuthRoute";
import PrivateRoute from "./components/PrivateRoute";
import Error from "./pages/error";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <PrivateRoute path="/" exact>
            <Home />
          </PrivateRoute>
          <NonAuthRoute path="/login" exact>
            <Login />
          </NonAuthRoute>
          <NonAuthRoute path="/signup" exact>
            <Signup />
          </NonAuthRoute>
          <Route path="*" exact>
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
