import Omi from 'omi/dist/omi';
import classNames from 'classnames';
import Grid from './grid';

Omi.makeHTML('Grid', Grid);

export default class Grids extends Omi.Component {
    constructor(data) {
        super(data);
        this.data = Object.assign({
            items: data.items || []
        }, data);
    }
    install () {
        this.childrenData = this.data.items;
    }
    render() {
        const { classname } = this.data;
        const cls = classNames({
            'weui-girds': true
        }, classname);
        return `
            <div>
                {{#items}} <Grid /> {{/items}}
            </div>
        `
    }
}