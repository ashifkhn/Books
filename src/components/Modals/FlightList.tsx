import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

// Mock flight data
const flightData = [
  {
    id: '1',
    source: 'New York',
    destination: 'Los Angeles',
    duration: '6h 30m',
  },
  {
    id: '2',
    source: 'London',
    destination: 'Paris',
    duration: '2h 30m',
  },
  {
    id: '3',
    source: 'Tokyo',
    destination: 'Sydney',
    duration: '9h 15m',
  },
  {
    id: '4',
    source: 'Dubai',
    destination: 'Istanbul',
    duration: '4h 10m',
  },
  {
    id: '5',
    source: 'Beijing',
    destination: 'Shanghai',
    duration: '2h 20m',
  },
];

const FlightCard = ({data}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>
        {data.source} - {data.destination}
      </Text>
      <Text style={styles.text}>{data.duration}</Text>
    </View>
  );
};

const FlightList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={flightData}
        renderItem={({item}) => <FlightCard data={item} />}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  card: {
    // backgroundColor: 'lightgray',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FlightList;
