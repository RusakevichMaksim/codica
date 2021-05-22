import { ComponentType, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router";
import { compose } from "redux";
import { AppStateType } from "../../redux/store";
import {
  CityData,
  getWeatherThunkCreator,
  setCityNameAC,
} from "../../redux/weatherReducer";

const mapDispatchToProps = {
  getWeatherThunkCreator,
  setCityNameAC,
};
const mapStateToProps = (state: AppStateType) => {
  return {
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
  let cityName = props.match.params.CityName;
  let currentData: CityData = {
    id: 0,
    lat: 0,
    lon: 0,
    name: "",
    temp: 0,
    feels_like: 0,
    humidity: 0,
    temp_max: 0,
    temp_min: 0,
  };
  props.cityGroup.map((event: any) => {
    if (event.name === cityName) {
      currentData = event;
    }
  });
  useEffect(() => {
    console.log(props);
  });
  return (
    <div style={{ color: "red" }}>
      <div>City Name {cityName}</div>
      <div>Current temperature {currentData.temp}</div>
      <div>Feels like temperature {currentData.feels_like}</div>
      <div>Feels like temperature {currentData.humidity}</div>
      <div>Feels like temperature {currentData.temp_max}</div>
      <div>Feels like temperature {currentData.temp_min}</div>
    </div>
  );
};
export default compose<ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(Detail);

// export default App;
