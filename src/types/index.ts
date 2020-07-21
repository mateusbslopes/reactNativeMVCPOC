import React from "react";

export interface Presenter {
    setView: (view: React.Component) => any;
    setProps: (props: any) => void;
}

export interface Login {
    email?: String;
    password?: String;
}

export interface LoginPayload {
    type: String;
    payload: Login;
}

