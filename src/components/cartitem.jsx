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

    render() { 
        const { price ,title, qty} = this.state;
        return (  
            <div className = "cart-item">
                <div className = "left-block">
                  <img style= {style.image}/>
                </div>
                <div className = "right-block">
                    <div style = {{fontSize:25}}>{title}</div>
                    <div style = {{color:'#777'}}>{price}</div>
                    <div style = {{color:'#777'}}>{qty}</div>
                    <div className = "cart-item-actions">
                    {/*Button */}
                    <img alt = "increase" className = "action-icons" src = "https://as2.ftcdn.net/jpg/00/70/16/29/500_F_70162903_5mFpUbO3ZfRyD4gslH8j2c5VxjGMKU9G.jpg" />
                    <img alt = "decrease" className = "action-icons" src = "https://www.flaticon.com/svg/static/icons/svg/1828/1828899.svg" />
                    <img alt = "delete" className = "action-icons" src = "https://as2.ftcdn.net/jpg/00/98/26/11/500_F_98261175_Sv69O3rZsHApYkjAdrWbgQixYHwyZyOr.jpg" />
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