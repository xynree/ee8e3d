import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
} from "@material-ui/core";

const SwitchPage = ({prompt, link, title}) => {
  return (
    <Box
    sx={{
      display: "flex",
      gap: "2rem",
      width: "100%",
      height: "20%",
      boxSizing: "border-box",
      padding: "48px",
      justifyContent: "flex-end",
    }}
  >
    <Typography>{prompt}</Typography>
    <Link href={link} to={link}>
      <Button color="secondary" variant="contained" size="large">
        {title}
      </Button>
    </Link>
  </Box>
  );
}

export default SwitchPage;