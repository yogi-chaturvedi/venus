/**
 * Created by Yogesh Chaturvedi on 25-06-2017.
 */
import React, {Component} from 'react';
import { Button, Grid, Segment, Form} from 'semantic-ui-react';

class StudentClass extends Component {
    render() {
        return (
            <Segment basic>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={2}>
                            <Form.Input fluid size="mini" label='Class'
                                        placeholder=''
                                        required
                                        icon="student"
                                        iconPosition='left'/></Grid.Column>
                        <Grid.Column width={3}>
                            <Form.Input fluid size="mini" label='Stream / Branch'
                                        placeholder=''
                                        required
                                        icon="fork"
                                        iconPosition='left'/></Grid.Column>
                        <Grid.Column width={2}>
                            <Form.Input fluid size="mini" label='Year'
                                        required
                                        icon="calendar"
                                        iconPosition='left'/>
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <Form.Input fluid size="mini" label='School / College'
                                        required
                                        icon="building"
                                        iconPosition='left'/>
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <Form.Input fluid size="mini" label='Marks / Grade'
                                        required
                                        icon="percent"
                                        iconPosition='left'/>
                        </Grid.Column>
                        <Grid.Column width={1}>
                            <Button basic color="red" size="mini" className="remove-class"
                                    icon="delete"
                                    onClick={(e)=>{this.props.onDelete(e,this.props.id)}}
                                    circular/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        );
    }
}

export default StudentClass;

