import { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

type Props = {
  name: string;
  temp: number;
};
const Card: React.FC<Props> = ({ name, temp }) => {
  useEffect(() => {
    // console.log(cityGroup);
    // getWeatherThunkCreator("moscow");
  });
  return (
    <div className="card">
      <div>
        City Name: <span> {name}</span>
      </div>
      <div>
        Temperature Value: <span> {temp}</span>
      </div>
      <div></div>
    </div>
  );
};

export default Card;
