import Omi from 'omi/dist/omi'

export default class SearchBar extends Omi.Component{
    constructor(data) {
        data = Object.assign({
            placeholder:'搜索'
        },data);
        super(data);
    }

    installed(){

        document.addEventListener('click',function(){
            this.refs.searchInput.blur();
            this.node.classList.remove('weui-search-bar_focusing');
        }.bind(this),false);
    }

    focus(dom, evt){
        this.refs.searchInput.focus();
        dom.classList.add('weui-search-bar_focusing');
        evt.stopPropagation();
    }

    cancel(evt){
        this.refs.searchInput.blur();
        this.node.classList.remove('weui-search-bar_focusing');
        evt.stopPropagation();
    }

    render(){
        return `
        <div class="weui-search-bar" onclick="focus(this, event)" id="searchBar">
            <form class="weui-search-bar__form">
                <div class="weui-search-bar__box">
                    <i class="weui-icon-search"></i>
                    <input type="search" class="weui-search-bar__input" ref="searchInput" placeholder="${this.data.placeholder}" required="">
                    <a href="javascript:" class="weui-icon-clear" id="searchClear"></a>
                </div>
                <label class="weui-search-bar__label" id="searchText">
                    <i class="weui-icon-search"></i>
                    <span>${this.data.placeholder}</span>
                </label>
            </form>
            <a href="javascript:" class="weui-search-bar__cancel-btn" onclick="cancel(event)">取消</a>
        </div>
        `;
    }
}