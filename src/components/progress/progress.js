import Omi from 'omi/dist/omi'

export default class Progress extends Omi.Component{
    constructor(data) {
        super(data);
    }

    render(){
        return `
        <div class="weui-progress">
            <div class="weui-progress__bar">
                <div class="weui-progress__inner-bar js_progress" style="width: ${this.data.percent}%;"></div>
            </div>
            <a href="javascript:;" class="weui-progress__opr">
                <i class="weui-icon-cancel"></i>
            </a>
        </div>
        `;
    }
}