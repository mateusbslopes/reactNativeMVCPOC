import React from "react";

// Base types
export interface Login {
    email?: String;
    password?: String;
}

export type Payload = {
    type: String;
    payload: any;
}

export type Theme = {
    name: String;
}

// Payloads
export type ThemePayload = {
    payload: Theme
} & Payload

export type LoginPayload = {
    payload: Login; 
} & Payload

// Component Properties
export interface AppProps {
    theme: Theme;
}

// Utilities
export interface Presenter {
    setView: (view: React.Component) => any;
    setProps: (props: any) => void;
}