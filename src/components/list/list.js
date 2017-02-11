import Omi from 'omi/dist/omi'

export default class List extends Omi.Component{
    constructor(data) {
        super(data);
    }

    render(){
        return `
        <div class="weui-cells">
            {{#items}}
            <a class="weui-cell weui-cell_access" href="javascript:;">
                <div class="weui-cell__bd">
                    <p>{{name}}</p>
                </div>
                <div class="weui-cell__ft">
                </div>
            </a>
            {{/items}}
        </div>
        `;
    }
}