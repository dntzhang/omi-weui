import Omi from 'omi/dist/omi';
import classNames from 'classnames';
import Icon from '../icon/index'

Omi.makeHTML('Icon', Icon);

export default class LoadMore extends Omi.Component{
    constructor(data){
        super(data)
    }
    render(){
        const { classname, showLine, showDot } = this.data;
        const cls = classNames({
            'weui-loadmore': true,
            'weui-loadmore_line': showLine,
            'weui-loadmore_dot': showDot,
            [classname]: classname
        });
        return `
            <div class="${cls}">
               {{#loading}}<Icon data-value="loading" />{{/loading}}
               <span class="weui-loadmore__tips">
                  {{{content}}}             
               </span>
            </div>
        `
    }
}