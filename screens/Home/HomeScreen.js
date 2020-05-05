import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors, IconButton, Surface, Text, Title, Caption } from 'react-native-paper';

// import Colors from './../../constants/Colors';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.appTiles}>
        <View style={styles.tile}>
          <IconButton
            icon="checkbox-multiple-marked-circle-outline"
            color={Colors.blue400}
            size={56}
            onPress={() => console.log('Pressed')}
            style={styles.tileIcon}
          />
          <Text style={{color:Colors.blue400, fontWeight:'600',top:0}}>TODO</Text>
        </View>

      </View>
      <View style={styles.developerInfo}>
        <Title>
          F.A.C.T. React Native Starter Kit
      </Title>
        <Caption>
          Developed and Opensourced by : Ravi S. Singh
      </Caption>
      </View>

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
  appTiles: {
    width:'100%',
    flex: 1,
    flexDirection:'row',
    flexWrap:'wrap',
    alignItems:'flex-start',
    justifyContent:'space-around',
    padding:20
  },
  tile: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical:0
  },
  tileIcon:{
    borderWidth:2,
    borderColor:Colors.blue400,
    borderRadius:25,
  },
  developerInfo: {
    bottom: 10,
  }
});