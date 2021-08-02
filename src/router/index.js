import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from '../App';
import Barchart from "../components/Barchart";
import Header from "../components/Header";
import Login from "../components/Login";

export default function RouterPage() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/about" component={About} />
                <Route path="/login" component={Login} />
                <Route path="/barchart" component={Barchart} />
                <Route path="/home">
                    <App />
                </Route>
            </Switch>
        </Router>
    );
}


class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'coconut' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        // alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick your favorite flavor:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <input type="submit" value="Submit" /> <br/>
                <label> your current favorite flavor is :{this.state.value} </label>
            </form>
        );
    }
}
