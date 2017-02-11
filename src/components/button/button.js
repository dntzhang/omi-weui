import Omi from 'omi/dist/omi'
import classNames from 'classnames';

export default class Button extends Omi.Component{
    constructor(data) {
        super(data);
    }
    render(){
        return `
            <a href="javascript:;" class="weui-btn weui-btn_primary">{{text}}{{{html}}}</a>
        `;
    }
}
