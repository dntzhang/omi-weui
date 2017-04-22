import Omi from 'omi';
import { Button } from '../../../src/index'

Omi.makeHTML('WxButton', Button);

export default class ButtonComponent extends Omi.Component {
    constructor(data){
        super(data);
        this.buttonData = [
            {
                text: "页面主操作 Normal",
            },
            {
                text: "页面主操作 Loading",
                loading: true,
            },
            {
                text: "页面主操作 Disabled",
                disabled: true,
            },
            {
                text: "页面次操作 Normal",
                type: "default"
            },
            {
                text: "页面次操作 Loading",
                type: "default",
                loading: true,
            },
            {
                text: "页面次要操作 Disabled",
                type: "default",
                disabled: true,
            },
            {
                text: "警告类操作 Normal",
                type: "warn"
            },
            {
                text: "警告类操作 Loading",
                type: "warn",
                loading: true,
            },
            {
                text: "警告类操作 Disabled",
                type: "warn",
                disabled: true,
            },
            {
                text: "按钮",
                plain: true,
                type: "default"
            },
            {
                text: "按钮",
                plain: true,
                type: "default",
                disabled: true
            },
            {
                text: "按钮",
                plain: true
            },
            {
                text: "按钮",
                size: "small"
            },
            {
                text: "按钮",
                type: "default",
                size: "small"
            },
            {
                text: "按钮",
                type: "warn",
                size: "small"
            }
        ]
    }
    render(){
        return `
        <div class="page button js_show">
            <div class="page__hd">
                <h1 class="page__title">Button</h1>
                <p class="page__desc">按钮</p>
            </div>
            <div class="page__bd page__bd_spacing">
                <WxButton group-data="buttonData" /> 
                <WxButton group-data="buttonData" /> 
                <WxButton group-data="buttonData" /> 
                <WxButton group-data="buttonData" /> 
                <WxButton group-data="buttonData" /> 
                <WxButton group-data="buttonData" />  
                <WxButton group-data="buttonData" /> 
                <WxButton group-data="buttonData" /> 
                <WxButton group-data="buttonData" />  
                <div class="button-sp-area">
                    <WxButton group-data="buttonData" /> 
                    <WxButton group-data="buttonData" /> 
                    <WxButton group-data="buttonData" /> 
                    <WxButton group-data="buttonData" /> 
                    <WxButton group-data="buttonData" /> 
                    <WxButton group-data="buttonData" /> 
                </div>
            </div>
            <div class="page__ft">
                <a href="javascript:;"><img src=${require('../assets/icon_footer.png')}></a>
            </div>
        </div>
        `
    }
}