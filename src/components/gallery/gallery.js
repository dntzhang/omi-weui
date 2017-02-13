import Omi from 'omi/dist/omi';
import classNames from 'classnames';

export default class Gallery extends Omi.Component {
    constructor(data) {
        super(data);
        data = Object.assign(data, {
            show: data.show || undefined,
            src: data.src || ''
        })
    }
    render() {
        const { classname, show, src } = this.data;
        const cls = classNames({
            'weui-gallery': true,
            [classname]: classname
        });
        return `
            <div class="${cls}" style="display: ${show? 'block' : 'none'}">
                 <span class="weui-gallery__img" style="background-image: url(${src})"></span>
                 <div class="weui-gallery__opr">{{content}}</div>      
            </div>
        `
    }
}