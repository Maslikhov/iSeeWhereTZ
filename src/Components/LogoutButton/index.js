import {useAuth0} from 'react-native-auth0';
import {useNavigation} from '@react-navigation/native';
import {RouteNames} from '../../Navigation/configs';
import styles from './styles';
import localization from '../../Assets/localization.json';
import {Button} from 'react-native-paper';

const Logout = () => {
  const {clearSession} = useAuth0();

  const navigation = useNavigation();

  const onLogout = async () => {
    try {
      await clearSession();
      navigation.navigate(RouteNames.WelcomeScreen);
    } catch (e) {
      console.log('Log out cancelled');
    }
  };

  return (
    <Button mode="contained" style={styles.logoutButton} onPress={onLogout}>
      {localization.actions.Logout}
    </Button>
  );
};
export default Logout;
