import React from 'react';

class CartItem extends React.Component {
    constructor(){
        super();
        this.state = {
            price:999,
            title:'phone',
            qty:1,
            img:''
        }
    }
    increaseQuantity = ()=>{
        const qty = this.state.qty;
        this.setState({qty:qty+1});
    }
    decreaseQuantity = ()=>{
        const qty = this.state.qty;
        this.setState({qty:qty >0?qty-1:0});
    }
    deleteItem = ()=>{
        console.log('delete');
    }
    render() { 
        const { price ,title, qty} = this.state;
        return (  
            <div className = "cart-item">
                <div className = "left-block">
                  <img style= {style.image}/>
                </div>
                <div className = "right-block">
                    <div style = {{fontSize:25}}>{title}</div>
                    <div style = {{color:'#777'}}>Rs {price}</div>
                    <div style = {{color:'#777'}}>Qty: {qty}</div>
                    <div className = "cart-item-actions">
                    {/*Button */}
                    <img
                      alt = "increase"
                      className = "action-icons" 
                      src = "https://as2.ftcdn.net/jpg/00/70/16/29/500_F_70162903_5mFpUbO3ZfRyD4gslH8j2c5VxjGMKU9G.jpg"
                      onClick = {this.increaseQuantity} 
                       />
                    <img
                     alt = "decrease" 
                     className = "action-icons" 
                     src = "https://www.flaticon.com/svg/static/icons/svg/1828/1828899.svg" 
                     onClick = {this.decreaseQuantity} 
                     />
                    <img 
                    alt = "delete" 
                    className = "action-icons" 
                    src = "https://as2.ftcdn.net/jpg/00/98/26/11/500_F_98261175_Sv69O3rZsHApYkjAdrWbgQixYHwyZyOr.jpg" 
                    onClick = {this.deleteItem}
                   />
                    </div>
                </div>
                </div>
        );
    }
}
const style = {
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}
 
export default CartItem;