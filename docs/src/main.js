import Omi from 'omi'
import App from './app'
import './index.css'
import './omi-weui.min.css'

if(module.hot) {
    module.hot.accept();
}

Omi.render(new App(),"body");
