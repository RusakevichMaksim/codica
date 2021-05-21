import { useEffect } from "react";

import { useHistory } from "react-router-dom";

type Props = {
  name: string;
  temp: number;
  update: (name: string) => void;
};
const Card: React.FC<Props> = ({ name, temp, update }) => {
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
          // console.log("test2");
          update(name);
        }}
      >
        Update
      </button>
    </div>
  );
};

export default Card;
