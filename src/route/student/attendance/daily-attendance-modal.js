/**
 * Created by Amit on 19-07-2017.
 */

import React ,{Component}  from 'react';
import { Modal, Header, Grid, Segment, Icon } from 'semantic-ui-react'
import {observable} from 'mobx';
import { observer } from 'mobx-react';
import _ from 'lodash';
import DateConstants from "../../../constants/date-constants";
import Calendar from './calendar';

@observer
class DailyAttendance extends Component {

    days = [
        {id: "Sunday", label: "Sun"},
        {id: "Monday", label: "Mon"},
        {id: "Tuesday", label: "Tue"},
        {id: "Wednesday", label: "Wed"},
        {id: "Thursday", label: "Thu"},
        {id: "Friday", label: "Fri"},
        {id: "Saturday", label: "Sat"}
    ];

    constructor(props){
        super(props);
        this.getFirstWeekDays = this.getFirstWeekDays.bind(this);
        this.getLastWeekDays = this.getLastWeekDays.bind(this);
        this.state = {
            firstWeekDays : [], secondWeekDays : [], thirdWeekDays : [], fourthWeekDays : [], fifthWeekDays : [], lastWeekDays : []
        };
    }

    componentWillReceiveProps(props) {
        let firstWeekDays = this.getFirstWeekDays();
        let lastWeekDays = this.getLastWeekDays(firstWeekDays);
        this.setState({ firstWeekDays : firstWeekDays, lastWeekDays : lastWeekDays});
    }


    getFirstWeekDays(){
        const { monthlyData } = this.props;
        let day = 6 - new Date("7/1/2017").getDay();
        return _.range(0, day+1);
    }
    getLastWeekDays(firstWeekDays){
        let totalDays = DateConstants.daysInMonth[7];
        let remainingDays = totalDays - (firstWeekDays.length + 21);
        let lastWeekDays = remainingDays > 7 ? remainingDays -7 : remainingDays;
        return _.range(totalDays-lastWeekDays+1, totalDays + 1)
    }

    render() {
        const { monthlyData } = this.props;
        let groupedData = _.groupBy(monthlyData.value,'id');
        console.log(groupedData);
        return (
            <Modal open={this.props.open}
                   size='small'
                   onClose={(e)=>{ this.props.onClose(e) }}
                   closeOnEscape={true}
                   closeOnRootNodeClick={true}>
                <Modal.Header>Daywise Attendance - January, 2017</Modal.Header>
                <Modal.Content>
                    <Calendar/>
                    { /*  <Grid columns='equal'>
                        <Grid.Row>
                            <Grid.Column><Segment basic>Sun</Segment></Grid.Column>
                            <Grid.Column><Segment basic>Mon</Segment></Grid.Column>
                            <Grid.Column><Segment basic>Tue</Segment></Grid.Column>
                            <Grid.Column><Segment basic>Wed</Segment></Grid.Column>
                            <Grid.Column><Segment basic>Thu</Segment></Grid.Column>
                            <Grid.Column><Segment basic>Fri</Segment></Grid.Column>
                            <Grid.Column><Segment basic>Sat</Segment></Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            {
                                _.range(0, 7-this.state.firstWeekDays.length).map((day) => {
                                    return <Grid.Column key={day}></Grid.Column>
                                })
                            }

                            {
                                this.state.firstWeekDays.map((day) => {
                                     return  <Grid.Column key={day}>
                                         <Segment color='green'><Icon color='green' size="small" name='checkmark' circular/>{day+1}</Segment>
                                     </Grid.Column>
                                })
                            }
                            {/!*<Grid.Column></Grid.Column>
                            <Grid.Column></Grid.Column>
                            <Grid.Column>
                                <Segment color='green'><Icon color='green' size="small" name='checkmark' circular/>1</Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment color='red'><Icon color='red' size="small" name='close' circular/>2</Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment color='green'><Icon color='green' size="small" name='checkmark' circular/>3</Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment color='green'><Icon color='green' size="small" name='checkmark' circular/>4</Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment color='green'><Icon color='green' size="small" name='checkmark' circular/>5</Segment>
                            </Grid.Column>*!/}
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Segment color='green'><Icon color='green' size="small" name='checkmark' circular/>6</Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment color='green'><Icon color='green' size="small" name='checkmark' circular/>7</Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment color='green'><Icon color='green' size="small" name='checkmark' circular/>8</Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment color='green'><Icon color='green' size="small" name='checkmark' circular/>9</Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment color='green'><Icon color='green' size="small" name='checkmark' circular/>10</Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment color='red'><Icon color='red' size="small" name='close' circular/>11</Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment color='green'><Icon color='green' size="small" name='checkmark' circular/>12</Segment>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Segment color='green'><Icon color='green' size="small" name='checkmark' circular/>13</Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment color='green'><Icon color='green' size="small" name='checkmark' circular/>14</Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment color='green'><Icon color='green' size="small" name='checkmark' circular/>15</Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment color='red'><Icon color='red' size="small" name='close' circular/>16</Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment color='green'><Icon color='green' size="small" name='checkmark' circular/>17</Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment color='green'><Icon color='green' size="small" name='checkmark' circular/>18</Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment color='green'><Icon color='green' size="small" name='checkmark' circular/>19</Segment>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Segment color='green'><Icon color='green' size="small" name='checkmark' circular/>20</Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment color='green'><Icon color='green' size="small" name='checkmark' circular/>21</Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment color='red'><Icon color='red' size="small" name='close' circular/>22</Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment color='green'><Icon color='green' size="small" name='checkmark' circular/>23</Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment color='green'><Icon color='green' size="small" name='checkmark' circular/>24</Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment color='red'><Icon color='red' size="small" name='close' circular/>25</Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment color='green'><Icon color='green' size="small" name='checkmark' circular/>26</Segment>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            {
                                this.state.lastWeekDays.map((day) => {
                                    return <Grid.Column key={day}>
                                        <Segment color='red'><Icon color='red' size="small" name='close' circular/>{day}</Segment>
                                    </Grid.Column>
                                })
                            }
                            {
                                _.range(0, 7-this.state.lastWeekDays.length).map((day) => {
                                    return <Grid.Column key={day}></Grid.Column>
                                })
                            }
                            {/!*<Grid.Column>
                                <Segment color='red'><Icon color='red' size="small" name='close' circular/>27</Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment color='green'><Icon color='green' size="small" name='checkmark' circular/>28</Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment color='green'><Icon color='green' size="small" name='checkmark' circular/>29</Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment color='red'><Icon color='red' size="small" name='close' circular/>30</Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment color='green'><Icon color='green' size="small" name='checkmark' circular/>31</Segment>
                            </Grid.Column>*!/}
                        </Grid.Row>
                    </Grid> */ }
                </Modal.Content>
            </Modal>
        );
    }
}
export default DailyAttendance;