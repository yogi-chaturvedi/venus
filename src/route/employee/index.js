/**
 * Created by Yogesh Chaturvedi on 11-06-2017.
 */
import React, {Component} from 'react';
import {observable} from 'mobx';
import { observer } from 'mobx-react';

@observer
class Employee extends Component {
    @observable activeMenuItem = '';

    constructor(props) {
        super(props);
        this.onMenuItemSelect = this.onMenuItemSelect.bind(this);
    }

    onMenuItemSelect(key) {
        this.activeMenuItem = key;
    }

    render() {
        return (
            <div>
            </div>
        );
    }
}
export default Employee;
