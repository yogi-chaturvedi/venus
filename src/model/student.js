/**
 * Created by Yogesh Chaturvedi on 23-06-2017.
 */
import {observable} from 'mobx';

class Student {
    @observable _class = {value: '', valid: true};
    @observable section = {value: '', valid: true};
    @observable session = {value: '', valid: true};
    @observable branch = {value: '', valid: true};

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
    }
}

export default Student;