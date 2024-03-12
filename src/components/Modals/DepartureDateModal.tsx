import React, {useState, useEffect} from 'react';
import {
  Modal,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';
import StyleConfig from '../../utils/StyleConfig';
import {CalendarList, LocaleConfig} from 'react-native-calendars';
import CloseButton from '../CloseButton';
import {styles} from './style.modal';

const DepartureModal = ({
  modalVisible,
  setModalVisible,
  selectedDate,
  setSelectedDate,
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to show loader for 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);
  

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
          <Text style={styles.modalText}>Select Date</Text>
          {loading ? (
            <View style={styles.loaderContainer}>
              <ActivityIndicator size="large" color={StyleConfig.colors.primary} />
            </View>
          ) : (
            <CalendarList
              onDayPress={day => {
                console.log('selected day', day);
                setSelectedDate(day);
                setModalVisible(false);
              }}
              pastScrollRange={0}
              futureScrollRange={12}
              showScrollIndicator={false}
            />
          )}
        </View>
      </View>
    </Modal>
  );
};

export default DepartureModal;
