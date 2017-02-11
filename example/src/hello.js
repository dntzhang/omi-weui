import Omi from 'omi/dist/omi'
import Button from '../../src/components/button'
import List from '../../src/components/list'

Omi.makeHTML('Button', Button);
Omi.makeHTML('List', List);

export default class Hello extends Omi.Component {
    constructor(data) {
        super(data);
        this.listData = {
            items:[
                {name:'item1'},
                {name:'item2'}]
        }
    }

    style () {
        return  `
            h1{
                cursor:pointer;
            }
            .wrap{
                padding: 0 15px;
                margin: 0 auto;
            }
         `;
    }

    handleClick(target, evt){
        alert(target.innerHTML);
    }

    render() {
        return  `
            <div>
                <div class="wrap">
                    <Button data-text="测试按钮" data-href="javascript:;"  data-aaa="test"/>
                    <h1 onclick="handleClick(this, event)">Hello ,{{name}}!</h1>
                </div>
                <List data="listData" />
            </div>
        `;
    }
}

