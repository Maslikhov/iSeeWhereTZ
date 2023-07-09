import React from 'react';
import { View,Text } from 'react-native';
import localization from '../../Assets/localization.json';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { RouteNames } from '../../Navigation/configs';
import Logo_iSeeWhere from '../../Assets/Images/Logo_iSeeWhere.svg'
import { Button } from 'react-native-paper';
import Logout from '../../Components/LogoutButton';

function HomeScreen() {
  const navigation = useNavigation();

  const onPressMap = () => {
    navigation.navigate(RouteNames.MapScreen);
  };
  const onPressUrql= () => {
    navigation.navigate(RouteNames.UrqlScreen);
  };
  
  return (
    <View style={styles.container}>
      <View>
        <Logo_iSeeWhere width={340} height={130}/>
      </View>
      <View style={styles.Auth0Block}>
        <Text style={styles.loggedInText}>
          Auth0 User Status : Logged In
        </Text>
      </View>
      <Button mode="contained" style={styles.nextScreenButton} onPress={onPressMap}>
        {localization.actions.Map}
      </Button>
      <Button mode="contained" style={styles.nextScreenButton} onPress={onPressUrql} >
        {localization.actions.Urql}
      </Button>
      <Logout/>
    </View>
  );
};

export default HomeScreen;
