/**
 * Created by Amit on 24-08-2017.
 */

import {observable} from 'mobx';

class Employee {
    @observable basicDetail = {
        name: {
            fname: '',
            lname: ''
        },
        fatherName: {
            fname: '',
            lname: ''
        },
        motherName: {
            fname: '',
            lname: ''
        },
        gender: '',
        email: '',
        contact: '',
        address: {
            line1: '',
            line2: '',
            city: '',
            state: ''
        },
        profilePhoto: ''
    };

    @observable designation = "";
    @observable salary = "";
}

export default Employee;