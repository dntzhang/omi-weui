import Omi from 'omi/dist/omi';
import classNames from 'classnames';

export default class Footer extends Omi.Component {
    constructor(data) {
        super(data)

    }
    render() {
        const { className } = this.data;
        const cls = classNames({
            'weui-footer': true,
            [className]: className
        });
        return `
            <div class="${cls}">{{{content}}}</div>
        `
    }
}