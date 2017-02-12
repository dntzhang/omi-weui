import Omi from 'omi/dist/omi'

export default class Slider extends Omi.Component{
    constructor(data) {
        data = Object.assign({
            value: 0
        },data);
        super(data);
        this.isPressDown = false;
    }

    installed(){
        this.width = parseInt(window.getComputedStyle(this.refs.slider).width);
        this.left = this.refs.slider.getBoundingClientRect().left;
        this.refs.handler.addEventListener('touchstart',this._start.bind(this),false);
        window.addEventListener('touchmove',this._move.bind(this),false);
        window.addEventListener('touchend',this._end.bind(this),false);
        window.addEventListener('touchcancel',this._end.bind(this),false);
    }

    _start(){
        this.isPressDown = true;
    }

    _move(evt){
        if(this.isPressDown) {
            this.currentX = evt.touches[0].pageX;
            let p =parseInt( (this.currentX - this.left) / this.width * 100);
            if (p < 0) p = 0;
            if (p > 100)  p = 100;
            this.refs.handler.style.left = p + "%";
            this.refs.sliderValue.innerHTML = p ;
            this.refs.track.style.width = p + "%";
            evt.preventDefault();
        }
    }

    _end(){
        this.isPressDown = false;
    }

    render(){
        return `
        <div class="weui-slider-box">
            <div class="weui-slider" ref="slider">
                <div id="sliderInner" class="weui-slider__inner">
                    <div ref="track"  style="width:${this.data.value}%;" class="weui-slider__track"></div>
                    <div ref="handler" style="left:${this.data.value}%;" class="weui-slider__handler"></div>
                </div>
            </div>
            <div ref="sliderValue" class="weui-slider-box__value"> ${this.data.value}</div>
        </div>
        `;
    }
}