import React from 'react';
import {PropTypes} from 'prop-types';
import CSSTransitionGroup from 'react-addons-css-transition-group';
/* 定义参数类型 */
const propTypes = {
    imageSrc: PropTypes.array.isRequired,
    currentIndex: PropTypes.number.isRequired,
    enterDelay: PropTypes.number.isRequired,
    leaveDelay: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    component: PropTypes.string.isRequired
}

/* 轮播图片组件 */
function CarouselImage(props) {
    let {imageSrc, currentIndex, enterDelay, leaveDelay, name, component} = props;
    let swipeList;
    swipeList = imageSrc[currentIndex].map((item,index)=>{
    let imgSrc = item.image_hash.split("");
    imgSrc.splice(3,0,'/');
    imgSrc.splice(1,0,'/');
    imgSrc = imgSrc.join('');
    return(
        <a key={"image"+index} href={item.link}>
            <img  src={`//fuss10.elemecdn.com/${imgSrc}.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/`} alt={item.description}/>
            <p>{item.name}</p>
        </a>

      )
   })

    return (
        <ul className="carousel-image">
            <CSSTransitionGroup
                component={component}
                transitionName={name}
                transitionEnterTimeout={enterDelay}
                transitionLeaveTimeout={leaveDelay}
                className={name}>
                <div
                    key={currentIndex}
                    className="swipe_box"
                >
                    {swipeList}
                </div>
            </CSSTransitionGroup>
        </ul>
    );
}

CarouselImage.propTypes = propTypes;

export default CarouselImage;