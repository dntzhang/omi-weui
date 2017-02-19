import Omi from 'omi/dist/omi'
import OmiFinger from 'omi-finger';

class Confirm extends Omi.Component{
    constructor(data) {
        data = Object.assign({
            visible: true,
            title: '标题',
            msg: '',
            yes: function () {
            },
            no: function () {
            },
            yesBtn: '确定',
            noBtn: '取消'
        },data);
        super(data);
    }

    yes(){
        this.data.yes();
        this.close();
    }

    no(){
        this.data.no();
        this.close();
    }

    close() {
        this.data.visible = false;
        this.update();
    }

    render(){
        if(!this.data.visible) return;
        return `
        <div class="js_dialog">
            <div class="weui-mask"></div>
            <div class="weui-dialog">
                <div class="weui-dialog__hd"><strong class="weui-dialog__title">${this.data.title}</strong></div>
                <div class="weui-dialog__bd">${this.data.msg}</div>
                <div class="weui-dialog__ft">
                    <a href="javascript:;" omi-finger onTap="no" class="weui-dialog__btn weui-dialog__btn_default">${this.data.noBtn}</a>
                    <a href="javascript:;" omi-finger onTap="yes" class="weui-dialog__btn weui-dialog__btn_primary">${this.data.yesBtn}</a>
                </div>
            </div>
        </div>
        `;
    }
}

let dialog = {};
dialog.confirmInstance = null;
dialog.confirm = function(data) {
    if (dialog.confirmInstance) {
        data = Object.assign({
            title: '标题',
            msg: '',
            yes: function () {
            },
            no: function () {
            },
            yesBtn: '确定',
            noBtn: '取消'
        },data);
        data.visible = true;
        dialog.confirmInstance.setData(data, true);
    } else {
        dialog.confirmInstance = new Confirm(data);
        Omi.render(dialog.confirmInstance ,'body',true);
    }
}


export default dialog;