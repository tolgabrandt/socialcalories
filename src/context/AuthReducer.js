const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'AUTH_GUEST':
      return {
        ...state,
        isAuthReady: true,
      };

    case 'AUTH_USER':
      return {
        ...state,
        user: action.payload,
        isAuthReady: true,
      };

    case 'LOGIN_REQUEST':
      return {
        ...state,
        isPending: true,
      };

    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isPending: false,
      };

    case 'REGISTER_REQUEST':
      return {
        ...state,
        isPending: true,
      };

    case 'REGISTER_SUCCESS':
      return {
        ...state,
        isPending: false,
      };

    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
};

export default AuthReducer;
