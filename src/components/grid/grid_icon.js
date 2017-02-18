import Omi from 'omi/dist/omi';
import classNames from 'classnames';

export default class GridIcon extends Omi.Component {
    constructor(data) {
        super(data);
    }
    render() {
        const { classname } = this.data;
        const cls = classNames({
            'weui-grid__icon': true,
        }, classname);
        return `
            <div class="${cls}">{{{content}}}</div>
        `
    }
}