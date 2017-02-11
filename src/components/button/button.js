import Omi from 'omi/dist/omi'
import classNames from 'classnames';

export default class Button extends Omi.Component{
    constructor(data) {
        super(data);
    }
    install(){
        this.data = Object.assign({},
            this.data,
            {
                disabled: this.data.disabled || false,
                type: this.data.type || 'primary',
                size: this.data.size || 'normal',
            });
    }
    render(){
        const { className, size, type, plain } = this.data;
        const Component = this.data.href || type == 'vcode' ? 'a' : 'button';
        const href = this.data.href ? `href="${this.data.href}"` : null;
        const cls = this.data.type == 'vcode' ? classNames('weui-vcode-btn', {[className]: className}) : classNames({
            'weui-btn': true,
            'weui-btn_mini': size === 'small',
            'weui-btn_primary': type === 'primary' && !plain,
            'weui-btn_default': type === 'default' && !plain,
            'weui-btn_warn': type === 'warn',
            'weui-btn_plain-primary': type === 'primary' && plain,
            'weui-btn_plain-default': type === 'default' && plain,
            'weui-btn_disabled': this.data.disabled && !plain,
            'weui-btn_plain-disabled': this.data.disabled && plain,
            [className]: className
        });
        return `
            <${Component} ${href} class="${cls}">{{text}}{{{children}}}</${Component}>
        `;
    }
}
