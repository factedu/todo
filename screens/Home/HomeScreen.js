import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Title, Caption } from 'react-native-paper';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Title>
        F.A.C.T. React Native Starter Kit
      </Title>
      <Caption>
        Developed and Opensourced by : Ravi S. Singh
      </Caption>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});