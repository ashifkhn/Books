import React from 'react';
import { View, Text,Pressable } from 'react-native';
import { scale } from '../../utils/utils';

 const ItemSeparator = () => {
  return <View style={{ height: 1, backgroundColor: 'lightgrey' }} />;
};



const BookItem = () => {
  return (
    <Pressable
      style={{
        flexDirection: 'row',
        marginVertical: scale(20),
        marginHorizontal: scale(10),
      }}
      onPress={() => {
       
      }}>
      <View style={{flex: 1}}>
        {/* <Text>{item.displayData.destination.airport.cityName}</Text> */}
        {/* <Text>{item.displayData.destination.airport.airportName}</Text> */}
      </View>
      <View>
        {/* <Text>{item.displayData.destination.airport.airportCode}</Text> */}
        {/* <Text>{item.displayData.destination.airport.airportCode}</Text> */}
      </View>
    </Pressable>
  );
};

export  {FlightFromItem,ItemSeparator,FlightToItem};