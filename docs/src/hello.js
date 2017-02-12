import Omi from 'omi/dist/omi'
import { Button, List, Progress, Article, dialog, SearchBar} from '../../src/index'


Omi.makeHTML('Button', Button);
Omi.makeHTML('List', List);
Omi.makeHTML('Progress', Progress);
Omi.makeHTML('Article', Article);
Omi.makeHTML('SearchBar', SearchBar);


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
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                    </p>
                    <p>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAArIAAAGFBAMAAADzwA07AAAAIVBMVEXr6+vPz8/X19fp6ene3t7k5OTm5ubh4eHT09Pb29vR0dHqLrSfAAACyklEQVR42uzBgQAAAACAoP2pF6kCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGB27GdHaSiO4vgJ5e+s5lzAFlZ2Y1yWoIm6AjPJbItG3VJdmLiiOg9Aow8AybinK1/Tey9ldDttl+eTFC6w+4b+2luRNi2XcIJl8v/H6quHhf9BHiXnFlbGE6wep/D8+gm8Dp8CnEAeJePOBz4n7XKssi254gFWzEkVUWVb0uEeVklz7rxS2ZYM/PnfZ8zEz4atyrYkYOjn63emAPI5VLYtxczHe+HnbWxc7K9fVLYFxwjAIur5eVuGQLcgn6lsczkTYDNDOQb6Nma/oJWqbGMLV/EYIg6BAffIaG5iTlW2sSFXQDFGblzDAwqTIIi5VdmmRrZbYI/F3FXeDbj3uQ8q29SA1/ZYYcgtFkzeMAXQ50llmwo4RYcpRlwhj5DN4RShyjZWTHA1Bwa233Fm435w4onKNnY0yAwQ8BrFFGuezVS2sc0c6xBAPA04Rswz8+9Z7VBl61lwG48BrCd+IEQ33i36DB8eNKpsHUP+KPcAMuMvYgYXnFzS71S2jhF/8+D/mq+YIotwURh4GVOVraPHXy4dOsznfrNb3XUh9kv3nqhsHQEjlw5dFsa97qudAnK/RI8GKltLTANfkyEQlFECfOMBGDFKAaw5Vtl61lW1wifMaW7fMkpcZJr7u+fkTmXr2VRbgqM/+3slrZ+wPtP7A5WtZ8FTVfgA63VhYyZw3tGaJSrbkuDTe1Re3t1/hIiIiIiIiIiIiIj8ZQ8OBAAAAACA/F8bQVVVVVVVVVVVVVVVVVVVhT04EAAAAAAA8n9tBFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVpT04JAAAAAAQ9P+10RMAAAAAAAAAAAAAAADAArTtXKLPR7LcAAAAAElFTkSuQmCC" alt="">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAArIAAAGFBAMAAADzwA07AAAAIVBMVEXr6+vPz8/X19fp6ene3t7k5OTm5ubh4eHT09Pb29vR0dHqLrSfAAACyklEQVR42uzBgQAAAACAoP2pF6kCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGB27GdHaSiO4vgJ5e+s5lzAFlZ2Y1yWoIm6AjPJbItG3VJdmLiiOg9Aow8AybinK1/Tey9ldDttl+eTFC6w+4b+2luRNi2XcIJl8v/H6quHhf9BHiXnFlbGE6wep/D8+gm8Dp8CnEAeJePOBz4n7XKssi254gFWzEkVUWVb0uEeVklz7rxS2ZYM/PnfZ8zEz4atyrYkYOjn63emAPI5VLYtxczHe+HnbWxc7K9fVLYFxwjAIur5eVuGQLcgn6lsczkTYDNDOQb6Nma/oJWqbGMLV/EYIg6BAffIaG5iTlW2sSFXQDFGblzDAwqTIIi5VdmmRrZbYI/F3FXeDbj3uQ8q29SA1/ZYYcgtFkzeMAXQ50llmwo4RYcpRlwhj5DN4RShyjZWTHA1Bwa233Fm435w4onKNnY0yAwQ8BrFFGuezVS2sc0c6xBAPA04Rswz8+9Z7VBl61lwG48BrCd+IEQ33i36DB8eNKpsHUP+KPcAMuMvYgYXnFzS71S2jhF/8+D/mq+YIotwURh4GVOVraPHXy4dOsznfrNb3XUh9kv3nqhsHQEjlw5dFsa97qudAnK/RI8GKltLTANfkyEQlFECfOMBGDFKAaw5Vtl61lW1wifMaW7fMkpcZJr7u+fkTmXr2VRbgqM/+3slrZ+wPtP7A5WtZ8FTVfgA63VhYyZw3tGaJSrbkuDTe1Re3t1/hIiIiIiIiIiIiIj8ZQ8OBAAAAACA/F8bQVVVVVVVVVVVVVVVVVVVhT04EAAAAAAA8n9tBFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVpT04JAAAAAAQ9P+10RMAAAAAAAAAAAAAAADAArTtXKLPR7LcAAAAAElFTkSuQmCC" alt="">
                    </p>
                </section>
                <section>
                    <h3>1.2 节标题</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
                <h1 style="text-align: center;">{{name}}</h1>
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
                <div class="page__bd page__bd_spacing">
                    <SearchBar "/>
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
                    <h1 class="page__title">List</h1>
                    <p class="page__desc">文章</p>
                </div>
                <div class="page__bd page__bd_spacing">
                     <Article data="articleData"/>           
                </div>
            </div>
        `;
    }
}

