import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Cart from './components/cart';
import NavBar from "./components/Nav";
class App extends React.Component {
  constructor(){
    super();
    this.state = {
        products: [
          {
            price: 99,
            title: 'Watch',
            qty: 1,
            img: '',
            id: 1
          },
          {
            price: 999,
            title: 'Mobile Phone',
            qty: 10,
            img: '',
            id: 2
          },
          {
            price: 999,
            title: 'Laptop',
            qty: 4,
            img: '',
            id: 3
          }
        ]
      }
      // this.increaseQuantity = this.increaseQuantity.bind(this);
      // this.testing();
    }
    handleIncreaseQuantity = (product)=>{
     const {products} = this.state;
     const index = products.indexOf(product)
     products[index].qty += 1;
     this.setState({products:products})

    }
    handleDecreaseQuantity = (product)=>{
        const products = this.state.products;
        const index = products.indexOf(product);
        if (products[index].qty === 0 ){
            return;
        }
        products[index].qty = products[index].qty - 1;
        this.setState({products:products})
    }
    handleDeleteItem = (product)=>{

        const products = this.state.products;
        const index = products.indexOf(product);
        const prod = products.filter((ele,idx)=> idx != this.index )
        this.setState({products:prod})
    }
    getCartCount = ()=>{
      const {products } = this.state;
      let count = 0;
      products.forEach((product) =>{
        count += product.qty
      }
      
      )
    
      return count
    }
   
    render(){
      const {products} = this.state;
      return (
        <div  className = "App">  
        <NavBar  count = {this.getCartCount()}/>
        <Cart

          products = {products}
          onIncrement = {this.handleIncreaseQuantity}
          onDecrement = {this.handleDecreaseQuantity}
          onDelete = {this.handleDeleteItem} />

        </div>
      );
    }
  }

export default App;
