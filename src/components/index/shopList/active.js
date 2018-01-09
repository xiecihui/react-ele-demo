import React, { Component } from 'react';
import './active.less';


export default class ActiveList  extends Component{
	constructor(){
		super();
		this.state = {
			hide:true,
			is_active:false,
			num:0
		}
	}
	componentWillMount(){
		if(this.props.data){
			let num = this.props.data.length;
			this.setState({
				is_active:true,
				num
			})
		}
	}
	handleShowMore(e){
		e.stopPropagation();
		this.setState({
			hide:!this.state.hide
		})
	}

	render(){
		let activitiesDOM = this.props.data.map((value,index)=>
			<div className="active_item" key={index}
				 style={index>1 ?this.state.hide?{display:'none'}:{}:null}
			>
				<i className="active_logo"
				   style={{color:'#fff',backgroundColor:`#${value.icon_color}`}}
				>{value.icon_name}</i>
				<span>{value.description}</span>

			</div>
		)
		return(
			<div>
				<div className="active_itemAll">{activitiesDOM}</div>
				<div className={`show_more ${this.state.hide?'':'on'} ${this.state.num<=2 ? '':'active_num'}`}
					 onClick={this.handleShowMore.bind(this)}
				>
						<span>{this.state.num}个活动</span>
					{this.state.hide?<i className="iconfont ">&#xe64a;</i>
					:
						<i className="iconfont ">&#xe608;</i>
					}

				</div>

			</div>
		)
	}
}

