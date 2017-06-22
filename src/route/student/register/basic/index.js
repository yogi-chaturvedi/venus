/**
 * Created by Yogesh Chaturvedi on 11-06-2017.
 */
import React, {Component} from 'react';
import {observable} from 'mobx';
import { observer } from 'mobx-react';
import USER_IMAGE from '../../../../assets/image/user.png';
import { Button, Form, Segment, Link, Icon, Input, Divider ,Label ,Dropdown,Card,Grid, Image } from 'semantic-ui-react'
import DatePicker from 'react-datepicker';
import Moment from 'moment';

const options = [
    {key: 'Mr.', text: 'Mr.', value: 'Mr.'},
    {key: 'Ms.', text: 'Ms.', value: 'Ms.'},
];

@observer
class Basic extends Component {
    @observable selectedDate;

    constructor(props) {
        super(props);
        this.onNextButtonClicked = this.onNextButtonClicked.bind(this);
        this.onPhotoUploadClicked = this.onPhotoUploadClicked.bind(this);
        this.handleDOBChange = this.handleDOBChange.bind(this);
    }

    onNextButtonClicked(e) {
    }


    onPhotoUploadClicked(e) {
        e.preventDefault();
    }

    handleDOBChange(a, b, c) {
        this.selectedDate = a
    }

    render() {
        return (
            <Segment>
                <Grid columns={2}>
                    <Grid.Column width={10}>
                        <Form>
                            <label>Student's <span className="required-star">*</span></label>
                            <Form.Group widths='equal'>
                                <Form.Field width={6}>
                                    <Input placeholder='First name' labelPosition='left' required
                                           label={<Dropdown defaultValue='Mr.' options={options}/>}/>
                                </Form.Field>
                                <Form.Input width={5} placeholder='Last name' required/>
                            </Form.Group>
                            <label>Father's <span className="required-star">*</span></label>
                            <Form.Group widths='equal'>
                                <Form.Field width={6}>
                                    <Input placeholder='First name' labelPosition='left' required
                                           label='Mr.   '/>
                                </Form.Field>
                                <Form.Input width={5} placeholder='Last name' required/>
                            </Form.Group>
                            <label>Mother's <span className="required-star">*</span></label>
                            <Form.Group widths='equal'>
                                <Form.Field width={6}>
                                    <Input placeholder='First name' labelPosition='left' required
                                           label='Mrs.'/>
                                </Form.Field>
                                <Form.Input width={5} placeholder='Last name' required/>
                            </Form.Group>
                            <Form.Input label='Email' placeholder='someone@example.com' required icon='mail'
                                        iconPosition='left'/>
                            <Form.Input label='Contact' placeholder='Do not include country code like : +91-'
                                        required
                                        icon='tablet'
                                        iconPosition='left'/>
                                <Form.Group inline>
                                    <label>DOB <span className="required-star">*</span></label>
                                    <DatePicker required
                                                selected={this.selectedDate}
                                                onChange={this.handleDOBChange}
                                                isClearable={true}
                                                dateFormat="DD/MM/YYYY"
                                                maxDate={Moment()}
                                                isClearable={true}
                                                placeholderText="DD/MM/YY"
                                        />
                                </Form.Group>
                                <Form.Field>
                                    <Divider hidden vertical/>
                                </Form.Field>
                        </Form>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <br/>
                        <Segment className="upload-image-section" compact>
                            <Image shape="rounded" bordered src={USER_IMAGE} size="small"/>
                            <Button float="right" fluid content='Upload' icon='upload' labelPosition='left'
                                    onClick={(event) => {this.onPhotoUploadClicked(event)}}/>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </Segment>
        );
    }
}
export default Basic;

