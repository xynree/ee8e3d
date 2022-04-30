import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: '1rem',
    padding: '1.2rem 2.6rem 1.2rem 2.6rem',
    fontWeight: '900',
    fontSize: '1.1rem',
    backgroundColor: theme.palette.info.background,
    color: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.info.background,
      color: theme.palette.primary.dark, 

    }
  }
}));

const SwitchButton = ({ color="primary", title }) => {
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

export default SwitchButton;
