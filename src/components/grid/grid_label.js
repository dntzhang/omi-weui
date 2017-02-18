import Omi from 'omi/dist/omi';
import classNames from 'classnames';

export default class GridLabel extends Omi.Component {
    constructor(data) {
        super(data)
    }
    render() {
        const { classname } = this.data;
        const cls = classNames({
            'weui-grid__label': true
        }, classname);
        return `
            <p class="${cls}">{{content}}</p>
        `
    }
}