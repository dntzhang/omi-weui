import Omi from 'omi'
import OmiRouter from 'omi-router'

import ClassComponent from './class'
import ButtonComponent from './form/button'
import ListComponent from './form/list'
import ArticleComponent from './base/article'
import IconComponent from './base/icon'

export default class App extends Omi.Component {
    install() {
        OmiRouter.init({
            routes: [
                {path: '/', component: ClassComponent},
                {path: '/button', component: ButtonComponent },
                {path: '/list', component: ListComponent},
                {path: '/article', component: ArticleComponent},
                {path: '/icons', component: IconComponent}
            ],
            renderTo: '#container',
            defaultRoute: '/',
            root: this
        })
    }
    render() {
        return `
            <div> 
                <div id="container" class="container"></div>
            </div>
        `
    }
}