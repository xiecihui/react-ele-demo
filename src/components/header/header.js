import React, { Component } from 'react';
import './header.less';

export default class Header extends Component{
    handleBack(){
        window.history.back();
    }

    render(){
        const {title} = this.props;
        return(
            <header className="header_box" >
                <div className="header_wrap">
                    <div className="backIcon_wrap" onClick={this.handleBack.bind(this)}>
                        <svg className="backIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 32" version="1.1"><path fill="#fff" d="M16.552 5.633L14.508 3.59 2.243 15.853 14.508 28.41l2.044-2.043-10.22-10.513z"></path></svg>
                    </div>
                    <h1 className="header_title">{this.props.title}</h1>
                </div>
            </header>
        )
    }
}

