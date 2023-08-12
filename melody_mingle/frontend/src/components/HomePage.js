import React, { Component } from "react";
import CreateRoomPage from "./CreateRoomPage";
import JoinRoomPage from "./JoinRoomPage";
import { BrowserRouter as Router, Switch, Route, Routes, Link, Redirect } from "react-router-dom";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <h1>this is me</h1>;
    }
}