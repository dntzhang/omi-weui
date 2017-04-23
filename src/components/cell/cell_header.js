import Omi from 'omi'
import classNames from 'classnames'

export default class CellHeader extends Omi.Component{
    constructor(data){
        super(data)
    }
    render(){
        const {classname, primary} = this.data;
        const cls = classNames({
            'weui-cell__hd': true,
            'weui-cell_primary': !!primary,
            [classname]: classname
        });
        return `
            <div class="${cls}">
                  <slot></slot>
            </div>
        `
    }
}