import Omi from 'omi/dist/omi'
import { CellsTitle, Cells, CellHeader, CellBody, CellFooter } from '../cell'

Omi.makeHTML('CellsTitle', CellsTitle);
Omi.makeHTML('Cells', Cells);
Omi.makeHTML('CellHeader', CellHeader);
Omi.makeHTML('CellBody', CellBody);
Omi.makeHTML('CellFooter', CellFooter);

export default class List extends Omi.Component{
    constructor(data) {
        super(data);
    }
    render(){
        return `
        <div>
            <CellsTitle data-title={{title}} />
            <Cells slot-index="0">
                <div>
                {{#items}}
                    <{{#link}}a  href={{link}} {{/link}}{{^link}}div{{/link}} class="weui-cell {{#link}}weui-cell_access{{/link}}">
                        {{#imageUrl}}
                            <CellHeader>
                                <img style="width:20px;margin-right:5px;display:block" src={{imageUrl}} />
                            </CellHeader>
                        {{/imageUrl}}
                        <CellBody slot-index="0" >
                            <p>{{{title}}}</p>
                        </CellBody>
                        <CellFooter slot-index="1">
                           <span>{{value}}</span>           
                        </CellFooter>
                    </{{#link}}a{{/link}}{{^link}}div{{/link}}>  
               {{/items}}
               </div>
            </Cells>
        </div>
        `;
    }
}