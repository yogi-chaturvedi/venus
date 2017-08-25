/**
 * Created by Amit on 22-07-2017.
 */
import React, {Component} from 'react';
import { Modal, Grid, Segment, Icon } from 'semantic-ui-react'
import _ from 'lodash';

class Calendar extends Component {
    displayName = 'Calendar';

    constructor(props) {
        super(props);
        var date = new Date(props.displayDate);
        this.state ={
            year: date.getFullYear(),
            month: date.getMonth(),
            selectedYear: date.getFullYear(),
            selectedMonth: date.getMonth(),
            selectedDate: date.getDate(),
            selectedDt: new Date(date.getFullYear(), date.getMonth(), date.getDate()),
            startDay: 1,
            weekNumbers: false,
            minDate: this.props.minDate ? this.props.minDate : null,
            disablePast: this.props.disablePast ? this.props.disablePast : false,
            dayNames: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
            monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            monthNamesFull: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            firstOfMonth: null,
            daysInMonth: null
        };
        this.calc = this.calc.bind(this);
    }

    calc(year, month) {
        if (this.state.selectedElement) {
            if (this.state.selectedMonth != month || this.state.selectedYear != year) {
                this.state.selectedElement.classList.remove('r-selected');
            } else {
                this.state.selectedElement.classList.add('r-selected');
            }
        }
        return {
            firstOfMonth: new Date(year, month, 1),
            daysInMonth: new Date(year, month + 1, 0).getDate()
        };
    }

    componentWillMount() {
        this.setState(this.calc.call(null, this.state.year, this.state.month));
    }

    componentDidMount() {
    }


    componentDidUpdate(prevProps, prevState) {
        if (this.props.onSelect && prevState.selectedDt != this.state.selectedDt) {
            this.props.onSelect.call(this.getDOMNode(), this.state);
        }
    }

    //getPrev() {
    //    var state = {};
    //    if (this.state.month > 0) {
    //        state.month = this.state.month - 1;
    //        state.year = this.state.year;
    //    } else {
    //        state.month = 11;
    //        state.year = this.state.year - 1;
    //    }
    //    Object.assign(state, this.calc.call(null, state.year, state.month));
    //    this.setState(state);
    //}


    //getNext() {
    //    var state = {};
    //    if (this.state.month < 11) {
    //        state.month = this.state.month + 1;
    //        state.year = this.state.year;
    //    } else {
    //        state.month = 0;
    //        state.year = this.state.year + 1;
    //    }
    //    Object.assign(state, this.calc.call(null, state.year, state.month));
    //    this.setState(state);
    //}


    selectDate(year, month, date, element) {
        if (this.state.selectedElement) {
            this.state.selectedElement.classList.remove('r-selected');
        }
        element.target.classList.add('r-selected');
        this.setState({
            selectedYear: year,
            selectedMonth: month,
            selectedDate: date,
            selectedDt: new Date(year, month, date),
            selectedElement: element.target
        });
    }

    render() {
        return (
            <div>
                <div className='r-inner'>
                    <MonthDates
                        month={this.state.month}
                        year={this.state.year}
                        daysInMonth={this.state.daysInMonth}
                        firstOfMonth={this.state.firstOfMonth}
                        startDay={this.state.startDay}
                        onSelect={this.selectDate}
                        weekNumbers={this.state.weekNumbers}
                        disablePast={this.state.disablePast}
                        minDate={this.state.minDate}
                        attendance={this.props.attendance}/>
                </div>

            </div>
        );
    }
}

class MonthDates extends Component{
    displayName = 'MonthDates';

    constructor(props){
        super(props);
        this.getAttendanceStatus = this.getAttendanceStatus.bind(this);
    }

    getAttendanceStatus(date) {
        const { attendance } = this.props;
        let status = _.find(attendance, { id : date.toString()});
        if(status){
            if(status.value === 'Present'){
                return <Segment style={{padding:10}} color='green'><Icon color='green' size="small" name='checkmark' circular/> {date} </Segment>;
            }
            else if(status.value === 'Absent'){
                return <Segment style={{padding:10}} color='red'><Icon color='red' size="small" name='close' circular/> {date} </Segment>;
            }
        }
    }

    render() {
        let $this = this;
        const { monthlyData } = this.props;
        var haystack,
            day,
            d,
            isDate,
            className,
            weekStack = Array.apply(null, {length: 7}).map(Number.call, Number),
            that = this,
            startDay = this.props.firstOfMonth.getUTCDay(),
            first = this.props.firstOfMonth.getDay(),
            rows = 5;

        if (startDay == 5 && this.props.daysInMonth == 31 || startDay == 6 && this.props.daysInMonth > 29) {
            rows = 6;
        }
        haystack = Array.apply(null, {length: rows}).map(Number.call, Number);
        day = this.props.startDay + 1 - first;
        while (day > 1) {
            day -= 7;
        }
        day -= 1;
        return(
            <div>
                <Grid columns='equal'>
                    <Grid.Row>
                        <Grid.Column><Segment basic>Mon</Segment></Grid.Column>
                        <Grid.Column><Segment basic>Tue</Segment></Grid.Column>
                        <Grid.Column><Segment basic>Wed</Segment></Grid.Column>
                        <Grid.Column><Segment basic>Thu</Segment></Grid.Column>
                        <Grid.Column><Segment basic>Fri</Segment></Grid.Column>
                        <Grid.Column><Segment basic>Sat</Segment></Grid.Column>
                        <Grid.Column><Segment basic>Sun</Segment></Grid.Column>
                    </Grid.Row>

            {
                haystack.map(function (item, i) {

                    d = day + i * 7;
                    return ( <Grid.Row key={'row-' + i}>
                            {weekStack.map(function (item, j) {
                                d += 1;
                                isDate = d > 0 && d <= that.props.daysInMonth;
                                if(isDate && j == 6){
                                    {/* Ignore Sundays */}
                                    return <Grid.Column key={'column-' + i + "" + j}><Segment color='orange'>{d}</Segment></Grid.Column>
                                }
                                else if (isDate) {
                                    return <Grid.Column key={'column-' + i + "" + j}>
                                        {$this.getAttendanceStatus(d)}
                                    </Grid.Column>
                                }
                                return <Grid.Column key={d}><Segment basic/></Grid.Column>
                            })}
                    </Grid.Row>)

                })
            }
                </Grid></div>
       )
    }
}
export default Calendar;