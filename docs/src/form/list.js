import Omi from 'omi'
import { List } from '../../../src/index'

Omi.makeHTML('WxList', List)

export default class ListComponent extends Omi.Component{
    constructor(data){
        super(data)
    }
    render(){
        return `
            <div class="page list js_show">
                    <h1 class="page__title">List</h1>
                    <p class="page__desc">列表</p>
                </div>
                <div class="page__bd">
                    <WxList />
                </div>
            </div>
        `
    }
}