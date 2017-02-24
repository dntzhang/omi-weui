import Omi from 'omi/dist/omi'
import classNames from 'classnames';

export default class Cells extends Omi.Component{
    constructor(data){
        super(data)
    }
    render(){
        const {classname} = this.data;
        const cls = classNames({
            'weui-cells': true,
            [classname]: classname
        })
        return `
            <div class="${cls}">{{{content}}}</div>
        `
    }
}