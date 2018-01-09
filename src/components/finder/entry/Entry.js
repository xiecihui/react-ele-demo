import React, { Component } from 'react';
import './Entry.less';


export default class Entry extends Component{
    /*图片格式化*/
    _formatImg(src){
        let png = /png/g.test(src);
        src=`${src}${png?'.png':'.jpeg'}`;
        let imgValue=src.split('');
        imgValue.splice(3,0,'/');
        imgValue.splice(1,0,'/');
        return imgValue.join('');
    }

    render(){
        let listDOM = this.props.data[1].map((value,index)=>{
            let imgSrc = this._formatImg(value.main_pic_hash);
            return(<a href="/" className="entry_part1_item" key={index}>
                       <div className="entry_part1_word" >
                           <h3 style={{color:`${value.title_color}`}}>{value.title}</h3>
                           <p>{value.subtitle}</p>
                       </div>
                       <img
                           className="entry_part1_img"
                           src={`//fuss10.elemecdn.com/${imgSrc}?imageMogr/format/webp/`}
                           alt={value.subtitle}
                        />
                  </a>)
        })
        let listDOM2 = this.props.data[2].map((value,index)=>{
            let imgSrc = this._formatImg(value.sub_pic_hash);
            return(
                <div className="entry_part2 mt20" key={index}>
                    <a href='//h5.ele.me/freelunch/#/' className="entry_part2_item">
                        <img
                            src={`//fuss10.elemecdn.com/${imgSrc}?imageMogr/format/webp/`}
                            alt={value.subtitle}
                        />
                    </a>

                </div>
            )
        })
        return(
            <section className="entry_box mb20">
                <div className="entry_part1">
                    {listDOM}

                </div>
                {listDOM2}
            </section>
        )
    }
}

