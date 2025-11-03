import { Component } from "react";
import "./Style.css"

export class Component2 extends Component{
    constructor(){
        super();
        this.state={
            random:0
        }
    }
    RandomNum(){
        this.setState({random:Math.random()*100})
    }
    render(){
        return(
            <>
            <div className="box">
            <p className="text">Random Number is:{this.state.random}</p>
            <button className="btn" onClick={()=>this.RandomNum()}>Random Number</button>
            </div>
            </>
        )
    }
}