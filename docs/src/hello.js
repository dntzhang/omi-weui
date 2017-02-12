import Omi from 'omi/dist/omi'
import { Button, List, Progress, Article, dialog, SearchBar, Switch, Slider} from '../../src/index'


Omi.makeHTML('Button', Button);
Omi.makeHTML('List', List);
Omi.makeHTML('Progress', Progress);
Omi.makeHTML('Article', Article);
Omi.makeHTML('SearchBar', SearchBar);
Omi.makeHTML('Switch', Switch);
Omi.makeHTML('Slider', Slider);

export default class Hello extends Omi.Component {
    constructor(data) {
        super(data);
        this.listData = {
            items:[
                {name:'item1'},
                {name:'item2'},
                {name:'item3'}]
        }
        this.articleData = {
            content: `
            <h1>大标题</h1>
            <section>
                <h2 class="title">章标题</h2>
                <section>
                    <h3>1.1 节标题</h3>
                    <p>
                       Omi-Open and modern framework for building user interfaces.
                    </p>
                </section>
            </section>`
        }
    }

    style () {
        return  `
            h1{
                color:black;
            }
         `;
    }

    showDialog(){
        dialog.confirm({
            msg:'I am Omi Dialog!',
            yes:function(){
                //alert('you click yes');
            },
            no:function(){
                //alert('you click no');
            }
        })
    }

    render() {
        return  `
            <div class="class">
                <div class="page__hd">
                    <h1 class="page__title">
                        {{name}}
                    </h1>
                    <p class="page__desc">Omi 是一款开放且现代的组件化框架，完全面向对象的设计，超小的尺寸，内建积木系统。</p>
                    <p class="page__desc">WeUI 是一套同微信原生视觉体验一致的基础样式库，由微信官方设计团队为微信内网页和微信小程序量身设计，令用户的使用感知更加统一。</p>
                </div>
                <div class="page__hd">
                    <h1 class="page__title">Button</h1>
                    <p class="page__desc">按钮</p>
                </div>
                <div class="page__bd page__bd_spacing">
                    <Button data-text="测试按钮" data-href="javascript:;"  data-aaa="test"/>
                </div>
                <div class="page__hd">
                    <h1 class="page__title">弹出层</h1>
                    <p class="page__desc">Dailog</p>
                </div>
                <div class="page__bd page__bd_spacing">
                    <Button data-text="点我显示弹出层" data-size="small" onClick="showDialog" data-href="javascript:;"  data-aaa="test"/>
                </div>
                <div class="page__hd">
                    <h1 class="page__title">SearchBar</h1>
                    <p class="page__desc">搜索栏</p>
                </div>
                <div class="page__bd">
                    <SearchBar data-placeholder="我是搜索框" />
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
                <div class="page__hd">
                    <h1 class="page__title">Article</h1>
                    <p class="page__desc">文章</p>
                </div>
                <div class="page__bd page__bd_spacing">
                     <Article data="articleData"/>           
                </div>
                <div class="page__hd">
                    <h1 class="page__title">Switch</h1>
                    <p class="page__desc">开关</p>
                </div>

                <div class="weui-cells weui-cells_form">
                    <div class="weui-cell weui-cell_switch">
                        <div class="weui-cell__bd">标题文字</div>
                        <div class="weui-cell__ft">
                             <Switch data-checked="checked" />
                        </div>
                    </div>
                    <div class="weui-cell weui-cell_switch">
                        <div class="weui-cell__bd">兼容IE Edge的版本</div>
                        <div class="weui-cell__ft">
                             <Switch  />
                        </div>
                    </div>
                </div>

                <div class="page__hd">
                    <h1 class="page__title">Slider</h1>
                    <p class="page__desc">滑块</p>
                </div>
                <div class="page__bd page__bd_spacing">
                    <Slider data-value="50" />
                    <br>
                    <Slider data-value="30" />
                </div>
                <a href="https://github.com/AlloyTeam/omi" target="_blank" style="position: absolute;z-index: 1000; right: 0; top: 0;">
                    <img src="http://alloyteam.github.io/omi/asset/github.png" alt="" />
                </a>
            </div>
        `;
    }
}

