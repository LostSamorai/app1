import { Component } from "react";
export class Contacts extends Component{
  state={
    productName:"Apple",
    productPrice:18000,
  };
  render(){
    return<>
    <h1 className="bg-danger">Data </h1>
    <i className="fas fa-home"></i>
    <h3>{this.state.productName}</h3>
    <h3>{this.state.productPrice}</h3>

    </>
  }
}