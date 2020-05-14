import React from 'react';
import moment from 'moment';
import { StyleSheet, View, ScrollView } from 'react-native';
import Dates from './dates';

export default class DaySlider extends React.Component {
    state = {};
    static defaultProps = {
        // Show 5 days before the current day
        showDaysBeforeCurrent: 5,
        // And after
        showDaysAfterCurrent: 5,
    };
    constructor(props) {
        super(props);
        this.state = {
            allDatesHaveRendered: false,
            currentDateIndex: props.showDaysBeforeCurrent,
            dates: this.getDates(),
            dayWidths: undefined,
            scrollPositionX: 0,
            visibleMonths: undefined,
            visibleYears: undefined,
        };
    }

    // Get an array of dates for showing in a horizontal scroll view
    getDates = () => {
        const {
            currentDate,
            showDaysBeforeCurrent,
            showDaysAfterCurrent,
        } = this.props;

        // Go `showDaysBeforeCurrent` ago before today or custom `currentDate`
        const startDay = moment(currentDate || undefined)
            .subtract(showDaysBeforeCurrent + 1, 'days');
        // Number of days in total
        const totalDaysCount = showDaysBeforeCurrent + showDaysAfterCurrent + 1;

        // And return an array of `totalDaysCount` dates
        return [...Array(totalDaysCount)]
            .map(_ => startDay.add(1, 'day').clone());
    };

    onSelectDay = (index) => {
        const { dates } = this.state;
        const { onSelectDate } = this.props;
        this.setState({ currentDateIndex: index });
        onSelectDate(dates[index]);
    };

    onRenderDay = (index, width) => {
        const { dayWidths } = this.state;
        const {
            showDaysBeforeCurrent,
            showDaysAfterCurrent,
        } = this.props;

        // Check whether all date have been rendered already
        const allDatesHaveRendered = dayWidths
            && Object.keys(dayWidths).length >= showDaysBeforeCurrent + showDaysAfterCurrent;

        this.setState(prevState => ({
            allDatesHaveRendered,
            dayWidths: {
                // keep all existing widths added previously
                ...prevState.dayWidths,
                // keep the index for calculating scrolling position for each day
                [index]: width,
            },
        }));
    };

    render() {
        const {
            dates,
            currentDateIndex,
        } = this.state;
        return (
            <View>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    automaticallyAdjustContentInsets={false}
                >
                    <Dates
                        dates={dates}
                        currentDateIndex={currentDateIndex}
                        onSelectDay={this.onSelectDay}
                        onRenderDay={this.onRenderDay}
                    />
                </ScrollView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    visibleMonthAndYear: {
    },
});