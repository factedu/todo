import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator, Image, ImageBackground } from 'react-native';
import firebase from 'firebase';
const splash = require('../../assets/images/splash.png');
class LoadingScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        this.checkIfLoggedIn();
    }

    checkIfLoggedIn() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                // TODO:: handle user logged in (it is auto handled by router at App.js)
                // this.props.navigation.navigate('Home');
            } else {
                this.props.navigation.navigate('Login');
            }
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require('./../../assets/images/splash.png')}
                    style={{ width: '100%', height: '100%', justifyContent:'center' }}
                >
                    <ActivityIndicator size='large' />
                </ImageBackground>
            </View>
        );
    }
}

export default LoadingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});