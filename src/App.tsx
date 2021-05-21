import { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { AppStateType } from "./redux/store";
import { Route, Switch, withRouter } from "react-router-dom";
import GeneralPage from "./component/general/GeneralPage";
import Detail from "./component/detail/detail";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
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
