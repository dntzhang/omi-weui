import Omi from 'omi/dist/omi'
import classNames from 'classnames'

export default  class ButtonArea extends Omi.Component {
    constructor(data){
        super(data)
        this.data = Object.assign(data, {
            direction: data.direction || 'vertical'
        })
    }
    render(){
        const { direction, classname } = this.data;
        const cls = classNames({
            'weui-btn-area': true,
            'weui-btn-area_inline': direction === 'horizontal',
            [classname]: classname
        })
        return `
            <div class="${cls}">
                 {{{content}}}          
            </div>
            `
    }
}