import Omi from 'omi/dist/omi';
import classNames from 'classnames';

export default class Badge extends Omi.Component {
    constructor(data) {
        super (data)
    }
    style () {
        return `
            .default{}
            .header{
                position: absolute;
                top: -.4em;
                right: -.4em;
            }
            .body{
                margin-left: 5px;
            }
            .footer{
                margin-left: 5px;
                margin-right: 5px;
            }
        `
    }
    render() {
        const { className, dot, preset } = this.data;
        const cls = classNames({
            'weui-badge': true,
            'weui-badge_dot': dot,
            [preset]: preset,
            [className]: className
        });
        return `
            <span class="${cls}">{{content}}</span>
        `
    }
}
