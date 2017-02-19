import Omi from 'omi/dist/omi';
import classNames from 'classnames';

export default class Mask extends Omi.Component{
    constructor(data) {
        super(data);
        this.data = Object.assign(data, {
            transparent: false
        })
    }
    render() {
        const { transparent, classname } = this.data;
        const cls = classNames({
            'weui-mask': !transparent,
            'weui-mask_transparent': transparent
        }, classname);
        return `
            <div class="${cls}"></div>
        `
    }
}