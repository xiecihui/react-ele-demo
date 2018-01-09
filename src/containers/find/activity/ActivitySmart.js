import React, { Component } from 'react';
 import Activity from '../../../components/finder/activity/Activity';
import {goodPriceData,GoodFoods,gift} from '../../../data/data.js';


export default class ActivitySmart extends Component{
    constructor(){
        super();
        this.state={
            dayEveryData:[],
            foodsData:[],
            giftData:[]
        }
    }
    componentDidMount(){
        /*天天特价*/
        let dayData = goodPriceData.query_list.slice(0,3).map((value,index)=>
            value.foods[0]
        )
        let dayEveryData = dayData.map((value,index)=>({
            name:value.restaurant_name,
            img:value.image_path,
            price:'¥'+value.price,
            original_price:value.original_price,
            tip:(value.discount_rate*10).toFixed(1)+'折'
        }))
        /*美食推荐*/
        let foodsData = GoodFoods[0].foods;
        let foodsEveryData = foodsData.map((value,index)=>({
            name:value.name,
            img:value.image_hash,
            price:'¥'+value.price,
            original_price:value.original_price,
            tip:null
        }))
        /*限时好礼*/
        let giftData = gift.map((value,index)=>({
            name:value.title,
            img:value.image_hash,
            price:value.points_required+'积分',
            original_price:value.original_price,
            tip:value.corner_marker
        }))
        this.setState({
            foodsData:foodsEveryData,
            giftData,
            dayEveryData


        })

    }

    render(){
        let dayLogo = <i className="iconfont title_logo_icon">&#xe61d;</i>,
           foodsLogo = <i className="iconfont title_logo_icon">&#xe601;</i>,
           giftLogo = <i className="iconfont title_logo_icon">&#xe614;</i>;
        return(
            <div >
                <Activity logo={foodsLogo} title="美食推荐" sub="你的口味，我都懂得" data={this.state.foodsData} />
                <Activity logo={dayLogo} title="天天特价" sub="特价商品，一网打尽" data={this.state.dayEveryData} />
                <Activity logo={giftLogo} title="限时好礼" sub="小积分换豪礼" data={this.state.giftData} />

            </div>
        )
    }
}

