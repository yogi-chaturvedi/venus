/**
 * Created by Amit on 25-08-2017.
 */

import React, {Component} from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import {Form, Segment} from "semantic-ui-react";
import AddressForm from "../../../../component/form/address";

@observer
class Basic extends Component {

    @observable selectedState = '';
    @observable selectedCity = '';

    constructor(props) {
        super(props);
    }

    stateChange(e, state) {
        this.selectedCity = "";
        this.selectedState = state.value;
        this.stateChange = this.stateChange.bind(this);
        this.cityChange = this.cityChange.bind(this);
    }

    cityChange(e, city) {
        this.selectedCity = city.value;
    }

    render() {
        return (
            <Segment className="step-container">
                <Form>
                    <AddressForm
                        selectedState={this.selectedState}
                        selectedCity={this.selectedCity}
                        onStateChange={this.stateChange}
                        onCityChange={this.cityChange}/>
                </Form>
            </Segment>
        );
    }
}

export default Basic;