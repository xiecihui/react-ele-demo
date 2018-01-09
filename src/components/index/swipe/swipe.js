import React, { Component } from 'react';
import { Carousel } from 'antd-mobile';
import PropTypes from 'prop-types';
import {splitArr} from '../../../data/shuffle.js';
import 'antd-mobile/lib/carousel/style/index.less'
import './swipe.less';


export default class Swipe extends Component{
	static PropTypes = {
		data:PropTypes.arry
	}
	constructor(){
		super()
		this.state = {
            swipeDiv:[]
		}
	}
	componentWillMount(){
		let swipeDiv = splitArr(this.props.data,8)
		this.setState({
            swipeDiv:swipeDiv

		})
	}



	render(){
		const {swipeDiv} =this.state;
		let swipeList;
        swipeList = swipeDiv.map((item,index)=>{
        	let swipeItem ;
            swipeItem = item.map((item,index)=>{
            	let imgSrc = item.image_hash.split("");
            	imgSrc.splice(3,0,'/');
                imgSrc.splice(1,0,'/');
                imgSrc = imgSrc.join('');
            	return(
            		<a key={"image"+index} href={item.link}>
						<img  src={`//fuss10.elemecdn.com/${imgSrc}.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/`} alt={item.description}/>
						<p>{item.name}</p>
					</a>

				)
			})
        	return(
				<div key={index} className="swipe_box">
					{swipeItem}
				</div>
			)
		})


		return(
			<Carousel
				autoplay
				infinite
				dots



			>

				{swipeList}

			</Carousel>
		)
	}
}

