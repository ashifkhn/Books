import React, { useState } from 'react';
import { Modal, View, Text, Pressable, TextInput, FlatList, StyleSheet, Dimensions, Alert } from 'react-native';
import { ItemSeparator, FlightFromItem } from './FlightItem';
import { styles } from './style.modal';
import { commonStyles } from '../../utils/CommonStyle';
import CloseButton from '../CloseButton';
import FlightList from './FlightList';

const FlightFrom = ({ modalVisible, setModalVisible, flightData, sourceDetails, setSourceDetails,sortByFare }) => {
  const [searchQuery, setSearchQuery] = useState('');


  const filteredFlightData = flightData.filter(item => {
    const cityName = item.displayData.source.airport.cityName.toLowerCase();
    const airportName = item.displayData.source.airport.airportName.toLowerCase();
    const cityCode = item.displayData.source.airport.cityCode.toLowerCase();
    return cityName.includes(searchQuery.toLowerCase()) || airportName.includes(searchQuery.toLowerCase())||cityCode.includes(searchQuery.toLowerCase());
  });

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <CloseButton closeHandler={() => setModalVisible(false)} />
          <Text style={styles.modalText}>Select Departure</Text>
          <TextInput
            style={styles.searchBar}
            value={searchQuery}
            onChangeText={text => setSearchQuery(text)}
            maxLength={200}
            placeholder="Search City/Airport"
          />
          <Text style={commonStyles.fontMedBold}>Popular Cities</Text>
          <FlightList />
          <View>
            <FlatList
              data={filteredFlightData}
              renderItem={({item}) => (
                <FlightFromItem
                  item={item}
                  sourceDetails={sourceDetails}
                  setSourceDetails={setSourceDetails}
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

export default FlightFrom;

