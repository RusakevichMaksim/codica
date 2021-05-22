import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
type Props = {
  name: string;
  temp: number;
  update: (name: string) => void;
  deleted: (name: string) => void;
};

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    padding: "20px",
    margin: "50px",
    backgroundColor: "#868282",
    color: "white",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  buttonUpdate: {
    backgroundColor: "orange",
  },
  buttonDelete: {
    backgroundColor: "red",
  },
});

const Cards: React.FC<Props> = ({ name, temp, update, deleted }) => {
  const classes = useStyles();
  useEffect(() => {
    // console.log(cityGroup);
    // getWeatherThunkCreator("moscow");
  });
  let history = useHistory();

  return (
    <Card
      className={classes.root}
      onClick={(e) => {
        history.push(`/city/${name}`);
      }}
    >
      <div>
        City name: <span className="cardData"> {name}</span>
      </div>
      <div>
        Temperature value: <span className="cardData"> {temp}</span>
      </div>
      <div className="button__wrapper">
        <Button
          className={classes.buttonUpdate}
          onClick={(e) => {
            e.stopPropagation();
            update(name);
          }}
          size="small"
        >
          Update
        </Button>
        <Button
          className={classes.buttonDelete}
          onClick={(e) => {
            e.stopPropagation();
            deleted(name);
          }}
          size="small"
        >
          Delete
        </Button>
      </div>
    </Card>
  );
};

export default Cards;
