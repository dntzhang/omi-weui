import Omi from 'omi/dist/omi'
import classNames from 'classnames';
import GridIcon from './grid_icon';
import GridLabel from './grid_label';

Omi.makeHTML('GridIcon', GridIcon);
Omi.makeHTML('GridLabel', GridLabel);

export default class Grid extends Omi.Component {
    constructor (data) {
        super(data);
        this.data = Object.assign(data, {
            label: data.label || '',
            icon: data.icon || false
        });
    }
    install () {
        this.childrenData = [
            {content: this.data.icon },
            {content: this.data.label}
        ]
    }
    render() {
        const { icon, label, classname } = this.data;
        const cls = classNames({
            'weui-grid': true
        }, classname);
        return `
            <a class=${cls}>
                {{#icon}}<GridIcon />{{/icon}}
                    {{{content}}}
                {{#label}}<GridLabel />{{/label}}
            </a>
        `
    }
}