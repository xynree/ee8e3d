import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  greeting: {
      width: '100%',
      fontSize: '2rem',
      marginTop: '2rem',
      marginBottom: '2rem'
  }
}));
const Greeting = ({ greeting }) => {
  const classes = useStyles();

  return <Typography className={classes.greeting}>
    {greeting}
    </Typography>;
};

export default Greeting;
