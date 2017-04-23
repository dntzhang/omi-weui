import Omi from 'omi';
import { Article } from '../../../dist/omi-weui'
import footer from '../common/footer'

Omi.makeHTML('WxArticle', Article);

export default class ArticleComponent extends Omi.Component{
    constructor(data){
        super(data);
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
                        <img src=${require('../assets/pic_article.png')} alt="">
                        <img src=${require('../assets/pic_article.png')} alt="">
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
            </section>
            `
        }
    }
    render(){
        return `
            <div class="page article js_show">
                <div class="page__hd">
                    <h1 class="page__title">Article</h1>
                    <p class="page__desc">文章</p>
                </div>
                <div class="page__bd">
                    <WxArticle data="articleData"/>
                </div>
                ${footer}
            </div>
        `
    }
}