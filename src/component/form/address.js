/**
 * Created by Amit on 25-08-2017.
 */
import React, {Component} from 'react';
import {Segment, Form, Dropdown, Label} from "semantic-ui-react";
import {observable} from "mobx";
import statesAndCities from '../../util/states-cities';
import _ from 'lodash';

class AddressForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedState : "", selectedCity : "", cityOptions :[]
        };
        this.onStateChange = this.onStateChange.bind(this);
        this.onCityChange = this.onCityChange.bind(this);
    }

    getStateOptions() {
        return _.map(statesAndCities, (item, index)=> {
            return {key: item.key, text: item.text, value: item.value};
        });
    }

    getCityOptions(state){
        let $this = this;
        let matchedState = _.find(statesAndCities, function (state) {
            return state.value === $this.props.selectedState;
        });
        if(matchedState) {
            let cityOptions = _.map(matchedState.cities, function (city) {
                return {key: city.key, text: city.name, value: city.name}
            });
            this.setState({cityOptions : cityOptions});
        }
    }

    onStateChange(e, state) {
        this.props.onStateChange(e, state);
        setTimeout(() => {
            this.getCityOptions(state.value);
        },10);
    }

    onCityChange(e, city) {
        this.props.onCityChange(e, city);
    }

    render() {
        return (
            <Segment className="address-form" color="teal" raised>
                <Label as="a" color="teal" ribbon>Address</Label>
                <Segment basic>
                    <Form.Input size="mini" label='Line 1'
                                placeholder='Line 1'
                                icon='home'
                                required
                                iconPosition='left'/>
                    <Form.Input size="mini" label='Line 2'
                                placeholder='Line 2'
                                icon='home'
                                iconPosition='left'/>
                    <Form.Group>
                        <Form.Field>
                            State
                            <Dropdown onChange={(e, value) =>  this.onStateChange(e, value)}
                                      selection search
                                      width={5}
                                      upward={true}
                                      minCharacters={0}
                                      placeholder="Select State"
                                      value={this.props.selectedState}
                                      options={this.getStateOptions()}/>
                        </Form.Field>
                        <Form.Field>City
                            <Dropdown onChange={(e, value) =>  this.onCityChange(e, value) }
                                      search selection
                                      width={5}
                                      upward={true}
                                      minCharacters={0}
                                      placeholder="Select City"
                                      disabled={!this.props.selectedState}
                                      options={this.state.cityOptions}
                                      value={this.props.selectedCity}/>
                        </Form.Field>
                    </Form.Group>
                </Segment>
            </Segment>
        );
    }
}

export default AddressForm;