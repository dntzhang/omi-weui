import Omi from 'omi/dist/omi';
import classNames from 'classnames';

export default class FooterLinks extends Omi.Component {
    constructor(data) {
        super(data)
    }
    render() {
        const { classname } = this.data;
        const cls = classNames({
            'weui-footer__links': true,
            [classname]: classname
        });
        return `
            <div class="${cls}">{{{content}}}</div>
        `
    }
}
