import { Link } from 'react-router-dom';
import {
  Box,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SwitchButton from './SwitchButton'

const useStyles = makeStyles((theme) => ({
  switchContainer: {
    display: 'flex',
    gap: '1rem',
    width: '100%',
    boxSizing: 'border-box',
    padding: '2vh',
    marginBottom: 'auto',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  prompt: {
    color: theme.palette.secondary.main,
    fontSize: theme.typography.fontSize,
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: '13px'
    },
  },
  noLinkStyle: {
    textDecoration: 'none',
  }
}))

const SwitchPage = ({prompt, link, title}) => {
  const classes = useStyles()
  return (
    <Box className={classes.switchContainer}>
    <Typography className={classes.prompt}>{prompt}</Typography>
    <Link href={link} to={link} className={classes.noLinkStyle}>
      <SwitchButton title={title}/>
    </Link>
  </Box>
  );
}

export default SwitchPage;