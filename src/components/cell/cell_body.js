import Omi from 'omi/dist/omi'
import classNames from 'classnames'

export default class CellBody extends Omi.Compoent{
    constructor(data){
        super(data);
        this.data = Object.assign({
            primary: data.primary || false
        }, data)
    }
    render(){
        const {classname, primary} = this.data;
        const cls = classNames({
            'weui-cell__bd': true,
            'weui-cell_primary': primary,
            [classname]: classname
        });
        return `
            <div class="${cls}">{{{content}}}</div>
        `
    }
}