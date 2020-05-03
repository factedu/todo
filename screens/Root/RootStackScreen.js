import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from "../../navigation/BottomTabNavigator";
import DashboardScreen from '../Auth/DashboardScreen';

const RootStackNavigator = createStackNavigator();
const INITIAL_ROUTE_NAME = 'Root';

const HomeStackScreen = ({ navigation }) => (
    <RootStackNavigator.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <RootStackNavigator.Screen name="Home" component={DashboardScreen} options={{
            title: 'Overview',
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
        }} />
    </RootStackNavigator.Navigator>
);

export default HomeStackScreen;