import { connect } from "react-redux";
import { compose } from "redux";
import { AppStateType } from "../../redux/store";
import { getWeatherThunkCreator } from "../../redux/weatherReducer";
import CardChild from "./cardChild";
// const Card = (props: any) => {
//   return <CardChild  />;
// };

// let mapStateToProps = (state: AppStateType) => {
//   return {
//     id: state.weatherReducer.id,
//   };
// };

// export default compose(connect(mapStateToProps), { getWeatherThunkCreator })(
//   Card
// );
// // export default Card;

const mapDispatchToProps = {
  getWeatherThunkCreator,
};
const mapStateToProps = (state: AppStateType) => {
  return {
    id: state.weatherReducer.id,
  };
};
type MapStateToProps = {
  id: number | null;
};
type DispatchStateToProps = {
  getWeatherThunkCreator: (id: number) => void;
};
type OwnStateToProps = {
  test: string | null;
};

type PropsType = MapStateToProps & DispatchStateToProps;

const Card: React.FC<PropsType> = (props) => {
  return <CardChild />;
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
