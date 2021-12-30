//LOGIN ACTIONS
export const LoginStart = (userCredentials) => ({
  type: "LOGIN_START",
});

export const LoginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const LoginFailure = () => ({
  type: "LOGIN_FAILURE",
});

export const Logout = () => ({
  type: "LOGOUT",
});

//UPDATE USER ACTIONS
export const UpdateStart = (userCredentials) => ({
  type: "UPDATE_START",
});

export const UpdateStuccess = (user) => ({
  type: "UPDATE_SUCCESS",
  payload: user,
});

export const UpdateFtailure = () => ({
  type: "UPDATE_FAILURE",
});
