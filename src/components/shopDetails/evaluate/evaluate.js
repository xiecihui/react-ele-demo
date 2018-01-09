import React,{Component} from 'react';
import EvaluateTab from './evaluateTab';
import Star from '../../star/star';
import './evaluate.less';

class Evaluate extends Component{
    constructor(){
        super()
        this.state={
            current:{
                index:0,
                /*当前数据*/
                data:[],
                /*是否第一次加载*/
                flag:false
            }
        }
    }
    componentDidMount(){
        let name='全部';
        /*第一次数据获取*/
        this._getData(name,0,(json)=>{
            this._saveData[name] = {data:json}
            this.setState({
                current:{
                    index:0,
                    data:json
                }
            })

        })
        /*顶部吸附*/
        this._scrollTogether=this._scrollTogether.bind(this);
        this.body.addEventListener('scroll',this._scrollTogether);
    }
    componentWillUnmount(){
        this.body.removeEventListener('scroll',this._scrollTogether)
    }

    /**存储四个标签的数据，无限加载的flag
     * 格式为
     * this.name:{
     *  page:
     *  data:
     * }
     *
     *
     */
    _scrollTogether(){
        /*联动*/
        let headerHeight = document.querySelector('.shoplist_header').offsetHeight;
        //scrollTop方法返回或设置匹配元素的滚动条的垂直位置
        this.body.scrollTop>headerHeight?
            (document.querySelector('.shopDetails_wrap').scrollTop = headerHeight):
            (document.querySelector('.shopDetails_wrap').scrollTop = this.body.scrollTop)
        /*数据获取*/
        let name=this.props.tags[this.state.current.index].name;
        let page=this._saveData[name].page?this._saveData[name].page:1;
        if(this.body.scrollHeight-this.body.scrollTop<this.body.clientHeight+10){
            this._scrollGetData(name,page);
        }

    }

     _saveData(){this.flag = false}
    handleClickTags(index,name){
        /**标签跳转*/
        if(index === this.state.current.index){
            return;
        }else{
            /*如果有值，避免重复请求*/
            if(this._saveData[name]){
                this.setState({
                    current:{
                        index:index,
                        data:this._saveData[name].data
                    }
                })
            }else{
                /*第一页*/
                this._getData(name,0,(json)=>{
                    this._saveData[name] = {data:json,page:0};
                    this.setState({
                        current:{
                            index:index,
                            data:json
                        }
                    })

                 })
            }
        }
    }
    /*加载更多*/
    _scrollGetData(name,page){
        if(this._saveData.flag){
            /*正在请求*/
            return;
        }
        this._saveData.flag=true;
        if(this._scrollGetData.timer){ clearTimeout(this._scrollGetData.timer)}
        this._scrollGetData.timer=setTimeout(()=>{
            this._getData(name,page,(json)=>{
                this._saveData[name].data=[...this._saveData[name].data,...json];
                this.setState({
                    current:{
                        index:this.state.current.index,
                        data:this._saveData[name].data
                    }
                });
                this._saveData[name].page++;
                this._saveData.flag=false;
            })

        },300)
    }

    _getData(name,page,fun){
        fetch(`/api/ugc/v2/restaurants/${this.props.id}/ratings?has_content=true&tag_name=${name}&offset=${page}0&limit=10`)
            .then(response=>{return response.json()})
            .then(dataJson=>{
                fun(dataJson)
            });
    }
    _formatImg(src){
        let png=/png/g.test(src);
        src=`${src}${png?'.png':'.jpeg'}`;
        let imgValue=src.split('');
        imgValue.splice(3,0,'/');
        imgValue.splice(1,0,'/');
        return imgValue.join('');
    }
    render(){
        let tags = this.props.tags.map((value,index)=>{
            return <EvaluateTab
                handleClickTags = {this.handleClickTags.bind(this)}
                data={value}
                currentIndex={this.state.current.index}
                key={index}
                index={index}
            />
        })

        let mainDOM = this.state.current.data.map((value,index)=>{
            return(
                <li key = {index} className="evaluate_body_li">
                    <div className="evaluate_body_li_wrap">
                        <img className="evaluate_body_li_userImg" src="https://fuss10.elemecdn.com/c/f5/d0b0f2fc83f3ac3e4a0cfae891256png.png?imageMogr/format/webp/thumbnail/!60x60r/gravity/Center/crop/60x60/" alt={value.username}/>
                        <div className="evaluate_body_li_user">
                            <h3>{value.username}</h3>
                            <small>{value.rated_at}</small>
                        </div>
                        <Star rating={value.rating_star}/>
                        <ul className="evaluate_body_li_photo">
                            {value.item_ratings.map((item,index)=>{
                                if(item.image_hash.length===0){
                                    return null
                                }
                                return (
                                    <li key ={index}>
                                        <img  src={`//fuss10.elemecdn.com/${this._formatImg(item.image_hash)}?imageMogr/format/webp/`}  alt={item.food_name}/>

                                    </li>
                                )

                            })}

                        </ul>
                        <div>
                            <ul className="evaluate_body_li_word">
                                {value.item_ratings.map((value,index)=>{
                                    return(<li key={index}>{value.food_name}</li>)
                                })}

                            </ul>
                        </div>



                    </div>

                </li>
            )
        })

        return (
            <div className='evaluate_box' ref={(body)=>{this.body = body}}>
                <section className="evaluate_title">
                    <div className="evaluate_title_num">
                        <strong className="evaluate_title_hint">
                            {Number(this.props.pj.overall_score).toFixed(1)}
                        </strong>
                        <p className="evaluate_title_1">综合评价</p>
                        <p className="evaluate_title_2">高于周边商家{Number(this.props.pj.compare_rating *100).toFixed(1)}%</p>
                    </div>
                    <div className="evaluate_title_score">
                        <div className="evaluate_score_wrap">
                            <span>服务态度</span>
                            <span className="evaluate_score_star">
                                <Star rating={Number(this.props.pj.service_score).toFixed(1)}/>
                                <span className="evaluate_star_num">{Number(this.props.pj.service_score).toFixed(1)}</span>
                            </span>
                        </div>
                        <div className="evaluate_score_wrap">
                            <span>菜品评价</span>
                            <span className="evaluate_score_star">
                                <Star rating={Number(this.props.pj.food_score).toFixed(1)}/>
                                <span className="evaluate_star_num">{Number(this.props.pj.food_score).toFixed(1)}</span>
                            </span>
                        </div>
                        <div className="evaluate_score_wrap">
                            <span>送达时间</span>
                            <span className="evaluate_time">{this.props.pj.deliver_time}分钟</span>
                        </div>

                    </div>


                </section>
                <section className="evaluate_body">
                    <div className="evaluate_tab_box">
                        <ul>
                            {tags}
                        </ul>
                    </div>
                    <ul>
                        {mainDOM}
                    </ul>
                </section>
            </div>
        )
    }
}

export default Evaluate;