import React, { Component } from 'react';
import Header from "../../components/header/header";
import UnLogin from "../../components/order/unLogin/unLogin";

export default class Order extends Component{

	render(){
		return(
			<div >
				<Header title={'订单'}/>
				<UnLogin/>
			</div>
		)
	}
}

