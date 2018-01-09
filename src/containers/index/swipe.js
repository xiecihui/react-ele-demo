import React, { Component } from 'react';
import Swipe from '../../components/index/swipe/swipe';
import {bannerData} from '../../data/data';

export default class SwipeSmart extends Component{
	constructor(){
		super()
		this.state={
			data:[]
		}
	}
	componentWillMount(){
		this.setState({
			data:bannerData[0].entries
		})
	}

	render(){

		return(
			<div >
			<Swipe data ={this.state.data} />


			</div>
		)
	}
}

