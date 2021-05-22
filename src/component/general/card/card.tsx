import { useEffect } from "react";

import { useHistory } from "react-router-dom";

type Props = {
  name: string;
  temp: number;
  update: (name: string) => void;
  deleted: (name: string) => void;
};
const Card: React.FC<Props> = ({ name, temp, update, deleted }) => {
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
      <div className="button__wrapper">
        <button
          onClick={(e) => {
            e.stopPropagation();
            update(name);
          }}
        >
          Update
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            deleted(name);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
