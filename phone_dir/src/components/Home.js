import React, { Component } from 'react'
import RegisterUser from './registerUser';
import DisplayUsers from './displayUsers';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './navbar';

class Home extends Component {
    state={
        users:[{username:'day',phone:'23'},{username:'bay',phone:'12'}]
    }

    addNewUser=(user)=>{
        let newUsers=[...this.state.users,user]
        this.setState({
            users:newUsers
        })
    }

    deleteUser=(phone)=>{
        let newlist=this.state.users.filter(user=>{
            return (user.phone!==phone)
        });
        this.setState({
            users:newlist
        });
    }

  render() {
    return (
        <BrowserRouter>
        <div>
            <Navbar />
        <Switch>
            <Route exact path="/" render={(props)=><RegisterUser {...props}  addNewUser={this.addNewUser} />} />
            <Route path="/displayUsers" render={(props)=><DisplayUsers {...props}  users={this.state.users} deleteUser={this.deleteUser} />} />
        </Switch>
        </div>
        </BrowserRouter>
    )
  }
}

export default Home;