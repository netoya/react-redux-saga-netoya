import { BANNERS, _ERROR, _SUCCESS } from "./constants";
const initialState = {
    banners: ["imagen.png"],
    banners_error: {
        message: "",
    },
    banners_loading: false,
};

const banners = (state, payload) => {
    state = { ...state };
    state.banners_loading = true;
    return { ...state };
};

const bannersSuccess = (state, payload) => {
    state = { ...state };
    state.banners_loading = false;
    state.banners = [...payload.banners];
    return { ...state };
};

const bannersError = (state, payload) => {
    const {
        error = {
            message: "",
        },
    } = payload;
    state = { ...state };
    state.banners_loading = false;
    state.banners_error = { ...error };
    return { ...state };
};

export function homeReducer(state = initialState, { type, payload }) {
    switch (type) {
        case BANNERS:
            return banners(state, payload);

        case BANNERS + _SUCCESS:
            return bannersSuccess(state, payload);

        case BANNERS + _ERROR:
            return bannersError(state, payload);

        default:
            return state;
    }
}
if (false) console.log(_ERROR, _SUCCESS);
