import React,{Component} from 'react';
import './activityPage.less';
import ActivitiesList from '../../../activitiesList/activitiesList';
import Star from '../../../star/star';


class ActivityPage extends Component{
    handleActivity(){
        this.props.handleActivity()
    }
    render(){
        let activitiesDOM = this.props.allactivities.map((value,index)=>
            <li className="activityPage_main_list" key={index}>
                <ActivitiesList key={index} value={value}/>
            </li>

        )
        return(
       <div className="activityPage_box">
           <div className="activityPage_wrap">
               <div className="activityPage_main">
                   <h2>{this.props.name}</h2>
                   <div style={{"textAlign":"center","marginTop":'.3rem'}}>
                       <div className="activityPage_main_star">
                           <Star rating = {this.props.rating}/>
                       </div>
                   </div>
                   <h3 className="activityPage_main_title">
                       <span>优惠信息</span>
                   </h3>
                   <ul>
                       {activitiesDOM}
                   </ul>
                   <h3 className="activityPage_main_title">
                       <span>商家公告</span>
                   </h3>
                   <div>{this.props.promotion_info}</div>
               </div>
               <div className='activityPage_close' onClick={this.handleActivity.bind(this)}>
                   <svg width='100%' height='100%' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path fillRule="evenodd" d="M480.518 512L8.377 984.141c-8.853 8.853-8.777 22.871-.083 31.565 8.754 8.754 22.825 8.656 31.565-.083L512 543.482l472.141 472.141c8.853 8.853 22.871 8.777 31.565.083 8.754-8.754 8.656-22.825-.083-31.565L543.482 512l472.141-472.141c8.853-8.853 8.777-22.871.083-31.565-8.754-8.754-22.825-8.656-31.565.083L512 480.518 39.859 8.377C31.006-.476 16.988-.4 8.294 8.294c-8.754 8.754-8.656 22.825.083 31.565L480.518 512z"/></svg>
               </div>

           </div>
       </div>
        )
    }
}

export default ActivityPage;