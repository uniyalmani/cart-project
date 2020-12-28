import React, { Component } from 'react';
class NavBar extends Component {
    render() { 
        return (  
        <div>   
            <nav class="navbar navbar-dark bg-dark">
            <div class="container-fluid">
            <a class="navbar-brand" href="#"><img style= {style.image} src = "https://as2.ftcdn.net/jpg/01/63/42/79/500_F_163427943_W56xtj7YydS4YujdUqQot94IINtt91FV.jpg"/> Cart</a>
            </div>
            </nav>
        </div>
        );
    }
}
const style = {
    image:{
        height:50,
        width:50,
        borderRadius:4,
      }
}
 
export default NavBar;