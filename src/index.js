import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './route';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Message from './component/message';
import BaseStore from './store';
import './assets/css/animate.css';
import './assets/css/toastr.min.css';
import {observer} from 'mobx-react';

let root = document.createElement('div');
root.id = "root";
document.body.appendChild( root );

ReactDOM.render(<div><Routes />
</div>, document.getElementById('root'));
registerServiceWorker(); 
  