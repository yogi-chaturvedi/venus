/**
 * Created by Yogesh Chaturvedi on 11-06-2017.
 */
import React, {Component} from 'react';
import {observable} from 'mobx';
import { observer } from 'mobx-react';

@observer
class Attendance extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                {"Attendance"}
            </div>
        );
    }
}
export default Attendance;

