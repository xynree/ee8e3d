import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: '1rem',
    padding: '1.2rem 4rem 1.2rem 4rem',
    fontWeight: '900',
    fontSize: '1.4rem',
  },
}));

const XLButton = ({ color="primary", title, variant="contained" }) => {
  const classes = useStyles()
  return (
    <Button
      color={color}
      type="submit"
      variant={variant}
      className={classes.button}
    >
      {title}
    </Button>
  );
};

export default XLButton;
