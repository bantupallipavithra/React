import { Component } from "react";

export class OnChange2 extends Component{

    constructor(){
        super();
        this.state = {
            input : "",
            city : "",
            name : ""
        }
    }

    getData(e){
        // console.log(e.target.value);
        this.setState({input:e.target.value});
    }
    setData =()=> {
        var name1 =  prompt("Enter name : ")
        this.setState({city:this.state.input,name:name1});
    }



    render(){
        return(
            <>
            <input type="text" placeholder="Enter your city " onChange={(e)=>this.getData(e)}/><br /><br />
            <button onClick={this.setData}>Submit</button>
            <p>name : {this.state.name}</p>
            <p>city : {this.state.city}</p>
            </>
        )
    }
}