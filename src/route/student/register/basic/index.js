/**
 * Created by Yogesh Chaturvedi on 11-06-2017.
 */
import React, {Component} from 'react';
import {observable} from 'mobx';
import { observer } from 'mobx-react';
import USER_IMAGE from '../../../../assets/image/student_user_image.png';
import { Button, Form, Segment, Link, Icon, Input, Divider ,Label ,Dropdown,Card,Grid, Image, Header, Container,Item } from 'semantic-ui-react'
import DatePicker from 'react-datepicker';
import Moment from 'moment';
import SessionDataModal from './sessionDataModal';
import RegisterStore from '../store';
import _ from 'lodash';
import StateCityJSON from '../../../../util/cities.json';

const options = [
    {key: 'Mr.', text: 'Mr.', value: 'Mr.'},
    {key: 'Ms.', text: 'Ms.', value: 'Ms.'}
];


@observer
class Basic extends Component {
    @observable selectedDate;
    @observable loadingImage = false;
    @observable imageData = USER_IMAGE;
    @observable showModal = true;
    @observable selectedState = '';
    @observable cityOptions = [];
    @observable stateOptions = [];

    constructor(props) {
        super(props);
        this.onNextButtonClicked = this.onNextButtonClicked.bind(this);
        this.onPhotoUploadClicked = this.onPhotoUploadClicked.bind(this);
        this.handleDOBChange = this.handleDOBChange.bind(this);
        this.onImageUploaded = this.onImageUploaded.bind(this);
        this.onModalClose = this.onModalClose.bind(this);
        this.onModalClose();
        this.getCityOptions = this.getCityOptions.bind(this);
        this.getStateOptions = this.getStateOptions.bind(this);
        this.getStateOptions();
        this.stateChange = this.stateChange.bind(this);
    }

    onNextButtonClicked(e) {
    }

    getCityOptions(value) {
        let $this = this;
        this.cityOptions = _.filter(StateCityJSON, (item)=> {
            return item.state === value;
        });
        this.cityOptions = _.map(this.cityOptions, (item, index)=> {
            return {key: index, text: item.name, value: item.name};
        });
    }

    getStateOptions() {
        let $this = this;
        this.stateOptions = _.map(StateCityJSON, (item, index)=> {
            return item.state;
        });
        this.stateOptions = _.uniq(this.stateOptions);
        this.stateOptions = _.map(this.stateOptions, (state, index)=> {
            return {key: index, text: state, value: state};
        })
    }

    onPhotoUploadClicked(e) {
        e.preventDefault();
        this.refs.fileUploader.click();
    }

    handleDOBChange(a, b, c) {
        this.selectedDate = a
    }

    render() {
        return (
            <Segment>
                <SessionDataModal showToastr={ this.props.showToastr } open={this.showModal}
                                  onClose={(e)=>this.onModalClose(false)}/>
                <Segment clearing>
                    <Button floated="right" icon="pencil" onClick={(e)=>this.onModalClose(true)}
                            circular size="mini"
                            inverted color='red'/>
                    <Header as='h3' floated='right' color="teal">
                        {RegisterStore.student.session.value} &nbsp;&nbsp;
                    </Header>
                    <Header as='h4' floated='right'>
                        Session applied for :
                    </Header>
                    <Header as='h4' floated='left'>
                        Class :
                    </Header>
                    <Header as='h3' floated='left' color="teal">
                        {RegisterStore.student._class.value} &nbsp;&nbsp;
                    </Header>
                    <Header as='h4' floated='left'>
                        Section :
                    </Header>
                    <Header as='h3' floated='left' color="teal">
                        {RegisterStore.student.section.value} &nbsp;&nbsp;
                    </Header>
                    <Header as='h4' floated='left'>
                        Branch/Stream :
                    </Header>
                    <Header as='h3' floated='left' color="teal">
                        {RegisterStore.student.branch.value} &nbsp;&nbsp;
                    </Header>
                </Segment>
                <Form>
                    <Grid columns={2}>
                        <Grid.Column width={12}>
                            <Segment color='teal' raised>
                                <Label as='a' color='teal' ribbon>Student's Detail</Label>
                                <input type="file" id="file" ref="fileUploader" style={{display: "none"}}
                                       onChange={this.onImageUploaded} accept="image/x-png,image/gif,image/jpeg"/>
                                <Segment basic>
                                    <Grid columns='equal'>
                                        <Grid.Row>
                                            <Grid.Column>
                                                <Form.Field size="mini">
                                                    <Input size="mini" placeholder='First name' labelPosition='left'
                                                           required
                                                           label={<Dropdown defaultValue='Mr.' options={options}/>}/>
                                                </Form.Field>
                                            </Grid.Column>
                                            <Grid.Column>
                                                <Form.Input size="mini" placeholder='Last name' required/>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Segment>
                                <Segment basic>
                                <Form.Input size="mini" label='Email' placeholder='someone@example.com' required
                                            icon='mail'
                                            iconPosition='left'/>
                                </Segment>
                                <Segment basic>
                                <Grid columns="equal">
                                    <Grid.Row>
                                        <Grid.Column>
                                            <Form.Group inline>
                                                <label>Contact <span className="required-star">*</span></label>
                                                <Form.Input size="mini"
                                                            placeholder='Do not include country code like : +91-'
                                                            required
                                                            icon='tablet'
                                                            iconPosition='left'/>
                                            </Form.Group>
                                        </Grid.Column>
                                        <Grid.Column>
                                            <Form.Group size="mini" inline>
                                                <label>DOB <span className="required-star">*</span></label>
                                                <DatePicker size="mini" required
                                                            selected={this.selectedDate}
                                                            onChange={this.handleDOBChange}
                                                            isClearable={true}
                                                            dateFormat="DD/MM/YY"
                                                            maxDate={Moment()}
                                                            customInput={<Input size="mini"/>}
                                                            isClearable={true}
                                                            placeholderText="DD/MM/YY"
                                                    />
                                            </Form.Group>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                                </Segment>
                            </Segment>

                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Segment color="teal" loading={this.loadingImage} className="upload-image-section">
                                <Image onClick={(event) => {this.onPhotoUploadClicked(event)}}
                                       className='image-styles'
                                       shape="rounded" bordered src={this.imageData}
                                       size="medium"/>
                                <Button fluid content='Upload' icon='upload' labelPosition='left'
                                        onClick={(event) => {this.onPhotoUploadClicked(event)}}/>
                            </Segment>
                        </Grid.Column>
                    </Grid>
                    <Grid>
                        <Grid.Column>
                            <Segment color='teal' raised>
                                <Label as="a" color="teal" ribbon>Father's Detail</Label>
                                <Segment basic>
                                <Grid columns="equal">
                                    <Grid.Row>
                                        <Grid.Column>
                                            <Form.Field>
                                                <Input size="mini" placeholder='First name' labelPosition='left'
                                                       required
                                                       label='Mr.   '/>
                                            </Form.Field>
                                        </Grid.Column>
                                        <Grid.Column>
                                            <Form.Input size="mini" placeholder='Last name' required/>
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row>
                                        <Grid.Column>
                                            <Form.Input size="mini" label='Occupation'
                                                        placeholder='Like:- Buisnessman, Govt. Employee, etc.'
                                                        icon='doctor'
                                                        iconPosition='left'/>
                                        </Grid.Column>
                                        <Grid.Column>
                                            <Form.Input size="mini" label='Designation'
                                                        placeholder='First Grade, Owner, etc.'
                                                        icon='black tie'
                                                        iconPosition='left'/>
                                        </Grid.Column>
                                        <Grid.Column >
                                            <Form.Input size="mini" label='Qualification'
                                                        placeholder='BA, BCom, M.Tech, etc.'
                                                        icon='student'
                                                        iconPosition='left'/>
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row>
                                        <Grid.Column>
                                            <Form.Input size="mini" label='Contact'
                                                        placeholder='Do not include the country code'
                                                        icon='mobile'
                                                        iconPosition='left'/>
                                        </Grid.Column>
                                        <Grid.Column >
                                            <Form.Input size="mini" label='Email'
                                                        placeholder='someone@example.com'
                                                        icon='mail'
                                                        iconPosition='left'/>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                                    </Segment>
                            </Segment>
                            <Segment color="teal">
                                <Label as="a" color="teal" ribbon>Mother's Detail</Label>
                                <Segment basic>
                                <Grid columns='equal'>
                                    <Grid.Row>
                                        <Grid.Column>
                                            <Form.Field>
                                                <Input size="mini" placeholder='First name' labelPosition='left'
                                                       required
                                                       label='Mrs.'/>
                                            </Form.Field>
                                        </Grid.Column>
                                        <Grid.Column>
                                            <Form.Input size="mini" placeholder='Last name' required/>
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row>
                                        <Grid.Column>
                                            <Form.Input size="mini" label='Occupation'
                                                        placeholder='Like:- Buisnessman, Govt. Employee, etc.'
                                                        icon='doctor'
                                                        iconPosition='left'/>
                                        </Grid.Column>
                                        <Grid.Column >
                                            <Form.Input size="mini" label='Designation'
                                                        placeholder='First Grade, Owner, etc.'
                                                        icon='black tie'
                                                        iconPosition='left'/>
                                        </Grid.Column>
                                        <Grid.Column >
                                            <Form.Input size="mini" label='Qualification'
                                                        placeholder='BA, BCom, M.Tech, etc.'
                                                        icon='student'
                                                        iconPosition='left'/>
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row>
                                        <Grid.Column>
                                            <Form.Input size="mini" label='Contact'
                                                        placeholder='Do not include the country code'
                                                        icon='mobile'
                                                        iconPosition='left'/>
                                        </Grid.Column>
                                        <Grid.Column >
                                            <Form.Input size="mini" label='Email'
                                                        placeholder='someone@example.com'
                                                        icon='mail'
                                                        iconPosition='left'/>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                                </Segment>
                            </Segment>
                            <Segment color="teal">
                                <Label as="a" color="teal" ribbon>Address</Label>
                                <Segment basic>
                                <Form.Input size="mini" label='Line 1'
                                            placeholder='Enter...'
                                            icon='home'
                                            required
                                            iconPosition='left'/>
                                <Form.Input size="mini" label='Line 2'
                                            placeholder='Enter...'
                                            icon='home'
                                            iconPosition='left'/>
                                <Form.Group>
                                    <Form.Dropdown onChange={(e,value)=>{this.stateChange(value)}}
                                                   text='Select State'
                                                   search
                                                   minCharacters={0}
                                                   width={5}
                                                   options={this.stateOptions}/>
                                    <Form.Dropdown options={this.cityOptions}
                                                   text='Select City'
                                                   search
                                                   width={5}/>
                                </Form.Group>
                                    </Segment>
                            </Segment>
                            <Form.Field>
                                <Divider hidden vertical/>
                            </Form.Field>
                        </Grid.Column>
                        {/*<Grid.Column width={6}>
                         <br/>
                         <Segment loading={this.loadingImage} className="upload-image-section" compact>
                         <Image onClick={(event) => {this.onPhotoUploadClicked(event)}}
                         className='image-styles'
                         shape="rounded" bordered src={this.imageData}
                         size="small"/>
                         <Button fluid content='Upload' icon='upload' labelPosition='left'
                         onClick={(event) => {this.onPhotoUploadClicked(event)}}/>
                         </Segment>
                         </Grid.Column>*/}
                    </Grid>
                </Form>
            </Segment>
        );
    }

    onImageUploaded(event) {
        const {files} = event.target;

        if (files && files[0]) {
            var reader = new FileReader();

            reader.onloadstart = () => this.loadingImage = true;
            reader.onload = event => {
                this.imageData = event.target.result;
                this.loadingImage = false;
            };

            reader.readAsDataURL(files[0]);
        }
    }

    onModalClose(value) {
        if (value === undefined) {
            let fields = ['_class', 'section', 'session', 'branch'];
            _.each(fields, (field)=> {
                if (RegisterStore.student[field].value === '' || RegisterStore.student[field].value === 'select') {
                    RegisterStore.student[field].valid = false;
                }
            });
            this.showModal = _.some(fields, (field)=> {
                return RegisterStore.student[field].valid === false;
            });
        }
        else {
            this.showModal = value;
        }
    }

    stateChange(value) {
        this.getCityOptions(value.value);
    }
}
export default Basic;

