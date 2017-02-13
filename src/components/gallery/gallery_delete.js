import Omi from 'omi/dist/omi';
import classNames from 'classnames';
import Icon from '../icon';

Omi.makeHTML('Icon', Icon);

export default class GalleryDelete extends Omi.Component {
    constructor(data) {
        super(data)
    }
    render () {
        const { classname } = this.data;
        const cls = classNames({
            'weui-gallery__del': true,
            [classname]: classname
        });
        return `
            <a class="${cls}">
                <Icon data-value="delete" data-classname="weui-icon_gallery-delete"/>
            </a>
        `
    }
}