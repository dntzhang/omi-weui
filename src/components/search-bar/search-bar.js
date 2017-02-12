import Omi from 'omi/dist/omi'

export default class SearchBar extends Omi.Component{
    constructor(data) {
        super(data);
    }

    focus(dom){
        this.refs.searchInput.focus();
        dom.classList.add('weui-search-bar_focusing');
    }

    cancel(evt){
        this.refs.searchInput.blur();
        this.node.classList.remove('weui-search-bar_focusing');
        evt.stopPropagation();
    }

    render(){
        return `
        <div class="weui-search-bar" onclick="focus(this)" id="searchBar">
            <form class="weui-search-bar__form">
                <div class="weui-search-bar__box">
                    <i class="weui-icon-search"></i>
                    <input type="search" class="weui-search-bar__input" ref="searchInput" placeholder="搜索" required="">
                    <a href="javascript:" class="weui-icon-clear" id="searchClear"></a>
                </div>
                <label class="weui-search-bar__label" id="searchText">
                    <i class="weui-icon-search"></i>
                    <span>搜索</span>
                </label>
            </form>
            <a href="javascript:" class="weui-search-bar__cancel-btn" onclick="cancel(event)">取消</a>
        </div>
        `;
    }
}