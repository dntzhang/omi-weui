import Omi from 'omi'
import { List } from '../../../dist/omi-weui'
import footer from '../common/footer'

Omi.makeHTML('WxList', List);

export default class ListComponent extends Omi.Component{
    constructor(data){
        super(data);
        this.list1 = {
            title: "带说明的列表项",
            items: [{
                title: "标题文字",
                value: "说明文字"
            },{
                title: "标题文字",
                value: "说明文字",
                swipe: true
            }]
        }
        this.list2 = {
            title: "带图标、说明的列表项",
            items: [{
                imageUrl: `${require('../assets/icon-img.png')}`,
                title: "标题文字",
                value: "说明文字"
            },{
                imageUrl: `${require('../assets/icon-img.png')}`,
                title: "标题文字",
                value: "说明文字",
                swipe: true
            }]
        }
        this.list3 = {
            title: "带跳转的列表项",
            items: [{
                title: "cell standard",
                link: "javascript:;"
            },{
                title: "cell standard",
                link: "https://github.com/AlloyTeam/omi"
            }]
        }
        this.list4 = {
            title: "带说明、跳转的列表项",
            items: [{
                title: "cell standard",
                value: "说明文字",
                link: "javascript:;"
            },{
                title: "cell standard",
                value: "说明文字",
                link: "javascript:;"
            }]
        }
        this.list5 = {
            title: "带图标、说明、跳转的列表项",
            items: [{
                imageUrl: `${require('../assets/icon-img.png')}`,
                title: "cell standard",
                value: "说明文字",
                link: "javascript:;"
            },{
                imageUrl: `${require('../assets/icon-img.png')}`,
                title: "cell standard",
                value: "说明文字",
                link: "javascript:;"
            }]
        }
    }
    render(){
        return `
            <div class="page list js_show">
                <div class="page__hd">
                    <h1 class="page__title">List</h1>
                    <p class="page__desc">列表</p>
                </div>
                <div class="page__bd">
                    <WxList data="list1"/>
                    <WxList data="list2"/>
                    <WxList data="list3"/>
                    <WxList data="list4"/>
                    <WxList data="list5"/>
                </div>
              ${footer}
            </div>
        `
    }
}