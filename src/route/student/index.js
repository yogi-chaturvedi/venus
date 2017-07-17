/**
 * Created by Yogesh Chaturvedi on 11-06-2017.
 */
import React, {Component} from 'react';
import {observable} from 'mobx';
import { observer } from 'mobx-react';
import Registration from './register';
import List from './list';
import Result from './result';
import Attendance from './attendance';
import Fee from './fee';

@observer
class Student extends Component {
    @observable activeMenuItem = '';

    constructor(props) {
        super(props);
        this.onMenuItemSelect = this.onMenuItemSelect.bind(this);
        this.getSubComponent = this.getSubComponent.bind(this);
    }

    componentWillReceiveProps(props) {
        this.activeMenuItem = props.activeMenuItem;
    }

    getSubComponent() {
        switch (this.activeMenuItem) {
            case 'New Registration' :
                return <Registration showToastr={ this.props.showToastr }/>
            case 'List' :
                return <List showToastr={ this.props.showToastr }/>
            case 'Result' :
                return <Result showToastr={ this.props.showToastr }/>
            case 'Attendance' :
                return <Attendance showToastr={ this.props.showToastr }/>
            case 'Fee' :
                return <Fee showToastr={ this.props.showToastr }/>
            default:
                return <List showToastr={ this.props.showToastr }/>
        }
    }

    onMenuItemSelect(key) {
        this.activeMenuItem = key;
    }

    render() {
        return (
            <div>
                {this.getSubComponent()}
            </div>
        );
    }


}
export default Student;

