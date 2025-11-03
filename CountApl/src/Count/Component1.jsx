import { Component } from "react";
import "./Style.css"

export class Component1 extends Component{
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    IncrementCount=()=>{
        this.setState({count:this.state.count+1})
    }
    DecrementCount(){
        this.setState({count:this.state.count-1})
    }
    Reset(){
        this.setState({count:0})
    }
    render(){
        return(
            <>
           <div className="counter-box">
                <h2 className="heading">Counter App</h2>
                <p className="count-text">Count: {this.state.count}</p>

                <div className="btn-container">
                    <button className="btn increment" onClick={this.IncrementCount}>+</button>
                    <button className="btn decrement" onClick={() => this.DecrementCount()}>-</button>
                    <button className="btn reset" onClick={this.Reset.bind(this)}>Reset</button>
                </div>
            </div>
            </>
        )
    }
}