import Omi from 'omi/dist/omi'
import Button from '../../src/components/button'

Omi.makeHTML('Button', Button);

export default class Hello extends Omi.Component {
    constructor(data) {
        super(data);
    }
    style () {
        return  `
            h1{
                cursor:pointer;
            }
            .wrap{
                width: 200px;
                margin: 0 auto;
            }
         `;
    }
    handleClick(target, evt){
        alert(target.innerHTML);
    }
    render() {
        return  `
            <div class="wrap">
                <Button data-text="测试按钮" data-href="javascript:;" data-aaa="test"/>
                <h1 onclick="handleClick(this, event)">Hello ,{{name}}!</h1>
            </div>
        `;

    }
}

