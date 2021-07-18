import { Switch, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard/index";
import MyCurrentRoutine from "./components/MyCurrentRoutine/index";
import SqualaneCleanser from "./components/SqualaneCleanser";
import Buffet from "./components/Buffet";
import Moisturizing from "./components/Moisturizing";
import Hya from "./components/Hya";
import Log from "./components/Log";
/*import "./App.scss";*/

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/routine" component={MyCurrentRoutine} />
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/Squalane-Cleanser" component={SqualaneCleanser} />
          <Route exact path="/Buffet" component={Buffet} />
          <Route exact path="/Moisturizing" component={Moisturizing} />
          <Route exact path="/Hya" component={Hya} />
          <Route exact path="/Log" component={Log} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
