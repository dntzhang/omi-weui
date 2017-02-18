import Omi from 'omi/dist/omi';
import classNames from 'classnames';

export default class Toptips extends Omi.Component {
    constructor(data){
        super(data);
        this.data = Object.assign(data, {
            show: data.show || false,
            type: data.type || 'default'
        })
    }
    style() {
        return `
            .weui-toptips_default{
                background-color: #B2B2B2;
            }
            .weui-toptips_info{
                background-color: #586C94;
            }
            .weui-toptips_primary{
                background-color: #1AAD19;
            }
        `
    }
    render(){
        const { classname, type, show } = this.data;
        const cls = classNames({
           'weui-toptips': true,
            [`weui-toptips_${type}`]: true,
            [classname]: classname
        });
        return `
            <div class="${cls}" style="display:${show == 'true' ? 'block': 'none'}">
                {{{content}}}
            </div>
        `
    }
}