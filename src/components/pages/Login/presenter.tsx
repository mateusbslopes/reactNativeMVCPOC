import Presenter from "../../../utils/presenter";
import { setEmail as setEmailAction } from "../../../store/ducks/login";
import { store } from "../../../../App";

class Login extends Presenter {

    setEmail(email: String) {
        store.dispatch(setEmailAction(email));
    }
}

export default Login;