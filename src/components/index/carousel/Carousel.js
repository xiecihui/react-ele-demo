import React, {Component} from 'react';
import CarouselNav from './CarouselNav';
// import ButtonGroup from './ButtonGroup';
import CarouselImage from './CarouselImage';
import {bannerData} from '../../../data/data';
import {splitArr} from '../../../data/shuffle.js';
import './carousel.less';

/**
 * 轮播图组件
 */
export default class Carousel extends Component {
    constructor (...args) {
        super(...args);
        /* 存放图片地址及当前展示的图片索引 */
        this.state = {
            currentIndex: 0,
            imageSrc:[]

        };
        /* 定时器引用 */
        this.timer = null;

        /* 绑定事件中this */
        this.prevImage = this.prevImage.bind(this);
        this.nextImage = this.nextImage.bind(this);
        this.selectImage = this.selectImage.bind(this);
        this._updateIndex = this._updateIndex.bind(this);
    }

    /**
     * 组件加载完毕后，图片自动播放
     */
    componentWillMount(){
        let imageSrc = splitArr(bannerData[0].entries,8)
        this.setState({
            imageSrc:imageSrc

        })
    }
    componentDidMount() {
        var len = this.state.imageSrc.length;
        this.timer = setInterval(
            () => {
                this.setState({
                    currentIndex: (this.state.currentIndex + 1) % len
                });
            },
            5000
        );
    }

    /**
     * 组件卸载时，清理定时器
     */
    componentWillUnmount() {
        this.timer && clearInterval(this.timer);
    }

    /**
     * 展示前一张图片
     */
    prevImage(){
        var currentIndex = this.state.currentIndex;
        var len = this.state.imageSrc.length;
        /* 计算下一张图片索引 */
        currentIndex = (currentIndex - 1) >= 0 ?
            (currentIndex - 1) % len : len - 1;
        /* 调用更新函数，更新当前显示的图片，并刷新定时器 */
        this._updateIndex(currentIndex, len);
    }

    /**
     * 展示下一张图片
     */
    nextImage(){
        var currentIndex = this.state.currentIndex;
        var len = this.state.imageSrc.length;
        /* 计算下一张图片索引 */
        currentIndex = (currentIndex + 1) % len;
        /* 调用更新函数，更新当前显示的图片，并刷新定时器 */
        this._updateIndex(currentIndex, len);
    }

    /**
     * 展示选中索引图片
     * @param  {number} index 索引值
     */
    selectImage(index) {
        var len = this.state.imageSrc.length;
        this._updateIndex(index, len);
    }

    /**
     * 工具函数，用于更新state，以及刷新定时器
     * @param  {number} index 将要展示图片的索引
     * @param  {number} len   展示图片总张数
     * @param  {number} delay 动画持续时间
     */
    _updateIndex(index, len, delay=4000) {
        /* 清除定时器 */
        this.timer && clearInterval(this.timer);
        /* 设置当前展示图片 */
        this.setState({
            currentIndex: index
        });
        /* 打开定时器 */
        this.timer = setInterval(
            () => {
                var currentIndex = this.state.currentIndex;
                this.setState({
                    currentIndex: (currentIndex + 1) % len
                });
            },
            delay
        );
    }

    render() {
        return (
            <div className="carousel">
                <CarouselImage
                    imageSrc={this.state.imageSrc}
                    currentIndex={this.state.currentIndex}
                    enterDelay={500}
                    leaveDelay={500}
                    component={"li"}
                    name={"carousel-image-item"}
                />
                <CarouselNav
                    carouselNavItems={this.state.imageSrc}
                    currentIndex={this.state.currentIndex}
                    selectImage={this.selectImage}
                />
                {/*<ButtonGroup*/}
                    {/*prevImage={this.prevImage}*/}
                    {/*nextImage={this.nextImage}*/}
                {/*/>*/}
            </div>
        );
    }
}
