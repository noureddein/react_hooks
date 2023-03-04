export const ACTIONS_TYPE = {
    FETCH_START: "FETCH_START",
    FETCH_SUCCESS: "FETCH_SUCCESS",
    FETCH_ERROR: "FETCH_ERROR",
};

export const INITIAL_STATE = {
    loading: false,
    error: false,
    post: {},
};

export const postReducer = (state, action) => {
    const { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } = ACTIONS_TYPE;

    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                loading: true,
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                post: action.payload,
            };
        case FETCH_ERROR:
            return {
                loading: false,
                error: true,
                post: {}
            };
        default:
            return state;
    }
};
