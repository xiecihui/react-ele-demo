import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './footer.less';

export default class Footer extends Component{

    render(){
        return(
            <footer className="footer_box" >
                <div className="footer_wrap">
                    <NavLink to="/" exact activeClassName="active" className="footer_item">
                        <i className="iconfont block">&#xe639;</i>
                        <span className="footer_item_word">外卖</span>
                    </NavLink>
                    <NavLink to="/find"  activeClassName="active" className="footer_item">
                        <i className="iconfont block">&#xe600;</i>
                        <span className="footer_item_word">发现</span>

                    </NavLink>
                    <NavLink to="/order"  activeClassName="active" className="footer_item">
                        <i className="iconfont block">&#xe671;</i>
                        <span className="footer_item_word">订单</span>

                    </NavLink>
                    <NavLink to="/my"  activeClassName="active" className="footer_item">
                        <i className="iconfont block">&#xe60d;</i>
                        <span className="footer_item_word">我的</span>

                    </NavLink>
                </div>
            </footer>
        )
    }
}

