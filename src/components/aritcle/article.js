import Omi from 'omi/dist/omi'
import classNames from 'classnames';

export default class Article extends Omi.Component {
    constructor(data){
        super(data)
    }
    render(){
        const { classname } = this.data;
        const cls = classNames({
            'weui-article': true,
            [classname]: classname
        });
        return `
            <article class="${cls}">
                {{{content}}}
            </article>
        `
    }
};
