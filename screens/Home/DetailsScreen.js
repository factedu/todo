import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';

const DetailsScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Title>Notifications will appear here!!</Title>
      </View>
    );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});