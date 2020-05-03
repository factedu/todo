import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';

const ExploreScreen = () => {
    return (
      <View style={styles.container}>
        <Title>Explore more with F.A.C.T.</Title>
      </View>
    );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});