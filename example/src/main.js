import Omi from 'omi'

if(module.hot) {
    module.hot.accept();
}

class Hello extends Omi.Component {
    constructor(data) {
        super(data);
    }
    style () {
        return  `
            h1{
                cursor:pointer;
            }
         `;
    }
    handleClick(target, evt){
        alert(target.innerHTML);
    }
    render() {
        return  `
        <div>
            <h1 onclick="handleClick(this, event)">Hello ,{{name}}!</h1>
        </div>
        `;

    }
}

Omi.render(new Hello({ name : "Omi2" }),"body");