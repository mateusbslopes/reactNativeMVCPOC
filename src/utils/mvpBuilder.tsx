import React from 'react';
import { Presenter } from '../types';
import { ConnectedComponent } from 'react-redux';
import createClass from "create-react-class";

export default class MvpBuilder {

    static build(view: any | React.Component | ConnectedComponent<any, any>, presenter: Presenter, props: any) {
        return createClass({
            displayName: "deusAbençoa",
            render: function() {
                return React.createElement(view, { presenter, ...props})
            }
        });
    }
}
