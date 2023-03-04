export const ACTIONS_TYPE = {
    CHANGE_TYPE: "CHANGE_TYPE",
    ADD_TAG: "ADD_TAG",
    REMOVE_TAG: "REMOVE_TAG",
    INCREASE_QTY: "INCREASE_QTY",
    DECREASE_QTY: "DECREASE_QTY",
};

export const INITIAL_STATE = {
    title: "",
    desc: "",
    price: 0,
    category: "",
    tags: [],
    images: {
        sm: "",
        md: "",
        lg: "",
    },
    quantity: 0,
};

export const formReducer = (state, action) => {
    const { CHANGE_TYPE, ADD_TAG, REMOVE_TAG, INCREASE_QTY, DECREASE_QTY } =
        ACTIONS_TYPE;

    switch (action.type) {
        case CHANGE_TYPE:
            return {
                ...state,
                [action.payload.name]: action.payload.value,
            };
        case ADD_TAG:
            return {
                ...state,
                tags: [...state.tags, ...action.payload.tags],
            };
        case REMOVE_TAG:
            return {
                ...state,
                tags: [...state.tags.filter((t) => t !== action.payload.tag)],
            };
        case INCREASE_QTY:
            return {
                ...state,
                quantity: state.quantity + 1,
            };
        case DECREASE_QTY:
            return {
                ...state,
                quantity: state.quantity - 1,
            };
        default:
            return state;
    }
};
