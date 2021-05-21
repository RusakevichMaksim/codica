import { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { useHistory } from "react-router-dom";

type Props = {
  name: string;
  temp: number;
};
const Card: React.FC<Props> = ({ name, temp }) => {
  useEffect(() => {
    // console.log(cityGroup);
    // getWeatherThunkCreator("moscow");
  });
  let history = useHistory();

  return (
    <div
      className="card"
      onClick={(e) => {
        history.push(`/city/${name}`);
      }}
    >
      <div>
        City Name: <span> {name}</span>
      </div>
      <div>
        Temperature Value: <span> {temp}</span>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          console.log("test2");
        }}
      >
        Update
      </button>
    </div>
  );
};

export default Card;
