export const loginLink = {
  prompt: "Already have an account?",
  link: "/login",
  title: "Login",
};

export const inputFields = [
  {
    'ariaLabel': 'username', 
    'label': 'Username',
    'name': 'username',
    'type': 'text',
    'passwordConfirm': false,

  }, 
  {
    'ariaLabel': 'e-mail address', 
    'label': 'E-mail address',
    'name': 'email',
    'type': 'email',
    'passwordConfirm': false,
  }, 
  {
    'ariaLabel': "password",
    'label': "Password",
    'name': "password",
    'type': "password",
    'inputProps': { minLength: 6 },
    'passwordConfirm': true,
  }, 
  {
    'label':"Confirm Password",
    'ariaLabel': "confirm password",
    'type': "password",
    'inputProps': { minLength: 6 },
    'name': "confirmPassword",
    'passwordConfirm': true,
  }, 
]