import { LoginPayload } from "../../types";

// Actions
export const SET_EMAIL = "SET_ EMAIL";
export const SET_PASSWORD = "SET_PASSWORD";

export const setEmail = (email: String) => ({
    type: SET_EMAIL,
    payload: { email }
});

export const setPassword = (password: String) => ({
    type: SET_PASSWORD,
    payload: { password }
});

// Reducer
export default function login(state = {email: "teste", password: "lalala"}, { type, payload }: LoginPayload) {
    switch (type) {
        case SET_EMAIL:
            return { ...state, email: payload.email };
        case SET_PASSWORD:
            return { ...state, password: payload.password };
        default:
            return state;
    }
}