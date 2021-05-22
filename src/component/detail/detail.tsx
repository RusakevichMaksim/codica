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
  // useEffect(() => {
  //   fetch(
  //     `https://api.openweathermap.org/data/2.5/onecall?lat=${currentData.lat}&lon=${currentData.lon}&units=metric&exclude=hourly&appid=968cb1decfce0d451e6ef8dfe6e0713c`
  //   ).then((e) => {
  //     console.log(e);
  //   });
  // });
  return (
    <div className="details__wrapper">
      <div>
        <span className="details__name"> City Name</span>
        <span className="details__data">{cityName}</span>{" "}
      </div>
      <div>
        <span className="details__name"> Current temperature</span>

        <span className="details__data">{currentData.temp}</span>
      </div>
      <div>
        <span className="details__name">Feels like temperature</span>
        <span className="details__data">{currentData.feels_like}</span>
      </div>
      <div>
        <span className="details__name">humidity</span>
        <span className="details__data">{currentData.humidity}</span>
      </div>
      <div>
        <span className="details__name"> temp_max</span>
        <span className="details__data">{currentData.temp_max}</span>
      </div>
      <div>
        <span className="details__name"> temp_min</span>
        <span className="details__data">{currentData.temp_min}</span>
      </div>
    </div>
  );
};
export default compose<ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(Detail);
