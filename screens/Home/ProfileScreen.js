import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar, Button, Card, TextInput, Paragraph } from 'react-native-paper';
import firebase from 'firebase';

const ProfileScreen = () => {
  const [user, setUserProfile] = React.useState(firebase.auth().currentUser);
  const [loading,setLoading]=React.useState(false);
  const [displayName, setDisplayName] = React.useState(firebase.auth().currentUser.displayName);
  const LeftContent = props => <Avatar.Icon {...props} icon="account-edit" />
  const updateProfile = () => {
    setLoading(true);
    user.updateProfile({
      displayName: displayName,
      photoURL: "https://api.adorable.io/avatars/285/"+displayName+'.png'
    }).then(()=> {
      alert('Profile Updated!!');
    }).catch((error)=> {
      // An error happened.
      alert(error);
    }).finally(()=>{
      setLoading(false);
    });
    
  };
  return (
    <View style={styles.container}>
      <Card style={{ width: '100%' }}>
        <Card.Title title={displayName} subtitle={user.email} left={LeftContent} />
        {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
        <Card.Content>
          <TextInput
            label='Display Name'
            mode='outlined'
            value={displayName}
            onChangeText={text => setDisplayName(text)}
          />

        </Card.Content>
      </Card>
      <View>
        <Button
          onPress={() => updateProfile()}
          style={{ bottom: 15 }}
          icon="account-edit" mode="outlined" uppercase={false}
          loading={loading}
        >
          Update Profile
        </Button>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});