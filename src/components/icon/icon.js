import Omi from 'omi/dist/omi'
import classNames from 'classnames'

export default class Icon extends Omi.Component {
    constructor(data) {
        super(data);
        this.data = Object.assign(data, {
            value: data.value || 'success',
            size: data.size || 'small'
        })
    }
    render(){
        const { loading, size, primary, value, classname} = this.data;

        const cls = classNames({
            ['weui-icon-' + value]: value != 'loading',
            'weui-icon_msg': size === 'large' && !primary,
            'weui-icon_msg-primary': size === 'large' && primary,
            'weui-loading': value == 'loading',
            [classname]: classname
        });
        return `
            <i class="${cls}"></i>
        `
    }
}