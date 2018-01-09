import React, { Component } from 'react';
import './Activity.less';


export default class Activity extends Component{
    /*图片格式化*/
    _formatImg(src){
        let png=/png/g.test(src);
        src=`${src}${png?'.png':'.jpeg'}`
        let imgValue=src.split('');
        imgValue.splice(3,0,'/');
        imgValue.splice(1,0,'/');
        return imgValue.join('');
    }

    render(){
        let listDOM = this.props.data.map((value,index)=>{
            let img = this._formatImg(value.img);
            return(
                <a href="/" className="activity_body_item" key={index}>
                    <img src={`https://fuss10.elemecdn.com/${img}?imageMogr/format/webp/`} alt={value.name} />
                    <div>
                        <p className="food_name">{value.name}</p>
                        <div className="food_price">
                            <span className="price">{value.price}</span>
                            <del>￥{value.original_price}</del>

                        </div>
                    </div>
                    <span className="discount_tip">{value.tip?value.tip:''}</span>
                </a>
            )
        })
        return(
            <div className="activity_box mb20">
                <div className="activity_title">
                    <i className="iconfont ">&#xe68d;</i>
                    {this.props.logo?this.props.logo:<i className="iconfont title_logo_icon">&#xe61d;</i>}
                    {this.props.title}
                    <i className="iconfont ">&#xe68c;</i>
                    <p className="active_sub_title">{this.props.sub}</p>

                </div>
                <div className="activity_body">
                    {listDOM}

                </div>
                <p className="activity_more">查看更多 ></p>
            </div>
        )
    }
}

