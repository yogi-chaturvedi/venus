/**
 * Created by Yogesh Chaturvedi on 15-06-2017.
 */
import { observable } from 'mobx';
import {observer} from 'mobx-react';

@observer
class BaseStore {
    @observable message = {
        visibility: false,
        title: '',
        content: '',
        timeout: 3000
    };

    updateMessage(message) {
        message.visibility = true;
        message.timeout = message.timeout || this.message.timeout;
        Object.assign(this.message, message);
        if (message.timeout !== 'never') {
            setTimeout(()=> {
                this.message.visibility = false;
                this.message.content = '';
                this.message.title = '';
            }, message.timeout)
        }
    }
}
export default new BaseStore();