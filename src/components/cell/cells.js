import Omi from 'omi/dist/omi'
import classNames from 'classnames';



export default class Cells extends Omi.Component{
    constructor(data){
        super(data)
    }
    render(){
        const {classname, items} = this.data;
        const cls = classNames({
            'weui-cell': true,
            [classname]: classname
        })
        return `
            <div class="weui-cells">
                <slot></slot>
            </div>
        `
    }
}