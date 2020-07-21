import View from "./view";
import Presenter from "./presenter";
import MvpBuilder from "../../../utils/mvpBuilder";

let presenter = new Presenter;

export default MvpBuilder.build(View, presenter, presenter.getProps())