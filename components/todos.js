import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { ListItem, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Color from './../constants/Colors';
import { ScrollView } from 'react-native-gesture-handler';
import SlidingUpPanel from 'rn-sliding-up-panel';

import TodoService from './../services/todo.service';

import TodoForm from './todo-form';
import moment from 'moment';

export default class Todos extends React.Component {

    // _panel;

    state = {
        list: []
    };
    constructor(props) {
        super(props);
        this.getList(props.date);
    }



    componentWillReceiveProps(nextProps) {
        const { date } = this.props
        if (nextProps.date !== date) {
            console.log('prop changed to : ', nextProps.date);
            this.getList(nextProps.date);
        }
    }

    getList(date) {
        this.setState({list:[]});
        TodoService.list(date)
            .then(list => {
                return list.map(l => {
                    return {
                        when: moment(l.createdAt.toDate()).format('hh:mm A'),
                        name: l.title,
                        subtitle: l.description,
                        icon: 'timer'
                    }
                })
            })
            .then(list => {
                this.setState({ list: list })
            })
    }



    render() {
        const list = [
            {
                when: '10:30 AM',
                name: 'Meet Amy Farha',
                icon: 'done-all',
                subtitle: 'Send ammy farha a google meet link and fix agenda for next meeting'
            },
        ];

        const panelDisplayButton = (
            <Button
                type="clear"
                icon={
                    <Icon
                        name="plus-circle"
                        size={50}
                        color={Color.primary}
                    />
                }
                buttonStyle={styles.fabButton}
                title="asdfasdf"
                onPress={() => this._panel.show()}
            >
            </Button>
        );

        const screenWidth = Math.round(Dimensions.get('window').width);
        const screenHeight = Math.round(Dimensions.get('window').height);

        // console.log(this._panel.state);
        return (
            <View style={styles.container}>
                {/* <Text style={styles.dateTitle}>ToDo on : {this.props.date}</Text> */}
                <ScrollView>
                    {
                        this.state.list.map((l, i) => (
                            <ListItem
                                key={i}
                                leftIcon={{ name: l.icon }}
                                title={l.name}
                                rightSubtitle={l.when}
                                subtitle={l.subtitle}
                                bottomDivider
                                checkBox={
                                    {
                                        checked: true,
                                        size: 24,
                                        checkedColor: Color.primary,
                                        checkedIcon: (l.icon === 'done-all') ? 'check-square-o' : 'square-o'
                                    }
                                }
                            />
                        ))
                    }
                </ScrollView>
                <Button
                    icon={
                        <Icon
                            name="plus-circle"
                            size={50}
                            color={Color.primary}
                        />
                    }
                    buttonStyle={styles.fabButton}
                    title=""
                    onPress={() => this._panel.show()}
                >
                </Button>
                <SlidingUpPanel
                    draggableRange={{ top: screenHeight / 1.5, bottom: 0 }}
                    friction={1}
                    snappingPoints={[0, screenHeight / 2, screenHeight / 1.5]}
                    ref={c => this._panel = c}>
                    <View style={styles.panelContainer}>
                        <TodoForm date={this.props.date} getList={this.getList} panel={this._panel} />
                    </View>
                </SlidingUpPanel>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        padding: 0,
    },
    dateTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Color.primary,
        padding: 5,
        width: '100%',
        textAlign: 'center'
    },
    fabButton: {
        backgroundColor: Color.white,
        padding: 0,
        alignSelf:'flex-start',
        position: 'relative',
    },
    panelContainer: {
        flex: 1,
        padding: 15,
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    }
});