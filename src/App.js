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
            img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
            id: 1
          },
          {
            price: 999,
            title: 'Mobile Phone',
            qty: 10,
            img: 'https://images.unsplash.com/photo-1520923642038-b4259acecbd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1306&q=80',
            id: 2
          },
          {
            price: 999,
            title: 'Laptop',
            qty: 4,
            img: 'https://images.unsplash.com/photo-1504707748692-419802cf939d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1330&q=80',
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
      })
      return count
    }
    getCartTotal = ()=>{
      const {products } = this.state;
      let cartTotal = 0;
      products.map((product) =>{
        cartTotal = cartTotal + product.qty*product.price
      })
      return cartTotal;
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
  <nav class="navbar navbar-light bg-light">
  <form class="form-inline">
    <div class="btn btn-outline-success" > Total {this.getCartTotal()}</div>
    <button class="btn btn-outline-secondary m-2" type="button">Order Now</button>
  </form>
</nav>
        </div>
      );
    }
  }

export default App;
