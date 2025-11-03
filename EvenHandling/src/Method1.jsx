import { Component } from "react";

 export class Method1 extends Component{
    constructor(){
        super();
        this.state={
            msg:"Hello"
        };

        this.handleMsg=this.handleMsg.bind(this);
    }
     handleMsg(){
            this.setState({msg:"Byee"});
        }
    render(){
        return(
           <>
           <p>{this.state.msg}</p>
           <button onClick={this.handleMsg}>Click</button>
           </>
        )
    }
}