import { useEffect } from "react";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/store";
import {
  getWeatherThunkCreator,
  updateWeatherThunkCreator,
  setCityNameAC,
  CityData,
  deleteCityAC,
} from "../../redux/weatherReducer";

import Cards from "./card/card";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Input } from "@material-ui/core";
const mapDispatchToProps = {
  getWeatherThunkCreator,
  updateWeatherThunkCreator,
  setCityNameAC,
  deleteCityAC,
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
  deleteCityAC: (name: string) => void;
};

type PropsType = MapStateToProps & DispatchStateToProps;

const useStyles = makeStyles({
  buttonSetCIty: {
    backgroundColor: "white",
    color: "black",
  },
  input: {
    backgroundColor: "white",
    marginRight: "20px",
    border: "1px solid #7d7b7b",
    borderRadius: "3px",
  },
});

const GeneralPage: React.FC<PropsType> = ({
  name,
  cityGroup,
  getWeatherThunkCreator,
  updateWeatherThunkCreator,
  setCityNameAC,
  deleteCityAC,
}) => {
  // useEffect(() => {
  //   updateWeatherThunkCreator("Kyiv");
  // }, []);
  const classes = useStyles();

  return (
    <div>
      {cityGroup ? (
        <div className="card__wrapper">
          {cityGroup.map((city: CityData, index: number) => {
            return (
              <Cards
                key={name + index}
                name={city.name}
                temp={city.temp}
                update={updateWeatherThunkCreator}
                deleted={deleteCityAC}
              />
            );
          })}
        </div>
      ) : (
        <></>
      )}

      <div className="input__wrapper">
        <Input
          className={classes.input}
          value={name}
          onChange={(e) => setCityNameAC(e.target.value)}
          placeholder="set city name"
        />
        <Button
          className={classes.buttonSetCIty}
          onClick={() => {
            getWeatherThunkCreator(name);
          }}
          size="small"
        >
          Update
        </Button>
      </div>
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(GeneralPage);
