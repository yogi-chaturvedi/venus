/**
 * Created by Yogesh Chaturvedi on 11-06-2017.
 */
import React, {Component} from 'react';
import {observable} from 'mobx';    
import { observer } from 'mobx-react';
import Registration from "./registration/index";
import EmployeeList from "./list/index";
import PayRoll from "./payroll/index";
import Attendance from "../employee/attendance/index";    

@observer    
class Employee extends Component { 
    @observable activeMenuItem = '';   

    constructor(props) {            
        super(props);       
        this.onMenuItemSelect = this.onMenuItemSelect.bind(this);   
    }

    componentWillReceiveProps(props) {
        this.activeMenuItem = props.activeMenuItem;
    }
    
    getSubComponent() {
        switch (this.activeMenuItem) {     
            case 'New Appointment' :
                return <Registration showToastr={ this.props.showToastr }/>;     
            case 'List' :    
                return <EmployeeList showToastr={ this.props.showToastr }/>; 
            case 'Payroll' :
                return <PayRoll showToastr={ this.props.showToastr }/>;
            case 'Attendance' :
                return <Attendance showToastr={ this.props.showToastr }/>;
            default:
                return <EmployeeList showToastr={ this.props.showToastr }/>;
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
export default Employee;
