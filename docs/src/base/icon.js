import Omi from 'omi';
import { Icon } from '../../../dist/omi-weui';
import footer from '../common/footer'

Omi.makeHTML("Icon", Icon);

export default class IconComponent extends Omi.Component{
    constructor(data){
        super(data)
    }
    render(){
        return`
        <div class="page icons js_show">
            <div class="page__hd">
                <h1 class="page__title">Icons</h1>
                <p class="page__desc">图标</p>
            </div>
            <div class="page__bd page__bd_spacing">
                <div class="icon-box">
                    <Icon data-size="large" data-value="success"/>
                    <div class="icon-box__ctn">
                        <h3 class="icon-box__title">成功</h3>
                        <p class="icon-box__desc">用于表示操作顺利达成</p>
                    </div>
                </div>
                <div class="icon-box">
                    <Icon data-size="large" data-value="info"/>
                    <div class="icon-box__ctn">
                        <h3 class="icon-box__title">提示</h3>
                        <p class="icon-box__desc">用于表示信息提示；也常用于缺乏条件的操作拦截，提示用户所需信息</p>
                    </div>
                </div>
                <div class="icon-box">
                    <Icon data-size="large" data-value="warn" data-primary="false"/>
                    <div class="icon-box__ctn">
                        <h3 class="icon-box__title">普通警告</h3>
                        <p class="icon-box__desc">用于表示操作后将引起一定后果的情况</p>
                    </div>
                </div>
                <div class="icon-box">
                    <Icon data-size="large" data-value="warn"/>
                    <div class="icon-box__ctn">
                        <h3 class="icon-box__title">强烈警告</h3>
                        <p class="icon-box__desc">用于表示操作后将引起严重的不可挽回的后果的情况</p>
                    </div>
                </div>
                <div class="icon-box">
                    <Icon data-size="large" data-value="waiting"/>
                    <div class="icon-box__ctn">
                        <h3 class="icon-box__title">等待</h3>
                        <p class="icon-box__desc">用于表示等待</p>
                    </div>
                </div>
                <div class="icon_sp_area">
                    <Icon data-value="success" />
                    <Icon data-value="success-no-circle"/>
                    <Icon data-value="circle"/>
                    <Icon data-value="warn"/>
                    <Icon data-value="download"/>
                    <Icon data-value="info-circle"/>
                    <Icon data-value="cancel"/>
                    <Icon data-value="search"/>
                </div>
            </div>
            ${footer}
        </div>
    `
    }
}