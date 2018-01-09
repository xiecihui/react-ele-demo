import React,{Component} from 'react';
import ActivitiesList from '../../activitiesList/activitiesList';
import './shopInformation.less';

class ShopInformation extends Component{
    componentDidMount(){
            this._scrollTogether = this._scrollTogether.bind(this);
            this.body.addEventListener('scroll',this._scrollTogether);


    }
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.dataJson.activities &&!this.props.dataJson.activities){
            return true;
        }else{
            return false;
        }
    }
    componentWillUnmount(){
        this.body.removeEventListener('scroll',this._scrollTogether);
    }
    _scrollTogether(){
        /*联动*/
        let headerHeight = document.querySelector('.shoplist_header').offsetHeight;
       //scrollTop方法返回或设置匹配元素的滚动条的垂直位置
        this.body.scrollTop>headerHeight?
            (document.querySelector('.shopDetails_wrap').scrollTop = headerHeight):
            (document.querySelector('.shopDetails_wrap').scrollTop = this.body.scrollTop)

    }


    render(){
        let data = this.props.dataJson;
        let active = data.activities ? data.activities:[];
        let activeDOM = active.map((value,index)=>{
            return(
                <ActivitiesList key={index} value={{icon_name:value.icon_name,
                    icon_color:value.icon_color,description:value.description
                }}/>
            )
        })
        let phone = data.phone?data.phone.split(" "):[];
        let phoneDOM = phone.map((value,index)=>{
            return(<a key={value} href={"tel:"+`${value}`}className="phoneNumber">{value}</a>)
        })
        return (
            <div ref={(body)=>{this.body = body;}} className="shop_info">
                <section className="section_wrap">
                    <h2>活动与服务</h2>
                    <div className="active_wrap">
                        {activeDOM}
                    </div>

                </section>
                <section className="section_wrap">
                    <h2>商家信息</h2>
                    <ul className="section_info_list">
                        <li>{data.description || '毫无简介'}</li>
                        <li>
                            <span>商家电话</span>
                            <span>
                                {phoneDOM}
                                <svg className="arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 547 987" width="100%" height="100%"><path d="M0 931.973l51.2 54.613 494.933-494.933L51.2.133 0 51.333l440.32 440.32L0 931.973z"/></svg>
                            </span>
                        </li>
                        <li>
                            <span>地址</span>
                            <span>{data.address || ''}</span>
                        </li>
                        <li>
                            <span>营业时间</span>
                            <span>{data.opening_hours? data.opening_hours.join(''):''}</span>
                        </li>
                    </ul>

                </section>
                <section className="section_wrap">
                    <a href="/" className="info_other">
                        营业资质
                        <svg className="arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 547 987" width="100%" height="100%"><path d="M0 931.973l51.2 54.613 494.933-494.933L51.2.133 0 51.333l440.32 440.32L0 931.973z"/></svg>
                    </a>
                </section>

            </div>
        )
    }
}

export default ShopInformation;