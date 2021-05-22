import { Route, Switch } from "react-router-dom";
import GeneralPage from "./component/general/GeneralPage";
import Detail from "./component/detail/detail";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/test">
          <GeneralPage />
        </Route>
        <Route path="/City/:CityName?">
          <Detail />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
