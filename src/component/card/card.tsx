import { useEffect } from "react";
import { connect } from "react-redux";
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
type OwnStateToProps = {
  test: string | null;
};

type PropsType = MapStateToProps & DispatchStateToProps;

const Card: React.FC<PropsType> = ({
  name,
  cityGroup,
  getWeatherThunkCreator,
  setCityNameAC,
}) => {
  useEffect(() => {
    console.log(cityGroup);
    // getWeatherThunkCreator("moscow");
  });
  return (
    <div>
      <div className="card">
        <div>City Name</div>
        <div>Temperature Value</div>
        <div></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Card);
