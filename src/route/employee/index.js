/**
 * Created by Yogesh Chaturvedi on 11-06-2017.
 */
import React, {Component} from 'react';
import Menu from '../../component/menu';
import {observable} from 'mobx';
import { inject, observer } from 'mobx-react';
import { Grid } from 'semantic-ui-react';

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
