import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
class App extends Component {

    constructor(props) {
        super(props);
        this.handlechange = this.handlechange.bind(this);
        this.handleSignup = this.handleSignup.bind(this);
        this.state = { login: '' };
    }
    handlechange(e) {
        this.setState({ login: e.target.value });
    }
    handleSignup() {
            alert(`chal nikal madharchod, ${this.state.login}!`);
   
    }
    render() {
        return (
            <div className="Mystyle">
                <h1> WELCOME FRIENDS
                    </h1>
                <input className="input-style" value={this.state.login}
                    onChange={this.handlechange} placeholder="Write your first Name in capital Letters" />
                <br></br>
                <button className="Button" onClick={this.handleSignup} color>
                    Lets Go
                    </button>
            </div>
        );
    }
}

    export default App;