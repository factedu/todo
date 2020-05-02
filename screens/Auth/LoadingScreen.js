import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import firebase from 'firebase';
class LoadingScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    componentDidMount(){
        this.checkIfLoggedIn();
    }

    checkIfLoggedIn(){
        firebase.auth().onAuthStateChanged(user=>{
            if(user){
                this.props.navigation.navigate('Home');
            }else{
                this.props.navigation.navigate('Login');
            }
        })
    }

    render() {
        return (
            <View style={styles.containser}>
                <ActivityIndicator size='large' />
            </View>
        );
    }
}

export default LoadingScreen;

const styles = StyleSheet.create({
    containser:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});