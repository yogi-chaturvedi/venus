/**
 * Created by Yogesh Chaturvedi on 24-06-2017.
 */

import {observable} from 'mobx';
import { observer } from 'mobx-react';
import StudentModel from '../../../model/student';

class RegisterStore {
    @observable student = new StudentModel();
}
export default new RegisterStore();
