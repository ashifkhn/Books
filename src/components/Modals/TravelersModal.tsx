import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  Pressable,
  TextInput,
  FlatList,
  StyleSheet,
  Dimensions,
  Alert,
  ToastAndroid,
  TouchableOpacity

} from 'react-native';
import { styles } from './style.modal';
import CloseButton from '../CloseButton';
import { commonStyles } from '../../utils/CommonStyle';
styles

const TravelersModal = ({
  modalVisible,
  setModalVisible,
  travelerDetails,
  setTravelerDetails,
}) => {
  const [selectedClass, setSelectedClass] = useState('economy');

    const incrementAdults = () => {
      setTravelerDetails(prevDetails => ({
        ...prevDetails,
        adults: prevDetails.adults + 1,
      }));
    };

    const decrementAdults = () => {
      if (travelerDetails.adults > 1) {
        setTravelerDetails(prevDetails => ({
          ...prevDetails,
          adults: prevDetails.adults - 1,
        }));
      }
    };

    const incrementChildren = () => {
      setTravelerDetails(prevDetails => ({
        ...prevDetails,
        children: prevDetails.children + 1,
      }));
    };

    const decrementChildren = () => {
      if (travelerDetails.children > 0) {
        setTravelerDetails(prevDetails => ({
          ...prevDetails,
          children: prevDetails.children - 1,
        }));
      }
    };

const incrementInfants = () => {
  // Check if there are adults available to accompany the infant
  if (travelerDetails.adults > travelerDetails.infants) {
    setTravelerDetails(prevDetails => ({
      ...prevDetails,
      infants: prevDetails.infants + 1,
    }));
  } else {
    // If there are no adults available, show a toast message
    ToastAndroid.show(
      'Only one infant is allowed per adult',
      ToastAndroid.SHORT,
    );
  }
};

  const decrementInfants = () => {
    if (travelerDetails.infants > 0) {
      setTravelerDetails(prevDetails => ({
        ...prevDetails,
        infants: prevDetails.infants - 1,
      }));
    }
  };


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
          <View style={{margin: 10, flex: 1}}>
            {/* Display current counts and buttons to increment/decrement */}
            <View style={styles.countContainer}>
              <View>
                <Text style={commonStyles.fontMedBlack}>
                  Adults
                </Text>
                <Text style={commonStyles.fontMed}>12+ years</Text>
              </View>
              <View style={styles.buttonContainer}>
                <Pressable style={styles.button2} onPress={decrementAdults}>
                  <Text>-</Text>
                </Pressable>
                <Text style={commonStyles.fontMedBlack}>
                  {travelerDetails.adults}
                </Text>
                <Pressable style={styles.button2} onPress={incrementAdults}>
                  <Text>+</Text>
                </Pressable>
              </View>
            </View>

            <View style={styles.countContainer}>
              <View>
                <Text style={commonStyles.fontMedBlack}>
                  Children
                </Text>
                <Text style={commonStyles.fontMed}>2-12 years</Text>
              </View>
              <View style={styles.buttonContainer}>
                <Pressable style={styles.button2} onPress={decrementChildren}>
                  <Text>-</Text>
                </Pressable>
                <Text style={commonStyles.fontMedBlack}>
                  {travelerDetails.children}
                </Text>
                <Pressable style={styles.button2} onPress={incrementChildren}>
                  <Text>+</Text>
                </Pressable>
              </View>
            </View>

            <View style={styles.countContainer}>
              <View>
                <Text style={commonStyles.fontMedBlack}>
                  Infants
                </Text>
                <Text style={commonStyles.fontMed}>0-2 years</Text>
              </View>
              <View style={styles.buttonContainer}>
                <Pressable style={styles.button2} onPress={decrementInfants}>
                  <Text>-</Text>
                </Pressable>
                <Text style={commonStyles.fontMedBlack}>
                  {travelerDetails.infants}
                </Text>
                <Pressable style={styles.button2} onPress={incrementInfants}>
                  <Text>+</Text>
                </Pressable>
              </View>
            </View>
            {/* Display the selected date */}
            <Text style={commonStyles.fontMedBold}>Class</Text>
            <View style={styles.classContainer}>
              <Pressable
                style={[
                  styles.classButton,
                  selectedClass === 'economy' && styles.selectedClass,
                ]}
                onPress={() => setSelectedClass('economy')}>
                <Text>Economy</Text>
              </Pressable>
              <Pressable
                style={[
                  styles.classButton,
                  selectedClass === 'premium' && styles.selectedClass,
                ]}
                onPress={() => setSelectedClass('premium')}>
                <Text>Premium Economy</Text>
              </Pressable>
              <Pressable
                style={[
                  styles.classButton,
                  selectedClass === 'business' && styles.selectedClass,
                ]}
                onPress={() => setSelectedClass('business')}>
                <Text>Business</Text>
              </Pressable>
            </View>
            <TouchableOpacity style={commonStyles.button} onPress={() => {
              setModalVisible(false);
            }}>
              <Text style={commonStyles.buttonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default TravelersModal;

