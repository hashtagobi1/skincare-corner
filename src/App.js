import { Switch, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard/index";
import MyCurrentRoutine from "./components/MyCurrentRoutine/index";

/*import "./App.scss";*/

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/routine" component={MyCurrentRoutine} />
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
