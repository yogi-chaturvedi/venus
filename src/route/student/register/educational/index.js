/**
 * Created by Yogesh Chaturvedi on 11-06-2017.
 */
import React, {Component} from 'react';
import {observable} from 'mobx';
import { observer } from 'mobx-react';
import { Grid, Image, Label, Segment, Divider, Form ,Header, Button} from 'semantic-ui-react';
import StudentClass from './StudentClass';
import _ from 'lodash';

@observer
class Result extends Component {
    constructor(props) {
        super(props);
        this.onAddClassButtonClicked = this.onAddClassButtonClicked.bind(this);
        this.onRemoveClassClicked = this.onRemoveClassClicked.bind(this);
    }

    @observable studentClassList = [1];

    render() {
        return (
            <Segment color='teal' raised>
                <Label as='a' color='teal' ribbon>Previous Class Details</Label>
                {
                    this.studentClassList.map((studentClass)=> {
                        return <StudentClass id={studentClass} onDelete={this.onRemoveClassClicked}/>
                    })
                }
                <Button basic color="green" size="mini"
                        icon="plus"
                        onClick={(e)=>{this.onAddClassButtonClicked(e)}}
                        circular/>
            </Segment>
        );
    }

    onAddClassButtonClicked(e) {
        e.preventDefault();
        this.studentClassList.push(this.studentClassList[this.studentClassList.length - 1] + 1);
    }

    onRemoveClassClicked(e, id) {
        if(this.studentClassList.length === 1){
            this.props.showToastr('warning', "Student Class", "At least one previous class is necessary");
            return;
        }
        _.remove(this.studentClassList, (studentClass)=> {
            return studentClass === id;
        });
    }
}
export default Result;

