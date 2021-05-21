import { useEffect } from "react";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/store";
import {
  getWeatherThunkCreator,
  updateWeatherThunkCreator,
  setCityNameAC,
  CityData,
} from "../../redux/weatherReducer";

import Card from "./card/card";

const mapDispatchToProps = {
  getWeatherThunkCreator,
  updateWeatherThunkCreator,
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
  updateWeatherThunkCreator: (name: string) => void;
  setCityNameAC: (name: string) => void;
};

type PropsType = MapStateToProps & DispatchStateToProps;

const GeneralPage: React.FC<PropsType> = ({
  name,
  cityGroup,
  getWeatherThunkCreator,
  updateWeatherThunkCreator,
  setCityNameAC,
}) => {
  useEffect(() => {
    updateWeatherThunkCreator("Kyiv");
  }, []);
  return (
    <div>
      <div className="card__wrapper">
        {cityGroup.map((city: CityData, index: number) => {
          return (
            <Card
              key={name + index}
              name={city.name}
              temp={city.temp}
              update={updateWeatherThunkCreator}
            />
          );
        })}
      </div>

      <div>
        <input value={name} onChange={(e) => setCityNameAC(e.target.value)} />
        <button
          onClick={() => {
            getWeatherThunkCreator(name);
          }}
        >
          Button
        </button>
      </div>
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(GeneralPage);
