import React from 'react';
import { View} from 'react-native';
import styles from './styles';
import { RouteNames } from '../../Navigation/configs';
import { useNavigation } from '@react-navigation/native';
import Mapbox from '@rnmapbox/maps';
import { Button } from 'react-native-paper';
import localization from '../../Assets/localization.json';
import { MAP_KEY } from './configs';

function MapBlock() {

  Mapbox.setAccessToken(MAP_KEY);

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate(RouteNames.HomeScreen);
  };

  return (
    <View style={styles.container}>
      <View style={styles.mapBlock}>
        <Mapbox.MapView style={styles.map} />     
      </View>
      <Button mode="contained" style={styles.nextScreenButton} onPress={onPress}>
        {localization.actions.Home}
      </Button>
    </View>
  );
};

export default MapBlock;
