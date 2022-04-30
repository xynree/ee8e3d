import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: '1rem',
    padding: '1rem 4rem 1rem 4rem',
    fontWeight: '900',
    fontSize: '1.4rem',
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
