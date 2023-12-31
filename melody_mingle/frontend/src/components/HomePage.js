import React, { Component } from "react";
import CreateRoomPage from "./CreateRoomPage";
import JoinRoomPage from "./JoinRoomPage";
import Room from "./Room";
import { Grid, Button, ButtonGroup, Typography } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Routes, Link, Redirect } from "react-router-dom";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roomCode: null,
        };
        this.clearRoomCode = this.clearRoomCode.bind(this);
    }

    async componentDidMount() {
        fetch('user-in-room')
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    roomCode: data.code,
                });
            });
    }

    renderHomePage() {
        if (this.state.roomCode) {
            return (
              <Navigate to={`/room/${this.state.roomCode}`} replace={true}/>
            );
        } else {
            return(
                <Grid container spacing={3}>
                    <Grid item xs={12} align="center">
                        <Typography variant="h3" compact="h3">
                            Melody Mingle
                        </Typography>
                    </Grid>
                    <Grid item xs={12} align="center">
                        <ButtonGroup disableElevation variant="contained" color="primary">
                            <Button color="primary" to="/join" component={ Link }>
                                Join a Room!
                            </Button>
                            <Button color="secondary" to="/create" component={ Link }>
                                Create a Room!
                            </Button>
                        </ButtonGroup>
                    </Grid>
                </Grid>
            );
        }
    }

    clearRoomCode() {
        this.setState({
            roomCode: null,
        });
    }

    render() {
        return (<Router>
            <Routes>
                <Route exact path="/" element={ this.renderHomePage() }/>
                <Route path="/join" element={<JoinRoomPage />}/>
                <Route path="/create" element={<CreateRoomPage />}/>
                <Route path="/room/:roomCode" render={(props) => { return <Room {...props} leaveRoomCallback={this.clearRoomCode} />;}}/>
            </Routes>
        </Router>);
    }
}