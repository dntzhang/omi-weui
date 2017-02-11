import Omi from 'omi/dist/omi'
import Button from '../../src/components/button'
import List from '../../src/components/list'
import Progress from '../../src/components/progress'

Omi.makeHTML('Button', Button);
Omi.makeHTML('List', List);
Omi.makeHTML('Progress', Progress);

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
                color:black;
            }
         `;
    }

    handleClick(target, evt){
        alert(target.innerHTML);
    }

    render() {
        return  `
            <div class="class">
                <h1 style="text-align: center;" onclick="handleClick(this, event)">{{name}}</h1>
                <div class="page__hd">
                    <h1 class="page__title">Button</h1>
                    <p class="page__desc">按钮</p>
                </div>
                <div class="page__bd page__bd_spacing">
                    <Button data-text="测试按钮" data-href="javascript:;"  data-aaa="test"/>
                </div>
                <div class="page__hd">
                    <h1 class="page__title">List</h1>
                    <p class="page__desc">列表</p>
                </div>
                <div class="page__bd page__bd_spacing">
                    <List data="listData" />
                </div>
                <div class="page__hd">
                    <h1 class="page__title">Progress</h1>
                    <p class="page__desc">进度条</p>
                </div>
                <div class="page__bd page__bd_spacing">
                    <Progress data-percent="50" />
                </div>
            </div>
        `;
    }
}

