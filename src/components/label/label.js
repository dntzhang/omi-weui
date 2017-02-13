import Omi from 'omi/dist/omi';
import classNames from 'classnames';

export default class Label extends Omi.Component {
    constructor(data) {
        super(data)
    }
    render(){
        const { classname } = this.data;
        const cls = classNames({
            'weui-label': true,
            [classname]: classname
        });
        return `
            <div>
                <label class="${cls}" />   
            </div>
        `
    }
}
