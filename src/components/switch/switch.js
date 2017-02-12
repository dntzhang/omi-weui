import Omi from 'omi/dist/omi'

export default class Switch extends Omi.Component{
    constructor(data) {
        data = Object.assign({
            checked : ''
        },data);
        super(data);
    }

    render(){
        return `
        <label  class="weui-switch-cp">
            <input  class="weui-switch-cp__input" type="checkbox" ${this.data.checked} >
            <div class="weui-switch-cp__box"></div>
        </label>
        `;
    }
}