import React, { Component } from 'react';
import {hot_data} from '../../../data/data';
import {shuffle} from '../../../data/shuffle';
import './hot.less';


export default class HotSmart extends Component{
	constructor(){
		super();
		this.state={
			listData:[]
		}
	}
	componentWillMount(){
		if(hot_data){
			this.setState({
                listData:shuffle(hot_data)
			})
		}
	}

	render(){
		let {listData} = this.state;
		let hotList = listData.map((item,index)=>{
			return<a key={index} href="/">{item.word}</a>
		})
		return(
			<div className="hot_box">
				<div className="hot_content">
					{hotList}

				</div>

			</div>
		)
	}
}

