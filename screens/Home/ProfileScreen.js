import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Avatar, Button, Card, TextInput, Paragraph } from 'react-native-paper';
import firebase from 'firebase';

const ProfileScreen = () => {
  const [user, setUserProfile] = React.useState(firebase.auth().currentUser);
  const [loading, setLoading] = React.useState(false);
  const [sending, setSending] = React.useState(false);
  const [displayName, setDisplayName] = React.useState(firebase.auth().currentUser.displayName);
  const LeftContent = props => <Avatar.Icon {...props} icon="account-edit" />
  const updateProfile = () => {
    setLoading(true);
    user.updateProfile({
      displayName: displayName,
      photoURL: "https://api.adorable.io/avatars/285/" + displayName + '.png'
    }).then(() => {
      alert('Profile Updated!!');
      // Alert.alert('Profile Updated','Your profile has been update successfully.');
    }).catch((error) => {
      // An error happened.
      alert(error);
    }).finally(() => {
      setLoading(false);
    });
  };

  const sendVerificationEmail = () => {
    setSending(true);
    user.sendEmailVerification().then(res => {
      alert('Email sent to ' + user.email);
    }).catch(err => {
      alert(err);
    })
      .finally(() => {
        setSending(false);
      })
  };

  let verifyEmailButton = null;
  if (!user.emailVerified) {
    verifyEmailButton = (
      <Card style={{ width: '80%' }}>
        <Card.Title style={{ alignContent: 'center' }} title="Email not verified!!" />
        <Card.Content>
          <Paragraph>Your email is not verified yest. We can send you verification mail again!!</Paragraph>
        </Card.Content>
        <Card.Actions style={{ justifyContent: 'center', marginVertical: 15 }}>
          <Button
            onPress={() => sendVerificationEmail()}
            style={{ bottom: 15 }}
            icon="email" mode="outlined" uppercase={false}
            loading={sending}
          >
            Send Verification Email
          </Button>
        </Card.Actions>
      </Card>
    );
  }
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
      {verifyEmailButton}
      <View>
        <Button
          onPress={() => updateProfile()}
          style={{ bottom: 15 }}
          icon="account-edit" mode="outlined" uppercase={false}
          loading={loading}
        >
          Update My Profile
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