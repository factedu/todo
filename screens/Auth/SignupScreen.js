import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Card, Text, Input, Button } from 'react-native-elements';
import firebase from 'firebase';
import * as GoogleSignIn from 'expo-google-sign-in';
import Colors from '../../constants/Colors';

class SignupScreen extends Component {
    state = {
        loading: false,
        user: null,
        email: null,
        password: null
    };
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    createUserWithEmailAndPassword() {
        const { email, password } = this.state;
        return firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(res => {
                return res;
            })
            .catch(err => {
                console.log(err);
                alert(err + ' If you own this email, you should login!!');
                throw new Error(err);
            });
    }

    render() {
        return (
            <View style={styles.container}>

                <Card
                    title='Create an account'
                    containerStyle={styles.card}
                >
                    {(this.state.loading) ? <ActivityIndicator size='large' /> : null}
                    <Input
                        placeholder='Email'
                        leftIcon={
                            <Icon
                                name='envelope'
                                color='black'
                            />
                        }
                        onChangeText={(text) => this.setState({ email: text })}
                    />
                    <Input
                        placeholder='Password'
                        leftIcon={
                            <Icon
                                name='lock'
                                color='black'
                            />
                        }
                        secureTextEntry={true}
                        onChangeText={(text) => this.setState({ password: text })}
                    />

                    <Button
                        icon={{
                            name: "sign-in",
                            type: 'font-awesome',
                            size: 15,
                            color: "white"
                        }}
                        disabled={!(this.state.email && this.state.password)}
                        buttonStyle={{ backgroundColor: Colors.primary }}
                        loading={false}
                        raised
                        title="Sign Up"
                        onPress={() => this.createUserWithEmailAndPassword()}
                    >
                    </Button>

                </Card>
                <View>
                    <Text style={{ textAlign: 'center', fontSize: 16, padding: 15 }}>Already have account?</Text>
                    <Button
                        icon={{
                            name: "sign-in",
                            type: 'font-awesome',
                            size: 15,
                            color: "white"
                        }}
                        buttonStyle={{ backgroundColor: Colors.primary2 }}
                        titleStyle={{ color: 'white' }}
                        loading={false}
                        raised
                        title="Login"
                        onPress={() => this.props.navigation.navigate('Login')}
                    >
                    </Button>
                </View>
            </View>
        );
    }
}

export default SignupScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: Colors.primary
    },
    card: {
        width: '90%',
        paddingHorizontal: 20,
        marginHorizontal: 20,
        borderRadius: 25,
        backgroundColor: 'white'
    },
    buttonContainer: {
        top: 20
    },
    button: {
        backgroundColor: Colors.secondry,
        height: 50,
        borderRadius: 25,
        paddingHorizontal: 50,
    }
})