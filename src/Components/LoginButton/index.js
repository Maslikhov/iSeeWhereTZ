import React from "react";
import { useAuth0 } from "react-native-auth0";
import { useNavigation } from '@react-navigation/native';
import { RouteNames } from "../../../Navigation/configs";
import { Button } from "react-native-paper";
import localization from '../../../Assets/localization.json';
import styles from "./styles";

export default Login = () => {

  const {authorize,users,isLoading} = useAuth0();

  const navigation = useNavigation();

  const onLogin = async () => {
    try {
      await authorize({scope: 'openid profile email'});
      console.log(`users=${users}`);
      console.log(`isLoading=${isLoading}`);
      navigation.navigate(RouteNames.HomeScreen);
    } catch (e) {
      console.log(e);
    }
  };

  return(
    <Button mode="contained" style={styles.loginButton} onPress={onLogin}>
      {localization.actions.Login}
    </Button>
  );
};
//maslikhov20@gmail.com Qwer1234