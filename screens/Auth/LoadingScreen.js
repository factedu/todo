import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
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
                // TODO:: handle user logged in (it is auto handled by router at App.js)
                // this.props.navigation.navigate('Home');
            }else{
                this.props.navigation.navigate('Login');
            }
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size='large' />
            </View>
        );
    }
}

export default LoadingScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});