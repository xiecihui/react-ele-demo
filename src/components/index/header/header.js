import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import GetAddress from '../../getAddress/getAddress';
import './header.less';


export default class Header extends Component{
    constructor(){
    	super();
    	this.state = {
    		temperature:'',
			description:'',
			image_hash:'',
			address:'',
			getAddress:false
		}
	}
	componentWillMount(){
    	/*如果地理位置和天气存在*/
    	if(this.props.data){
    		let data = this.props.data;
    		this.setState(data)
		}
		window.history.pushState({page:'home'},'','');
    	this._isCurrent = this._isCurrent.bind(this);
    	window.addEventListener('popstate',this._isCurrent)

	}
    handleClick(){
		this.setState({
			getAddress:true
		})
		this._addHistory()
		this._bodyoverflow()

	}
	/*历史判断*/
	_isCurrent(){
		if(!window.history.state){return}
		if(window.history.state.page === 'getAddress'){
			this.setState({
				getAddress:true
			})
			this._bodyoverflow()
		}else if(window.history.state.page === 'home'){
			this.setState({
				getAddress:false
			})
			window.document.body.style.overflow = 'auto';
		}
	}
	/*
	* 改变body高度*/
	_bodyoverflow(){
    	window.document.body.style.overflow = 'hidden';
    	window.document.body.style.height = '100vh';
	}
	/*添加历史记录*/
	_addHistory(){
		window.history.pushState({page:'getAddress'},'','');
		this._addHistory._isCurrent = true;
	}
	componentWillUnmount(){
		window.removeEventListener('popstate',this._isCurrent)
	}
	render(){
		return(
			<ReactCSSTransitionGroup
				transitionName='example'
				transitionEnterTimeout={500}
				transitionLeaveTimeout={500}
			>
			<header className="index_header" >
				<div className="header_title">
					<div className="index_address" onClick={this.handleClick.bind(this)}>
						<i className="address_icon iconfont">&#xe606;</i>
						<span className="address_word">上海市浦东新区庆利路425弄还海湾新城</span>
						<i className="drop_icon iconfont">&#xe64a;</i>
					</div>
					<aside className="weather">
						<div>
							<h2 className="weather_num">27</h2>
							<p className="weather_describe">晴天</p>
						</div>
						<i className="weather_icon iconfont">&#xe64f;</i>

					</aside>

				</div>


			</header>
				{this.state.getAddress ? <GetAddress/>:null}
			</ReactCSSTransitionGroup>
		)
	}
}

