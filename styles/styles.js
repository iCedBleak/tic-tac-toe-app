import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // Ensures the image covers the entire screen
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  title: {
    fontSize: 100,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#ecfb77',
  },
  button: {
    backgroundColor: '#56d0ae',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  resultText: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#ecfb77',
  },
  board: {
    backgroundColor: '#24262f',
    padding: 10,
    borderRadius: 10,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
  },
  square: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#56d0ae',
    backgroundColor: '#25363e',
  },
  squareText: {
    fontSize: 150,
    fontWeight: 'bold',
    fontFamily: 'Xanmono-Regular',
    color: '#ecfb77',
  },
});