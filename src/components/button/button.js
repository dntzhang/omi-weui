import Omi from 'omi/dist/omi'
import classNames from 'classnames';

export default class Button extends Omi.Component{
    constructor(data) {
        super(data);
        data = Object.assign(
            data,
            {
                disabled: data.disabled || false,
                type: data.type || 'primary',
                size: data.size || 'normal'
            }
        );
    }

    handleClick(){
        this.data.onClick&&this.data.onClick();
    }

    render(){
        const { classname, size, type, plain,　...other} = this.data;
        const Component = this.data.href || type == 'vcode' ? 'a' : 'button';
        const href = this.data.href ? `href="${this.data.href}"` : null;
        const cls = this.data.type == 'vcode' ? classNames('weui-vcode-btn', {[classname]: classname}) : classNames({
            'weui-btn': true,
            'weui-btn_mini': size === 'small',
            'weui-btn_primary': type === 'primary' && !plain,
            'weui-btn_default': type === 'default' && !plain,
            'weui-btn_warn': type === 'warn',
            'weui-btn_plain-primary': type === 'primary' && plain,
            'weui-btn_plain-default': type === 'default' && plain,
            'weui-btn_disabled': this.data.disabled && !plain,
            'weui-btn_plain-disabled': this.data.disabled && plain,
            [classname]: classname
        });
        return `
            <${Component} ${href} onclick="handleClick()" class="${cls}">{{text}}{{{children}}}</${Component}>
        `;
    }
}
