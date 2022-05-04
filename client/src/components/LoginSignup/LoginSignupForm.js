import {
  Grid,
  FormControl,
  TextField,
  FormHelperText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PrimaryButton from "./PrimaryButton";

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: "100%",
  },
  buttonControl: {
    margin: "auto",
  },
  input: {
    fontSize: theme.typography.fontSize,
  },
}));

const LoginSignupForm = ({ submit, btnTitle, fields, error = null }) => {
  const classes = useStyles();

  return (
    <form onSubmit={submit}>
      <Grid container spacing={2} direction="column">
        {fields.map(
          ({ ariaLabel, label, name, type, inputProps, passwordConfirm }) => (
            <Grid key={ariaLabel} item>
              <FormControl
                required
                margin={error ? "none" : "normal"}
                error={passwordConfirm && !!error.confirmPassword}
                className={classes.formControl}
              >
                <TextField
                  aria-label={ariaLabel}
                  label={label}
                  name={name}
                  type={type}
                  InputProps={inputProps}
                />
                {passwordConfirm && (
                  <FormHelperText>{error.confirmPassword}</FormHelperText>
                )}
              </FormControl>
            </Grid>
          )
        )}
        <Grid item className={classes.buttonControl}>
          <PrimaryButton title={btnTitle} />
        </Grid>
      </Grid>
    </form>
  );
};

export default LoginSignupForm;
