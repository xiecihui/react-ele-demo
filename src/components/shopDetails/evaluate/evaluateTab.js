import React,{Component} from 'react';


class EvaluateTab extends Component{
    handleClick(){
        this.props.handleClickTags(this.props.index,this.props.data.name)
    }
    render(){

        return (
            <li
                onClick={this.handleClick.bind(this)}
                className={"evaluateTab_title "+`${this.props.currentIndex ===
                this.props.index?"rating_tags_on ":""}${this.props.data.unsatisfied?"rating_tags_no":""}`}
            >
                {this.props.data.name}({this.props.data.count})
            </li>
        )
    }
}

export default EvaluateTab;