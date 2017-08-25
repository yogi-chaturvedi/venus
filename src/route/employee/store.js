/**
 * Created by Amit on 24-08-2017.
 */
import { observable } from 'mobx';
import {observer} from 'mobx-react';
import Employee  from '../../model/employee'
import employees from './employeeFakeData';

class EmployeeStore {

    @observable employees = employees;
    constructor(props) {
        this.employee = new Employee();
    }
}

export default new EmployeeStore();