import React from 'react';
import { View, Text,Pressable } from 'react-native';
import { scale } from '../../utils/utils';

 const ItemSeparator = () => {
  return <View style={{ height: 1, backgroundColor: 'lightgrey' }} />;
};

const FlightFromItem = ({ item,sourceDetails,setSourceDetails,setModalVisible}) => {
  return (
    <Pressable
      style={{
        flexDirection: 'row',
        marginVertical: scale(20),
        marginHorizontal: scale(10),
      }}
      onPress={() => {
        console.log(item.displayData.source);
        setSourceDetails(item.displayData.source);
        setModalVisible(false);
      }}>
      <View style={{flex: 1}}>
        <Text>{item.displayData.source.airport.cityName}</Text>
        <Text>{item.displayData.source.airport.airportName}</Text>
      </View>
      <View style={{display:"flex",alignItems:"flex-end"}}>
        <Text>{item.displayData.source.airport.airportCode}</Text>
        <Text>₹{item.fare}</Text>
      </View>
    </Pressable>
  );
};

const FlightToItem = ({ item,destinationDetails,setDestinationDetails,setModalVisible }) => {
  return (
    <Pressable
      style={{
        flexDirection: 'row',
        marginVertical: scale(20),
        marginHorizontal: scale(10),
      }}
      onPress={() => {
        console.log(item.displayData.destination);
        setDestinationDetails(item.displayData.destination);
        setModalVisible(false);
      }}>
      <View style={{flex: 1}}>
        <Text>{item.displayData.destination.airport.cityName}</Text>
        <Text>{item.displayData.destination.airport.airportName}</Text>
      </View>
      <View>
        <Text>{item.displayData.destination.airport.airportCode}</Text>
        <Text>{item.displayData.destination.airport.airportCode}</Text>
      </View>
    </Pressable>
  );
};

export  {FlightFromItem,ItemSeparator,FlightToItem};