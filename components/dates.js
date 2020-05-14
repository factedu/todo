import React, { PureComponent } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import Date from './date';
import Color from './../constants/Colors';

export default class Dates extends PureComponent {

    render() {
        const {
            currentDateIndex,
            dates,
            onSelectDay,
            onRenderDay,
        } = this.props;
        return (
            <View style={styles.container}>
                {dates.map((date, index) =>
                    <View key={index}>
                        <Date
                            date={date}
                            index={index}
                            isActive={index === currentDateIndex}
                            onPress={onSelectDay}
                            onRender={onRenderDay}
                            key={index}
                            activeColor={'#008800'}
                        />
                    </View>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:Color.primary,
        flexDirection: 'row',
    },
});