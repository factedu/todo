import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { DefaultTheme, Divider, Text, TextInput, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Color from './../constants/Colors';
import moment from 'moment';
import TodoService from './../services/todo.service';
window.addEventListener = x => x;
const theme = {
    ...DefaultTheme,
    // roundness: 15,
    colors: {
        ...DefaultTheme.colors,
        primary: Color.primary,
        accent: '#f1c40f',
        background: '#ffffff',
        placeholder: Color.primary
    },
};

export default class TodoForm extends React.Component {
    state = {
        title: '',
        description: '',
        saving: false
    };
    constructor(props) {
        super(props);
    }

    blurAllInput() {
        this._txtDescription.blur();
        this._txtTitle.blur();
    }

    add() {
        this.setState({ saving: true });
        return TodoService.add(this.props.date,this.state.title,this.state.description)
            .then(res=>{
                console.log(res);
                this._txtTitle.clear();
                this._txtDescription.clear();
                this.props.getList(this.props.date);
                return res;
            })
            .catch(err=>{
                console.log(err);
                return err;
            })
            .finally(()=>{                
                this.setState({saving:false});
            })
    }

    render() {
        // console.log(this._panel.state);
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.blurAllInput()}>
                    <View style={styles.formHeader}>
                        <Text style={styles.formTitle}>Add for {moment(this.props.date).format('ddd Do')}</Text>
                    </View>
                </TouchableOpacity>
                <View style={{ flex: 1 }}>
                    <TextInput
                        ref={c => this._txtTitle = c}
                        label='Title'
                        mode={'outlined'}
                        theme={theme}
                        value={this.state.title}
                        style={{ backgroundColor: '#fff', borderColor: Color.primary }}
                        onChangeText={title => this.setState({ title })}
                    />
                    <TextInput
                        ref={c => this._txtDescription = c}
                        label='Description'
                        mode={'outlined'}
                        theme={theme}
                        multiline={true}
                        numberOfLines={5}
                        value={this.state.description}
                        onChangeText={description => this.setState({ description })}
                    />
                    <Button
                        loading={this.state.saving}
                        icon="upload"
                        style={{ top: 15 }}
                        mode={'outlined'}
                        color={Color.primary}
                        onPress={() => this.add()}>
                        Save Todo
                    </Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.white,
        padding: 0,
    },
    formTitle: {
        fontSize: 20,
        textAlign: 'center',
        color: '#fff',
    },
    formHeader: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: Color.primary,
        width: '110%',
        alignSelf: 'center',
        height: 50,
        top: -15,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25
    }
});