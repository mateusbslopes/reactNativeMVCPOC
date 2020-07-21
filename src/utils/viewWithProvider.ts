import { Presenter } from "../types";
import React from "react";

export class ViewWithProvider<StateType, PresenterType extends Presenter> extends React.Component {

    constructor(public props: StateType | any, public presenter?: PresenterType) {
        super(props);

        this.presenter = props.presenter;
        this.presenter?.setView(this);
        this.presenter?.setProps(props);
    }

    componentDidUpdate() {
        this.presenter?.setProps(this.props);
    }


}