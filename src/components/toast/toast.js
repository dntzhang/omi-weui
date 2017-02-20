import Omi from 'omi/dist/omi';
import classNames from 'classnames';
import Icon from '../icon/index';
import Mask from '../mask/index';

Omi.makeHTML('Icon', Icon);
Omi.makeHTML('Mask', Mask);

export default class Toast extends Omi.Component{
    constructor(data){
        super(data);
        this.data = Object.assign(data, {
            icon: data.icon || 'toast',
            show: data.show || false
        })
    }
    install(){
        this.data = Object.assign(this.data, {
            transparent: true
        })
    }
    render(){
        const { classname, icon, iconSize, show } = this.data;
        const cls = classNames({
            'weui-toast': true,
            [classname]: classname
        })
        return `
             <div style="display: ${ show ? 'block' : 'none'}">
                <Mask data="data.transparent"/>
                <div class=${cls} >
                    <Icon data-value=${icon} data-size=${iconSize} data-classname="weui-icon_toast"/>
                    <p class="weui-toast_content">{{{content}}}</p>
                </div>
            </div>
        `
    }
}