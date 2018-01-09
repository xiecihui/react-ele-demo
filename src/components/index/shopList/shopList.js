import React, { Component } from 'react';
import './shopList.less';
import ActiveList from './active';


export default class ShopList extends Component{
	constructor(){
		super();
		this.state = {
			name:'',
			img:'',
			is_solid:false,
			text:'',
			float_delivery_fee:0,
			float_minimum_order_amount:0,
			rating:0,
			recent_order_num:0,
			order_lead_time:0,
			is_new:false,
			is_premium:false,
			supportsDOM:null,
			activities:[],
			restaurant_id:0,
			foodsNum:10
		}
	}
	componentWillMount(){
		let supportsDOM = this.props.data.supports.map((value,index)=>
			<li key={index}>{value.icon_name}</li>)
		let imgValue =this._formatImg();
		this.setState({
			name:this.props.data.name,
			img:imgValue,
			is_solid:this.props.data.delivery_mode?true:false,
			text:this.props.data.delivery_mode?this.props.data.delivery_mode.text:'',
			float_delivery_fee:this.props.data.float_delivery_fee,
			float_minimum_order_amount:this.props.data.float_minimum_order_amount,
			rating:this.props.data.rating,
			recent_order_num:this.props.data.recent_order_num,
			order_lead_time:this.props.data.order_lead_time,
			is_premium:this.props.data.is_premium,
			is_new:this.props.data.is_new,
			supportsDOM:supportsDOM,
			activities:this.props.data.activities?
				this.props.data.activities:'',
			restaurant_id:this.props.data.id,
			// foodsNum:this._getNum()


		})
	}
	/*用户的地址 hash 和商家id**/
	handleClick(){
		window.location.href = `/shop/${this.props.address}/${this.state.restaurant_id}`;
	}
    /*图片格式化*/
    _formatImg(){
    	let img = this.props.data.image_path;
    	let png = /png/g.test(img);
    	img = `${img}${png?'.png':'.jpeg'}`
		let imgValue = img.split('');
    	imgValue.splice(3,0,'/');
    	imgValue.splice(1,0,'/');
    	return imgValue.join('');

	}
	render(){
		return(
			<section className="shopList_item" onClick={this.handleClick.bind(this)}>
				<div className="shopList_img">
					<div className="shopList_logo">
						<img src={`//fuss10.elemecdn.com/${this.state.img}?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/`} alt="" />
						{this.state.foodsNum === 0?null:
						<span className="shopList_logo_num">{this.state.foodsNum}</span>
						}

					</div>
					{this.state.is_new?<div className="show_new_logo"><span>新店</span></div>:''}
				</div>
				<div className="shopList_main">
					<section className="show_wrap">
						<h3 className={this.state.is_premium?'is_premium show_wrap_h3':'show_wrap_h3'}>
							<span>{this.state.name}</span>

						</h3>
						<ul className="show_supportWrap">
							{this.state.supportsDOM}
						</ul>

					</section>
					<section className="show_wrap mt2">
						<div className="show_rateWrap">
							<div>
								<div className='show_star'  style={{width:`${100*this.state.rating/5}%`}}>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 10" width="100%" height="100%"><path fill="#FFCC01"  fillRule="evenodd" d="M54.017 8.072l-2.552 1.561c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L53.63.589c.213-.515.557-.523.774 0l1.146 2.763 2.982.237c.556.044.67.368.24.736l-2.274 1.944.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56zm-48 0L3.465 9.633c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L5.63.589c.213-.515.557-.523.774 0L7.55 3.352l2.982.237c.556.044.67.368.24.736L8.497 6.269l.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56zm12 0l-2.552 1.561c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L17.63.589c.213-.515.557-.523.774 0l1.146 2.763 2.982.237c.556.044.67.368.24.736l-2.274 1.944.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56zm12 0l-2.552 1.561c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L29.63.589c.213-.515.557-.523.774 0l1.146 2.763 2.982.237c.556.044.67.368.24.736l-2.274 1.944.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56zm12 0l-2.552 1.561c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L41.63.589c.213-.515.557-.523.774 0l1.146 2.763 2.982.237c.556.044.67.368.24.736l-2.274 1.944.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56z"></path></svg>
								</div>
							</div>
							<span className="show_num">{this.state.rating}</span>
							<span className="show_num">月售{this.state.recent_order_num}单</span>
						</div>
						{this.state.is_solid?<div className="show_kd">
							<span>{this.state.text}</span>
						</div>:null}

					</section>
					<section className="show_wrap mt2">
						<div className="show_money" >
							<span>￥{this.state.float_minimum_order_amount}起送</span>
							<span>配送费￥{this.state.float_delivery_fee}</span>
						</div>
						<div className="show_money">
							<span>1.13公里</span>
							<span>{this.state.order_lead_time}分钟</span>
						</div>

					</section>
					<div className="line"></div>
					<section className="show_active">
						<ActiveList data={this.state.activities}/>

					</section>

				</div>

			</section>
		)
	}
}

