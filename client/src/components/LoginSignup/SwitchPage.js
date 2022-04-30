import { Link } from "react-router-dom";
import {
  Box,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import XLButton from './XLButton'

const useStyles = makeStyles((theme) => ({
  switchContainer: {
    display: "flex",
    gap: "1rem",
    width: "100%",
    height: '20%',
    boxSizing: "border-box",
    padding: "4rem",
    marginRight: "3rem",
    justifyContent: "flex-end",
    alignItems: 'center'
  },
  prompt: {
    color: theme.palette.secondary.main
  },
  noLinkStyle: {
    textDecoration: 'none',
  }
}))

const SwitchPage = ({prompt, link, title}) => {
  const classes = useStyles()
  return (
    <Box className={classes.switchContainer}>
    <Typography>{prompt}</Typography>
    <Link href={link} to={link} className={classes.noLinkStyle}>
      <XLButton  variant="outlined" title="Create Account"/>
    </Link>
  </Box>
  );
}

export default SwitchPage;