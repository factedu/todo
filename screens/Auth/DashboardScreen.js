import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
class DashboardScreen extends Component {
    state={
        user:null
    };
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.checkIfLoggedIn();
    }

    checkIfLoggedIn(){
        const user = firebase.auth().currentUser;
        console.log(user);
        if(user){
            this.setState({user:user});
        }else{
            this.props.navigation.navigate('Login');
        }
    }
    render() {
        return (
            <View>
                <Text>{JSON.stringify(this.state.user)}</Text>
            </View>
        );
    }
}

export default DashboardScreen;