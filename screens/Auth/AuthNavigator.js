import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoadingScreen from './LoadingScreen';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import DashboardScreen from './DashboardScreen';

const AuthStackNavigator = createStackNavigator();
const INITIAL_ROUTE_NAME = 'Loading';

export default function AuthNavigator() {
    return (
        <AuthStackNavigator.Navigator screenOptions={{headerShown:false}} headerMode={"none"} mode={"card"} initialRouteName={INITIAL_ROUTE_NAME}>
            <AuthStackNavigator.Screen name="Loading" component={LoadingScreen} options={{ headerShown: false }} />
            <AuthStackNavigator.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <AuthStackNavigator.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
            <AuthStackNavigator.Screen name="Dashboard" component={DashboardScreen} options={{ headerShown: false }} />
        </AuthStackNavigator.Navigator>
    );
}