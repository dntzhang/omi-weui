import Omi from 'omi/dist/omi';
import classNames from 'classnames';

export default class Label extends Omi.Component {
    constructor(data) {
        super(data)
    }
    render(){
        const { className } = this.data;
        const cls = classNames({
            'weui-label': true,
            [className]: className
        });
        return `
            <div>
                <label class="${cls}" />   
            </div>
        `
    }
}
