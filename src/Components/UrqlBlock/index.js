import React, {useEffect,useLayoutEffect,useState}from 'react';
import {View ,Text, FlatList} from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { RouteNames } from '../../Navigation/configs';
import { Button, DataTable } from 'react-native-paper';
import localization from '../../Assets/localization.json'

function UrqlBlock() {

  const navigation = useNavigation();

  const [data,setData] = useState([]);

  const onPress = () => {
    navigation.navigate(RouteNames.HomeScreen);
  };

  useEffect(() => {
    const getInfo = async () =>{
      const response = await fetch('http://swapi.dev/api/people/');
      const json = await response.json();
      setData([...json.results])
    }
    getInfo()
  }, []);
  
  return (
    <View style={styles.container}>
      <DataTable style={styles.table}>
        <DataTable.Header style={styles.headerTable}>
          <DataTable.Title>
            <Text style={styles.titleText}>
              Name
            </Text>
          </DataTable.Title>
          <DataTable.Title>
            <Text style={styles.titleText}>
              Gender
            </Text>
          </DataTable.Title>
          <DataTable.Title >
            <Text style={styles.titleText}>
              Birth Year
            </Text>
          </DataTable.Title>
        </DataTable.Header>
        <FlatList
          data={data}
          keyExtractor = {(item, index) => `${index}`}
          renderItem={({ item }) => (
          <View>
            <DataTable.Row key={data}>
              <DataTable.Cell >{item.name}</DataTable.Cell>
              <DataTable.Cell >{item.gender}</DataTable.Cell>
              <DataTable.Cell >{item.birth_year}</DataTable.Cell>
            </DataTable.Row>
          </View>
        )}/>
      </DataTable>
      <Button mode="contained" style={styles.nextScreenButton} onPress={onPress}>
        {localization.actions.Home}
      </Button>
    </View>
  );
};

export default UrqlBlock;
