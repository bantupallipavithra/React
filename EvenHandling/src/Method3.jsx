import { Component } from "react";

export class Method3 extends Component{
    constructor(){
        super();
        this.state={
            msg:"Hii let's go to the party"
        }
    }
    HandleMsg=()=>{
        this.setState({msg:"Sorry ! i hava a work"})
    }
    render(){
        return(
            <>
            <p>{this.state.msg}</p>
            {/* <button onClick={()=>{this.HandleMsg()}}>Click</button> */}
            <button onClick={this.HandleMsg}>click me</button>
            </>
        )
    }
}