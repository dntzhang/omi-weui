import Omi from 'omi'
import classNames from 'classnames'

export default class CellsTitle extends Omi.Component{
    constructor(data){
        super(data)
    }
    render(){
        const {classname} = this.data;
        const cls = classNames({
            'weui-cells__title': true,
            [classname]: classname
        })
        return `
            <div class="${cls}">{{title}}</div>
        `
    }
}