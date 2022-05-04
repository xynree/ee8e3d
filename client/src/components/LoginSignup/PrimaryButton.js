import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: '1rem',
    marginTop: '1.5rem',
    padding: '1rem 3.625rem 1rem 3.625rem',
    fontWeight: '700',
    fontSize: '1rem',
  },
}));

const PrimaryButton = ({ color='primary', title }) => {
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

export default PrimaryButton;
