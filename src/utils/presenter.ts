import { Presenter as IPresenter } from "../types";
import React from "react";

class Presenter implements IPresenter {

    view: React.Component | undefined;
    props: any;

    setView(view: React.Component) {
        this.view = view;
    }

    setProps(props: any) {
        this.props = props;
    }

    getProps(): any {
        return this.props;
    }
}

export default Presenter;