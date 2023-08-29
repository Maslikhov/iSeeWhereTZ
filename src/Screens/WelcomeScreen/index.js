import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import Logo_iSeeWhere from '../../Assets/Images/Logo_iSeeWhere.svg';
import Login from '../../Components/LoginButton';

function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <Logo_iSeeWhere width={340} height={200} />
        <Login />
      </View>
    </View>
  );
}

export default WelcomeScreen;
