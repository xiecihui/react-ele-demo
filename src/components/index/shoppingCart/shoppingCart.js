import React, { Component } from 'react';
import './shoppingCart.less';


export default class ShoppingCart extends Component{

	render(){
		return(
			<div className="shoppingCart_box">
				<i className="shoppingCart_icon iconfont">&#xe603;</i>
				<span className="shopping_dot"></span>
			</div>
		)
	}
}

