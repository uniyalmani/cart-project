import React from 'react';

class CartItem extends React.Component {

    render() { 
        return (  
            <div className = "cart-item">
                <div className = "left-block">
                  <img style= {style.image}/>
                </div>
                <div className = "right-block">
                    <div style = {{fontSize:25}}>Phone</div>
                    <div style = {{color:'#777'}}>rs 990</div>
                    <div style = {{color:'#777'}}>qty: 1</div>
                    <div className = "cart-item-actions">
                    {/*Button */}
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