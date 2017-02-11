import Omi from 'omi/dist/omi'
import Hello from './hello'
import './omi-weui.min.css'

if(module.hot) {
    module.hot.accept();
}

Omi.render(new Hello({ name : "Omi1" }),"body");


