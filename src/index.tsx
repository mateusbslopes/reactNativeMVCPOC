import React from "react";
import Login from "./components/pages/Login";
import { ThemeProvider } from "emotion-theming";
import themes from "./theme";
import { connect } from "react-redux";

const mapState = function (state: any) {
    return { theme: state.theme.name }
}

const mapDispatch = {
}

const connector = connect(mapState, mapDispatch);


class Base extends React.Component {


    render() {
        return <ThemeProvider theme={themes[this.props.theme]}><Login /></ThemeProvider>
    }


}

export default connector(Base);