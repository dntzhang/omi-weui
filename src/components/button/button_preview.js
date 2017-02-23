import Omi from 'omi/dist/omi'
import classNames from 'classnames'

export default class PreviewButton extends Omi.Componet{
    constructor(data){
        super(data)
        this.data = Object.assign(data, {
            primary: false
        })
    }
    render(){
        const {classname, primary} = this.data;
        const cls = classNames({
            'weui-form-preview__btn': true,
            'weui-form-preview__btn_default': !primary,
            'weui-form-preview__btn_primary': primary,
            [classname]: classname
        });
        return `
            <a class=${cls}>
                 {{{content}}}     
            </a>
        `
    }
}