import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  nextScreenButton: {
    marginBottom: 10,
    paddingHorizontal: 80,
    borderRadius: 5,
    backgroundColor: '#2d3c4c',
  },
  logoutButton: {
    marginHorizontal: 20,
    paddingHorizontal: 60,
    marginTop: 100,
    borderRadius: 5,
    backgroundColor: '#fd5e53',
  },
  loginText: {
    color: 'white',
    textAlign: 'center',
    paddingHorizontal: 80,
    fontSize: 16,
    fontWeight: '700',
  },
  Auth0Block: {
    height: 300,
    width: 300,
    marginBottom: 20,
  },
  Auth0Text: {
    textAlign: 'center',
    paddingTop: 145,
    fontWeight: 'bold',
  },
  loggedInText: {
    textAlign: 'center',
    paddingTop: 145,
    fontWeight: '600',
  },
});
