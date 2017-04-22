import Omi from 'omi'
import OmiRouter from 'omi-router'

import ClassComponent from './class'
import ButtonComponent from './form/button'

export default class App extends Omi.Component {
    install() {
        OmiRouter.init({
            routes: [
                {path: '/', component: ClassComponent},
                {path: '/button', component: ButtonComponent }
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