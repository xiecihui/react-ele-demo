import React,{Component} from 'react';
import Category from './category';
import './commodity.less';

class Commodity extends Component{
    constructor(){
        super()
        this.state = {
            scroll:null,
            current:0,
            num:0,
            allPrice:0,
            /*商家id*/
            id:0,
            fatherCate:{},
            /*商家商品信息的存储*/
            foodsSave:{}

        }
    }

    handleClickTab(){

    }

    render(){
        let data =this.props.data?this.props.data:[];
        /*tab 切换卡*/
        let tablistDOM = data.map((value,index)=>{
            return(
                <Category
                    value ={value}
                    key={index}
                    index ={index}
                    type = {value.type}
                    current ={this.state.current}
                    handleClickTab ={this.handleClickTab.bind(this)}
                />
            )
        })

        return (
            <div className=''>
                <ul className="category_box">
                    {tablistDOM}
                </ul>


            </div>
        )
    }
}

export default Commodity;