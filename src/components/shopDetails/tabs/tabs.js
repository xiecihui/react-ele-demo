import React,{Component} from 'react';
import './tabs.less';
class TabsLi extends Component{
    constructor(){
        super()
        this.state = {
            current:0
        }
    }
    handClick(index){
        this.setState({
            current:index
        })
    }

    render(){

        return (
            <div style={{"height":"100%"}}>
                <div className="tabs_title_box">
                    {this.props.data.map((value,index)=>
                        <div className={`tabs_title
                         ${this.state.current === index ?
                            'active' : ''}`}
                             onClick={this.handClick.bind(this,index)}
                             key={index}
                        >
                            <span className="tabs_title_name">{value.title}</span>
                        </div>

                    )}

                </div>
                {/*下面是主题显示部分*/}
                <div className="tabs_main_box">
                    {React.Children.map(this.props.children,(child)=>{
                        return <div className="tabs_main_wrap"
                                    style={{display:`${Number(child.key)===
                                    Number(this.state.current)?'block':'none'}`}}
                        >
                            {child}
                        </div>
                    })}

                </div>


            </div>
        )
    }
}

export default TabsLi;