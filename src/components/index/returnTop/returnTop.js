import React, { Component } from 'react';
import './returnTop.less';


export default class ReturnTop extends Component{
	constructor(){
		super();
		this.state={
			opa:true,
			dis:true
		}
		this._move=this._move.bind(this)
	}
	componentDidMount(){
		this.isUnmount = false;
		document.addEventListener('scroll',this._move)
	}
	componentWillUnmount(){
		this.isUnmount= true;
		document.removeEventListener('scroll',this._move)
	}
	_move(){
		this._throttle(this.resizeTop,this);
	}
	handleGoBack(){
		document.documentElement.scrollTop = document.body.scrollTop = 0;
	}
	resizeTop(){
		if(window.scrollY>500){
			this.setState({
				dis:false
			});
			setTimeout(()=>{
				if(this.isUnmount){return}
				this.setState({
					opa:false
				})
			},100)
		}else{
			this.setState({
				opa:true
			})
			setTimeout(()=>{
				if(this.isUnmount){return}
				this.setState({
					dis:true
				})
			},800)
		}
	}
	/*函数节流*/
    _throttle(method,context){
    	clearTimeout(method.tId);
    	method.tId = setTimeout(function(){
    		method.call(context)
		},100)
	}

	render(){
		return(
			<div className="returnTop-box"
				 onClick={this.handleGoBack.bind(this)}
				 style={{opacity:`${this.state.opa?0:1}`
					 ,display:`${this.state.dis?'none':''}`}}
			>
				<i className="returnTop-icon iconfont">&#xe60a;</i>
			</div>
		)
	}
}

