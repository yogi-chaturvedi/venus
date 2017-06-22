/**
 * Created by Yogesh Chaturvedi on 15-06-2017.
 */
import React, {Component} from 'react'
var ReactToastr = require("react-toastr");
var {ToastContainer} = ReactToastr; // This is a React Element.
var ToastMessageFactory = React.createFactory(ReactToastr.ToastMessage.animation);

class Toastr extends Component {
    render() {
        return (
            <div>
                <ToastContainer ref="container"
                                toastMessageFactory={ToastMessageFactory}
                                className="toast-bottom-right"/>
            </div>
        );
    }
}

export default Toastr;
