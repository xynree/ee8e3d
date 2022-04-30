import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  greeting: {
      width: '100%',
      fontSize: '2rem',
      fontWeight: '800',
      marginTop: '1rem',
      marginBottom: '1rem'
  }
}));
const Greeting = ({ greeting }) => {
  const classes = useStyles();

  return <Typography className={classes.greeting}>
    {greeting}
    </Typography>;
};

export default Greeting;
