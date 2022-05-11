import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: '1rem',
    minWidth: '140px',
    padding: '1.1rem 2.1rem 1.1rem 2.1rem',
    fontSize: theme.typography.fontSize,
    backgroundColor: theme.palette.secondary.background,
    color: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.secondary.background,
      color: theme.palette.primary.dark, 
    }
  }
}));

const SwitchButton = ({ color='primary', title }) => {
  const classes = useStyles()
  return (
    <Button
      color={color}
      type='submit'
      variant='contained'
      className={classes.button}
    >
      {title}
    </Button>
  );
};

export default SwitchButton;
