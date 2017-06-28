/**
 * Created by Yogesh Chaturvedi on 11-06-2017.
 */
import React, {Component} from 'react';
import {observable} from 'mobx';
import { inject, observer } from 'mobx-react';
import Menu from '../../component/menu';
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
                break;
            case 'List' :
                return <List showToastr={ this.props.showToastr }/>
                break;
            case 'Result' :
                return <Result showToastr={ this.props.showToastr }/>
                break;
            case 'Attendance' :
                return <Attendance showToastr={ this.props.showToastr }/>
                break;
            case 'Fee' :
                return <Fee showToastr={ this.props.showToastr }/>
                break;
            default:
                return <List showToastr={ this.props.showToastr }/>
                break;
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

