import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import StyleConfig from '../../utils/StyleConfig';

const Bookings = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.contentText}>Manage your booking and transactions here.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  header: {
    marginTop: 50,
    marginBottom: 30,
  },
  headerText: {

  },
  primaryText: {
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: {
    fontSize: 18,
    color: StyleConfig.colors.primary,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#0373F3',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  transactionButton: {
    backgroundColor: '#0373F3',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Bookings;
