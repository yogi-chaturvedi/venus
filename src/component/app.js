/**
 * Created by Yogesh Chaturvedi on 12-06-2017.
 */

import React, {Component} from 'react';
import Toastr from '../component/message';
class App extends Component {

    constructor(props){
        super(props);
        this.showToastr = this.showToastr.bind(this);
    }

    showToastr(type, title, message) {
        this.toastr.refs.container[type](message, title, {
            timeOut: 3000,
            closeButton: true,
            newestOnTop: true
        });
    }

    render() {
        const childrenWithProps = React.Children.map(this.props.children,
            (child) => React.cloneElement(child, { showToastr : this.showToastr})
        );
        return (
            <div id="root">
                {childrenWithProps}
                <div>{
                    <Toastr ref={component => this.toastr = component }/>
                }
                </div>
            </div>
        );
    }
}

export default App;