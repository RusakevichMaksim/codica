import { useEffect } from "react";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/store";
import {
  getWeatherThunkCreator,
  updateWeatherThunkCreator,
  setCityNameAC,
  deleteCityAC,
} from "../../redux/weatherReducer";

import Cards from "./card/card";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Input } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { CityDataType } from "redux/weatherReducerVariable";

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

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  inputGrid: {
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(8),
  },

  buttonSetCIty: {
    backgroundColor: "green",
    color: "white",
    marginLeft: "10px",
  },
  input: {
    backgroundColor: "white",
    borderRight: "3px",
    color: "black",
  },
}));

const GeneralPage: React.FC<PropsType> = ({
  name,
  cityGroup,
  getWeatherThunkCreator,
  updateWeatherThunkCreator,
  setCityNameAC,
  deleteCityAC,
}) => {
  useEffect(() => {
    cityGroup.map((e: CityDataType) => {
      updateWeatherThunkCreator(e.name);
    });
  }, []);
  const classes = useStyles();

  return (
    <main>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {cityGroup ? (
            cityGroup.map((city: CityDataType, index: number) => (
              <Grid item key={name + index} xs={12} sm={6} md={4}>
                <Cards
                  key={name + index}
                  name={city.name}
                  temp={city.temp}
                  update={updateWeatherThunkCreator}
                  deleted={deleteCityAC}
                />
              </Grid>
            ))
          ) : (
            <></>
          )}
        </Grid>
      </Container>
      <Container className={classes.inputGrid} maxWidth="md">
        <div>
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
            Add
          </Button>
        </div>
      </Container>
    </main>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(GeneralPage);
