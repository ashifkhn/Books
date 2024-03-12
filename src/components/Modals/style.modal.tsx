import { StyleSheet } from "react-native";
import { scale } from "../../utils/utils";
import { Dimensions } from 'react-native';
import StyleConfig from "../../utils/StyleConfig";


export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'white',
    padding: 20,
    marginBottom:20
  },

  fromTo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },

  inputFromTo: {
    width: '45%',
    borderBottomWidth: 1,
    borderBottomColor: '#0373F3',
    marginHorizontal: 10,
    // backgroundColor:"blue"
  },

  header: {
    marginTop: 50,
    marginBottom: 30,
  },
  headerText: {
    fontSize: 24,
    color: '#0373F3',
    textAlign: 'center',
  },
  primaryText: {
    fontWeight: 'bold',
  },
  formContainer: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:"red"
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#0373F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },

  centeredView: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginTop: 22,
  },
  modalView: {
    backgroundColor: 'white',
    // borderRadius: 20,
    height: "100%",
    width: Dimensions.get('screen').width,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  // button: {
  //   borderRadius: 20,
  //   padding: 10,
  //   elevation: 2,
  // },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    // textAlign: 'center',
    fontSize: scale(24),
    fontWeight: 'bold',
    color: StyleConfig.colors.greyLabel,
    marginLeft: scale(10),
    marginTop: scale(10),
  },
  searchBar: {
    marginBottom: scale(20),
    marginHorizontal: 5,
    borderBottomWidth: 0.5,
    fontSize: scale(12),
    color: StyleConfig.colors.darkGrey,
  },

  button2: {
    backgroundColor: '#DDDDDD',
    padding: 8,
    borderRadius: 5,
    marginHorizontal: 5,
    width: 30,
    alignItems: 'center',
  },

  countContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: scale(35),
    justifyContent: 'space-between',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginLeft: 10,
    alignItems: 'center',
  },
  classContainer: {
    
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  classButton: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
  },
  selectedClass: {
    backgroundColor: 'lightblue',
  },
});
