import { Component } from "react";

export class OnChange extends Component {
    
    constructor() {
        super();
        this.state = {
            input: "",
            data: "",
            name: "",
            city: ""
        };
    }

    onInput = (event) => {
        this.setState({ input: event.target.value });
    }

    onButtonClick = () => {
        var n = prompt("Enter your name:");
        this.setState({
            data: this.state.input,
            name: n,
            input: ""
        });
    }

    changeCity = (e) => {
        this.setState({ city: e.target.value });
        console.log(e.target.value);
    }

    render() {
        return (
            <>
                <p>Input: {this.state.data}</p>
                <p>Name: {this.state.name}</p>
                <p>City: {this.state.city}</p>

                <input type="text" value={this.state.input} onChange={this.onInput} /><br /><br />

                <button onClick={this.onButtonClick}>Click me</button><br /><br />

                <label>Select your city: </label>
                <select onChange={this.changeCity}>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Bangalore">Bangalore</option>
                </select>
            </>
        );
    }
}
