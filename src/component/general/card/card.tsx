import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
type Props = {
  name: string;
  temp: number;
  update: (name: string) => void;
  deleted: (name: string) => void;
};

const useStyles = makeStyles({
  buttonUpdate: {
    backgroundColor: "orange",
  },
  buttonDelete: {
    backgroundColor: "red",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardContent: {
    flexGrow: 1,
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
      className={classes.card}
      onClick={(e) => {
        history.push(`/city/${name}`);
      }}
    >
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          City name: <span className="cardData"> {name}</span>
        </Typography>
        <Typography>
          Temperature value: <span className="cardData"> {temp}</span>
        </Typography>
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
      </CardContent>
    </Card>
  );
};

export default Cards;
