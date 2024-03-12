import React, { useState } from 'react';
import { Modal, View, Text, Pressable, TextInput, FlatList, StyleSheet, Dimensions, Alert } from 'react-native';
import { ItemSeparator, FlightToItem } from './FlightItem';
import { scale } from '../../utils/utils';
import StyleConfig from '../../utils/StyleConfig';
import { styles } from './style.modal';
import { commonStyles } from '../../utils/CommonStyle';
import CloseButton from '../CloseButton';
import FlightList from './FlightList';
const FlightTo = ({ modalVisible, setModalVisible, flightData, destinationDetails, setDestinationDetails }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter flightData based on searchQuery
  const filteredFlightData = flightData.filter(item =>
    item.displayData.destination.airport.cityName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.displayData.destination.airport.airportName.toLowerCase().includes(searchQuery.toLowerCase())|| item.displayData.destination.airport.cityCode.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
        <CloseButton closeHandler={() => setModalVisible(false)} />
          <Text style={styles.modalText}>Select Destination</Text>
          <TextInput
            style={styles.searchBar}
            value={searchQuery}
            onChangeText={text => setSearchQuery(text)}
            maxLength={200}
            placeholder="Search City/Airport"
          />
          <Text style={commonStyles.fontMedBold}>Popular Cities</Text>
          <FlightList/>
          <View>
            <FlatList
              data={filteredFlightData}
              renderItem={({item}) => (
                <FlightToItem
                  item={item}
                  destinationDetails={destinationDetails}
                  setDestinationDetails={setDestinationDetails}
                  setModalVisible={setModalVisible}
                />
              )}
              keyExtractor={item => item.id}
              ItemSeparatorComponent={ItemSeparator}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default FlightTo;

