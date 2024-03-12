/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{useEffect} from 'react';
import StackNavigator from './src/navigation/StackNavigator';
import { Alert } from 'react-native';



function App(): JSX.Element {
  return (
    <StackNavigator/>
  );
}


export default App;


// import React from 'react';
// import {View, Text, Pressable} from 'react-native';
// import {scale} from '../../utils/utils';

// const ItemSeparator = () => {
//   return <View style={{height: 1, backgroundColor: 'lightgrey'}} />;
// };

// const FlightFromItem = ({
//   item,
//   sourceDetails,
//   setSourceDetails,
//   setModalVisible,
// }) => {
//   return (
//     <Pressable
//       style={{
//         flexDirection: 'row',
//         marginVertical: scale(20),
//         marginHorizontal: scale(10),
//         // paddingBottom: scale(30),
//       }}
//       onPress={() => {
//         console.log(item);
//         setSourceDetails(item);
//         setModalVisible(false);
//       }}>
//       <View style={{flex: 1}}>
//         <Text>{item.origin}</Text>
//         <Text>{item.airline}</Text>
//       </View>
//       <View>
//         <Text>{item.duration}</Text>
//       </View>
//     </Pressable>
//   );
// };

// const FlightToItem = ({
//   item,
//   destinationDetails,
//   setDestinationDetails,
//   setModalVisible,
// }) => {
//   return (
//     <Pressable
//       style={{
//         flexDirection: 'row',
//         marginVertical: scale(20),
//         marginHorizontal: scale(10),
//         // paddingBottom: scale(30),
//       }}
//       onPress={() => {
//         console.log(item);
//         setDestinationDetails(item);
//         setModalVisible(false);
//       }}>
//       <View style={{flex: 1}}>
//         <Text>{item.origin}</Text>
//         <Text>{item.airline}</Text>
//       </View>
//       <View>
//         <Text>{item.duration}</Text>
//       </View>
//     </Pressable>
//   );
// };

// export {FlightFromItem, ItemSeparator, FlightToItem};