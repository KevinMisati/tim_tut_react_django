import React, { Component } from 'react'
import RoomJoinPage from "./RoomJoinPage"
import CreateRoomPage from "./CreateRoomPage"
import { BrowserRouter as Router, Link, Switch, Redirect, Route } from 'react-router-dom'
import Room from './Room'

export class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
                <Router>
                    <Switch>
                    <Route exact path="/" >
                        <h1>This is homepage</h1>
                    </Route>
                    <Route path="/join"  >
                       <RoomJoinPage/>
                    </Route>
                   
                    <Route exact path="/well" componemt={RoomJoinPage} />
                        
                    
                   
                    <Route path="/create" component={CreateRoomPage} />
                    <Route path="/room/:roomCode"  component={Room} />
                    </Switch>
                </Router>
           )
    }
}

export default Home
