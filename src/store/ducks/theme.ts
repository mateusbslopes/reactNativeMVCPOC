import { Theme, ThemePayload } from "../../types";

// Actions
export const SET_THEME = "SET_THEME";

export const setTheme = (theme: String) => ({
    type: SET_THEME,
    payload: { theme }
});

const defaultState: Theme = {
  name: "dark"
};

// Reducer
export default function(state = defaultState, { type, payload }: ThemePayload) {
  switch (type) {
    case SET_THEME:
      return { name: payload.theme };
    default:
      return state;
  }
}