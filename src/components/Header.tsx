import { View, Text ,StyleSheet, Pressable} from 'react-native'
import React from 'react'
import StyleConfig from '../utils/StyleConfig';
import { scale } from '../utils/utils';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
const Header = ({back}) => {

  const navigation=useNavigation()
  const goToPreviousScreen=()=>{
  navigation.goBack()
  }

  return (
    <View style={styles.headerContainer}>
      {back ? (
        <Pressable onPress={goToPreviousScreen}> 
          <Icon name="arrow-back" size={20} />
        </Pressable>
        
      ) : (
        <Icon name="reorder-three" size={32} />
      )}
    </View>
  );
}

export default Header


const styles = StyleSheet.create({
  headerContainer: {
    height:scale(50),
    display:"flex",
    flexDirection:"row",
    backgroundColor:StyleConfig.colors.white,
    justifyContent:"space-between",
    padding:scale(10),
    alignItems:"center",
    elevation: 2,  
  },
});