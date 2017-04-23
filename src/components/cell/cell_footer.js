import Omi from 'omi'
import classNames from 'classnames'

export default class CellFooter extends Omi.Component{
    constructor(data){
        super(data)
        this.data = Object.assign({
            primary: data.primay || false
        })
    }
    render(){
        const {classname, primary} = this.data;
        const cls = classNames({
            'weui-cell__ft': true,
            'weui-cell_primary': primary,
            [classname]: classname
        });
        return `
            <div class="${cls}">
                <slot></slot>
            </div>
        `
    }
}