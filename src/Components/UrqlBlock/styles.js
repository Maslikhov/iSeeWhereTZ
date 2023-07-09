import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent:'center',
    paddingTop: 50,
    marginHorizontal:20,
  },
  nextScreenButton: {
    marginTop:30,
    marginHorizontal: 20,
    paddingHorizontal: 60,
    borderRadius: 5,
    backgroundColor: '#2d3c4c',
    marginBottom:40
  },
  loginText: {
    color: 'white',
    textAlign: 'center',
    paddingHorizontal: 80,
    fontSize: 16,
    fontWeight: '700',
  },
  headerTable:{
    backgroundColor:'#2d3c4c',
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
  },
  titleText:{
    color:'white',
  },
  table:{
    alignContent:'center',
    justifyContent:'center',
    borderWidth:1,
    borderRadius:10,
  }

});
