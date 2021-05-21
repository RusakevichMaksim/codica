import { ComponentType, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router";
import { compose } from "redux";
import { AppStateType } from "../../redux/store";
import {
  getWeatherThunkCreator,
  setCityNameAC,
} from "../../redux/weatherReducer";

const mapDispatchToProps = {
  getWeatherThunkCreator,
  setCityNameAC,
};
const mapStateToProps = (state: AppStateType) => {
  return {
    id: state.weatherReducer.id,
    name: state.weatherReducer.citySelected,
    cityGroup: state.weatherReducer.cityGroup,
  };
};
type MapStateToProps = {
  name: string;
  cityGroup: any;
};
type DispatchStateToProps = {
  getWeatherThunkCreator: (name: string) => void;
  setCityNameAC: (name: string) => void;
};
type TParams = { CityName: string };

type PropsType = MapStateToProps &
  DispatchStateToProps &
  RouteComponentProps<TParams>;

const Detail: React.FC<PropsType> = (props) => {
  useEffect(() => {
    // console.log(props);
  });
  return (
    <div style={{ color: "red" }}>
      loremloremloremloremloremloremloremloremloremloremloremlorem lorem lorem
      lorem lorem
    </div>
  );
};
export default compose<ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(Detail);

// export default App;
