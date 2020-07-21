import Presenter from "../../../utils/presenter";
import { setEmail as setEmailAction } from "../../../store/ducks/login";
import { store } from "../../../../App";
import { setTheme as setThemeAction } from "../../../store/ducks/theme";

class Login extends Presenter {

    setEmail(email: String) {
        store.dispatch(setEmailAction(email));
    }

    toggleTheme(value: String) {
        let theme = value ? 'base' : 'dark';
        store.dispatch(setThemeAction(theme));
    }
}

export default Login;