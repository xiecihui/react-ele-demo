import React, { Component } from 'react';
import Headersmart from './header.js';
import Search from '../../components/index/search/search';
import HotSmart from '../../components/index/hot/hot';
//import SwipeSmart from './swipe';
import Carousel from '../../components/index/carousel/Carousel';
import ShopListSmart from './shopList';
import ReturnTop from '../../components/index/returnTop/returnTop';
import ShoppingCart from '../../components/index/shoppingCart/shoppingCart';
import './index.less'


export default class Index extends Component{

	render(){
		return(
			<div className='wrapper'>
				<Headersmart/>
				<Search/>
				<HotSmart/>
				<Carousel/>
				{/*<SwipeSmart/>*/}
				<ShopListSmart/>
				<ReturnTop/>
				<ShoppingCart/>

			</div>
		)
	}
}

