import * as types from "./actionTypes";

const initialState = {
    isAuth: false,
    token: '',
    isAuthLoging: false,
    isAuthError: false
}

const reducer = (oldstate = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.GET_LOGIN_REQUEST:
            return {
                ...oldstate,
                isAuthLoading: false,
            };
        case types.GET_LOGIN_SUCCESS:
            return {
                ...oldstate,
                isAuthLoading: false,
                isAuth: true,
                token: payload,
            };
        case types.GET_LOGIN_FAILURE:
            return {
                ...oldstate,
                isAuthLoading: false,
                isAuthError: true,
                isAuth: false,
                token: "",
            };
        case types.ADD_SIGNUP_REQUEST:
            return {
                ...oldstate,
                isAuthLoading: false,
            };
        case types.ADD_SIGNUP_SUCCESS:
            return {
                ...oldstate,
                isAuthLoading: false,
                token: payload,
            };
        case types.ADD_SIGNUP_FAILURE:
            return {
                ...oldstate,
                isAuthLoading: false,
                isAuthError: true,
                token: "",
            };
        case types.GET_SIGNOUT_SUCCESS:
            return {
                isAuth: false,
                token: '',
                isAuthLoging: false,
                isAuthError: false
            };
        default:
            return oldstate;
    }
};
export { reducer }