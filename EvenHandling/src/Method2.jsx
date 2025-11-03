import on from './assets/lightOn.png'
import off from './assets/lightOff.png'
import { Component } from "react";

export class Method2 extends Component{

    constructor(){
        super();
        this.state={
            light:on
        }
    }

    handleOff(){
        this.setState({ light:off})
    }
    handleOn(){
        this.setState({light:on})
    }

    render(){
        return(
            <>
            <img src={this.state.light} alt="image" /><br /><br />
            <button onClick={()=>this.handleOff()}>Off</button><br /><br />
            <button onClick={()=>this.handleOn()}>On</button>
            </>
        )
    }
}