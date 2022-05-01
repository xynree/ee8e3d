import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: '1rem',
    padding: '0.7rem 3rem 0.7rem 3rem',
    fontWeight: '900',
    fontSize: '1rem',
  },
}));

const PrimaryButton = ({ color="primary", title }) => {
  const classes = useStyles()
  return (
    <Button
      color={color}
      type="submit"
      variant="contained"
      className={classes.button}
    >
      {title}
    </Button>
  );
};

export default PrimaryButton;
