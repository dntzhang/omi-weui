import Omi from 'omi/dist/omi'
import classNames from 'classnames'

export default class Icon extends Omi.Component {
    constructor(data) {
        super(data);
        data = Object.assign(data, {
            value: data.value || 'success',
            size: data.size || 'small'
        })
    }
    render(){
        const { loading, size, primary, value, className} = this.data;
        const cls = classNames({
            ['weui-icon-' + value]: value != 'loading',
            'weui-icon_msg': size === 'large' && !primary,
            'weui-icon_msg-primary': size === 'large' && primary,
            'weui-loading': value == 'loading',
            [className]: className
        });
        return `
            <i class="${cls}"></i>
        `
    }
}