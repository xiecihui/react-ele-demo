import React,{Component} from 'react';
import TabsLi from '../../../components/shopDetails/tabs/tabs';
import CommoditySmart from '../commodity/commodity';
import EvaluateSmart from '../evaluate/evaluate';
import ShopInformationSmart from '../shopInformation/shopInformation';

class TabsSmart extends Component{
    constructor(){
        super()
        this.state = {
            current:false
        }
    }
    handClick(){
        this.setState({
            current:true
        })
    }
    render(){
        const data = [
            {
                title:'商品',
                num:0
            },
            {
                title:'评价',
                num:2
            },
            {
                title:'店铺',
                num:3
            }
        ]
        return (
            <TabsLi data={data} >
                <CommoditySmart
                    key={0} id={this.props.id}
                    data = {this.props.data}
                />
                <EvaluateSmart key={1} id={this.props.id}/>
                <ShopInformationSmart key={2} id={this.props.id}/>
            </TabsLi>
        )
    }
}

export default TabsSmart;