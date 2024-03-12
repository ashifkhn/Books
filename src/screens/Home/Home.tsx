import React, {useState, useEffect, useCallback, useMemo, useRef} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Switch,
  Modal,
  Pressable,
  Alert,
  Dimensions,
  FlatList,
  ScrollView
} from 'react-native';
import axios from 'axios';
import {scale} from '../../utils/utils';
import StyleConfig from '../../utils/StyleConfig';
import FlightFrom from '../../components/Modals/CustomModal';
import FlightTo from '../../components/Modals/FlightTo';
import DepartureModal from '../../components/Modals/DepartureDateModal';
import TravelersModal from '../../components/Modals/TravelersModal';
import LinearGradient from 'react-native-linear-gradient';
import { commonStyles } from '../../utils/CommonStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { ScrollView } from 'react-native-gesture-handler';




const flightData1 = [
  {
    id: '88jnjn1',
    fare: 3840,
    displayData: {
      source: {
        airport: {
          cityCode: 'BOM',
          cityName: 'Bombay',
          terminal: '3',
          airportCode: 'BOM',
          airportName: 'Bombay Airport',
          countryCode: 'IN',
          countryName: 'India',
        },
        depTime: '2023-03-31T06:20',
      },
      airlines: [
        {
          airlineCode: 'AB',
          airlineName: 'JetSpice',
          flightNumber: '1234',
        },
      ],
      stopInfo: 'Non stop',
      destination: {
        airport: {
          cityCode: 'BOM',
          cityName: 'Mumbai',
          terminal: '2',
          airportCode: 'BOM',
          airportName: 'Mumbai',
          countryCode: 'IN',
          countryName: 'India',
        },
        arrTime: '2023-03-31T08:40',
      },
      totalDuration: '2h 20m',
    },
  },
  {
    id: '1dkandnidna',
    fare: 3850,
    displayData: {
      source: {
        airport: {
          cityCode: 'DEL',
          cityName: 'Delhi',
          terminal: '3',
          airportCode: 'DEL',
          airportName: 'Indira Gandhi Airport',
          countryCode: 'IN',
          countryName: 'India',
        },
        depTime: '2023-03-31T06:20',
      },
      airlines: [
        {
          airlineCode: 'AB',
          airlineName: 'JetSpice',
          flightNumber: '1234',
        },
      ],
      stopInfo: 'Non stop',
      destination: {
        airport: {
          cityCode: 'BOM',
          cityName: 'Mumbai',
          terminal: '2',
          airportCode: 'BOM',
          airportName: 'Mumbai',
          countryCode: 'IN',
          countryName: 'India',
        },
        arrTime: '2023-03-31T08:40',
      },
      totalDuration: '2h 20m',
    },
  },
  {
    id: '1djanjdna',
    fare: 3860,
    displayData: {
      source: {
        airport: {
          cityCode: 'DEL',
          cityName: 'Delhi',
          terminal: '3',
          airportCode: 'DEL',
          airportName: 'Indira Gandhi Airport',
          countryCode: 'IN',
          countryName: 'India',
        },
        depTime: '2023-03-31T06:20',
      },
      airlines: [
        {
          airlineCode: 'AB',
          airlineName: 'JetSpice',
          flightNumber: '1234',
        },
      ],
      stopInfo: 'Non stop',
      destination: {
        airport: {
          cityCode: 'BOM',
          cityName: 'Mumbai',
          terminal: '2',
          airportCode: 'BOM',
          airportName: 'Mumbai',
          countryCode: 'IN',
          countryName: 'India',
        },
        arrTime: '2023-03-31T08:40',
      },
      totalDuration: '2h 20m',
    },
  },
  {
    id: 'djad1djna',
    fare: 3870,
    displayData: {
      source: {
        airport: {
          cityCode: 'DEL',
          cityName: 'Delhi',
          terminal: '3',
          airportCode: 'DEL',
          airportName: 'Indira Gandhi Airport',
          countryCode: 'IN',
          countryName: 'India',
        },
        depTime: '2023-03-31T06:20',
      },
      airlines: [
        {
          airlineCode: 'AB',
          airlineName: 'JetSpice',
          flightNumber: '1234',
        },
      ],
      stopInfo: 'Non stop',
      destination: {
        airport: {
          cityCode: 'BOM',
          cityName: 'Mumbai',
          terminal: '2',
          airportCode: 'BOM',
          airportName: 'Mumbai',
          countryCode: 'IN',
          countryName: 'India',
        },
        arrTime: '2023-03-31T08:40',
      },
      totalDuration: '2h 20m',
    },
  },
  {
    id: '1dmsnd',
    fare: 3880,
    displayData: {
      source: {
        airport: {
          cityCode: 'DEL',
          cityName: 'Delhi',
          terminal: '3',
          airportCode: 'DEL',
          airportName: 'Indira Gandhi Airport',
          countryCode: 'IN',
          countryName: 'India',
        },
        depTime: '2023-03-31T06:20',
      },
      airlines: [
        {
          airlineCode: 'AB',
          airlineName: 'JetSpice',
          flightNumber: '1234',
        },
      ],
      stopInfo: 'Non stop',
      destination: {
        airport: {
          cityCode: 'BOM',
          cityName: 'Mumbai',
          terminal: '2',
          airportCode: 'BOM',
          airportName: 'Mumbai',
          countryCode: 'IN',
          countryName: 'India',
        },
        arrTime: '2023-03-31T08:40',
      },
      totalDuration: '2h 20m',
    },
  },
  {
    id: '1dajndja',
    fare: 38401,
    displayData: {
      source: {
        airport: {
          cityCode: 'DEL',
          cityName: 'Delhi',
          terminal: '3',
          airportCode: 'DEL',
          airportName: 'Indira Gandhi Airport',
          countryCode: 'IN',
          countryName: 'India',
        },
        depTime: '2023-03-31T06:20',
      },
      airlines: [
        {
          airlineCode: 'AB',
          airlineName: 'JetSpice',
          flightNumber: '1234',
        },
      ],
      stopInfo: 'Non stop',
      destination: {
        airport: {
          cityCode: 'BOM',
          cityName: 'Mumbai',
          terminal: '2',
          airportCode: 'BOM',
          airportName: 'Mumbai',
          countryCode: 'IN',
          countryName: 'India',
        },
        arrTime: '2023-03-31T08:40',
      },
      totalDuration: '2h 20m',
    },
  },
  {
    id: 'jdn11jdn1',
    fare: 999999,
    displayData: {
      source: {
        airport: {
          cityCode: 'DEL',
          cityName: 'Delhi',
          terminal: '3',
          airportCode: 'DEL',
          airportName: 'Indira Gandhi Airport',
          countryCode: 'IN',
          countryName: 'India',
        },
        depTime: '2023-03-31T06:20',
      },
      airlines: [
        {
          airlineCode: 'AB',
          airlineName: 'JetSpice',
          flightNumber: '1234',
        },
      ],
      stopInfo: 'Non stop',
      destination: {
        airport: {
          cityCode: 'BOM',
          cityName: 'Mumbai',
          terminal: '2',
          airportCode: 'BOM',
          airportName: 'Mumbai',
          countryCode: 'IN',
          countryName: 'India',
        },
        arrTime: '2023-03-31T08:40',
      },
      totalDuration: '2h 20m',
    },
  },
  {
    id: '1wnj',
    fare: 38140,
    displayData: {
      source: {
        airport: {
          cityCode: 'DEL',
          cityName: 'Delhi',
          terminal: '3',
          airportCode: 'DEL',
          airportName: 'Indira Gandhi Airport',
          countryCode: 'IN',
          countryName: 'India',
        },
        depTime: '2023-03-31T06:20',
      },
      airlines: [
        {
          airlineCode: 'AB',
          airlineName: 'JetSpice',
          flightNumber: '1234',
        },
      ],
      stopInfo: 'Non stop',
      destination: {
        airport: {
          cityCode: 'BOM',
          cityName: 'Mumbai',
          terminal: '2',
          airportCode: 'BOM',
          airportName: 'Mumbai',
          countryCode: 'IN',
          countryName: 'India',
        },
        arrTime: '2023-03-31T08:40',
      },
      totalDuration: '2h 20m',
    },
  },
  {
    id: '1www',
    fare: 384000,
    displayData: {
      source: {
        airport: {
          cityCode: 'DEL',
          cityName: 'Delhi',
          terminal: '3',
          airportCode: 'DEL',
          airportName: 'Indira Gandhi Airport',
          countryCode: 'IN',
          countryName: 'India',
        },
        depTime: '2023-03-31T06:20',
      },
      airlines: [
        {
          airlineCode: 'AB',
          airlineName: 'JetSpice',
          flightNumber: '1234',
        },
      ],
      stopInfo: 'Non stop',
      destination: {
        airport: {
          cityCode: 'BOM',
          cityName: 'Mumbai',
          terminal: '2',
          airportCode: 'BOM',
          airportName: 'Mumbai',
          countryCode: 'IN',
          countryName: 'India',
        },
        arrTime: '2023-03-31T08:40',
      },
      totalDuration: '2h 20m',
    },
  },
  {
    id: '1wjnwjw',
    fare: 380140,
    displayData: {
      source: {
        airport: {
          cityCode: 'DEL',
          cityName: 'Delhi',
          terminal: '3',
          airportCode: 'DEL',
          airportName: 'Indira Gandhi Airport',
          countryCode: 'IN',
          countryName: 'India',
        },
        depTime: '2023-03-31T06:20',
      },
      airlines: [
        {
          airlineCode: 'AB',
          airlineName: 'JetSpice',
          flightNumber: '1234',
        },
      ],
      stopInfo: 'Non stop',
      destination: {
        airport: {
          cityCode: 'BOM',
          cityName: 'Mumbai',
          terminal: '2',
          airportCode: 'BOM',
          airportName: 'Mumbai',
          countryCode: 'IN',
          countryName: 'India',
        },
        arrTime: '2023-03-31T08:40',
      },
      totalDuration: '2h 20m',
    },
  },
  {
    id: '1w1w1w1w1',
    fare: 381140,
    displayData: {
      source: {
        airport: {
          cityCode: 'DEL',
          cityName: 'Delhi',
          terminal: '3',
          airportCode: 'DEL',
          airportName: 'Indira Gandhi Airport',
          countryCode: 'IN',
          countryName: 'India',
        },
        depTime: '2023-03-31T06:20',
      },
      airlines: [
        {
          airlineCode: 'AB',
          airlineName: 'JetSpice',
          flightNumber: '1234',
        },
      ],
      stopInfo: 'Non stop',
      destination: {
        airport: {
          cityCode: 'BOM',
          cityName: 'Mumbai',
          terminal: '2',
          airportCode: 'BOM',
          airportName: 'Mumbai',
          countryCode: 'IN',
          countryName: 'India',
        },
        arrTime: '2023-03-31T08:40',
      },
      totalDuration: '2h 20m',
    },
  },
  
  {
    id: '1wllll',
    fare: 38140,
    displayData: {
      source: {
        airport: {
          cityCode: 'DEL',
          cityName: 'Delhi',
          terminal: '3',
          airportCode: 'DEL',
          airportName: 'Indira Gandhi Airport',
          countryCode: 'IN',
          countryName: 'India',
        },
        depTime: '2023-03-31T06:20',
      },
      airlines: [
        {
          airlineCode: 'AB',
          airlineName: 'JetSpice',
          flightNumber: '1234',
        },
      ],
      stopInfo: 'Non stop',
      destination: {
        airport: {
          cityCode: 'BOM',
          cityName: 'Mumbai',
          terminal: '2',
          airportCode: 'BOM',
          airportName: 'Mumbai',
          countryCode: 'IN',
          countryName: 'India',
        },
        arrTime: '2023-03-31T08:40',
      },
      totalDuration: '2h 20m',
    },
  },
];

const Home = () => {
  const [modalVisibleFrom, setModalVisibleFrom] = useState(false);
  const [modalVisibleTo, setModalVisibleTo] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [flightData, setFlightData] = useState([]);
  const [sourceDetails, setSourceDetails] = useState({})
  const [destinationDetails, setDestinationDetails] = useState({})
  const [modalDeparture, setModalDeparture] = useState(false)
  const [selectedDate, setSelectedDate]=useState({})
  const [modalTraveler, setModalTraveler] = useState(false)
  const [travelerDetails,setTravelerDetails] = useState({
    adults: 1,
    children: 0,
    infants: 0
  })
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const swapCities=()=>{
    let temp = sourceDetails;
    setSourceDetails(destinationDetails)
    setDestinationDetails(temp)
  }

 

  console.log(travelerDetails)

  const fetchFlightData = async () => {
    try {
      const response = await axios.get(
        'https://mocki.io/v1/de081a9f-8d26-4f91-922c-04b0269d4766',
      );
      console.log('Flight data:', JSON.stringify(response.data.data.result));
      setFlightData(response.data.data.result);
    } catch (error) {
      console.error('Error fetching flight data:', error);
      // Handle error as needed
    }
  };

  const handleSearchFlights = () => {
    // Implement flight search logic here
    console.log('Searching flights...');
  };

  useEffect(() => {
    fetchFlightData();
  }, []);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#8d0b93', '#7524ac', '#7524ac']}
        style={{
          flex: 1,
          position: 'absolute',
          width: Dimensions.get('window').width,
          height: '60%',
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        }}
        start={{x: 1, y: 0}}
        end={{x: 1, y: 1}}
        locations={[0.0704, 0.9638, 1.5433]}>
        <Text></Text>
      </LinearGradient>

      <View style={styles.formContainer}>
        <View>
          <View style={styles.fromTo}>
            <Pressable
              style={styles.inputFromTo}
              onPress={() => setModalVisibleFrom(true)}>
              <Text>From</Text>
              <TextInput
                placeholder="Select City"
                value={sourceDetails?.airport?.cityName}
                editable={false}
                style={styles.textInput}
              />
            </Pressable>

            <Pressable
              style={{
                width: '10%,',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={swapCities}>
              <Icon
                name={'arrow-left-right'}
                size={24}
                color={StyleConfig.colors.primary}
              />
            </Pressable>

            <Pressable
              style={styles.inputFromTo}
              onPress={() => setModalVisibleTo(true)}>
              <Text>To</Text>
              <TextInput
                placeholder="Select City"
                value={destinationDetails?.airport?.cityName}
                onChangeText={text => setToLocation(text)}
                editable={false}
                style={styles.textInput}
              />
            </Pressable>
          </View>
          <View style={styles.fromTo}>
            <Pressable
              style={styles.inputDeparture}
              onPress={() => setModalDeparture(true)}>
              <Text>Departure Date</Text>
              <TextInput
                placeholder="Select Date"
                value={selectedDate?.dateString}
                editable={false}
                style={styles.textInput}
              />
            </Pressable>
          </View>
          <View style={styles.fromTo}>
            <Pressable
              style={styles.inputDeparture}
              onPress={() => setModalTraveler(true)}>
              <Text>Travelers & Cabin Class</Text>
              <TextInput
                placeholder="Select"
                value={
                  travelerDetails?.adults +
                  ' Adults, ' +
                  travelerDetails?.children +
                  ' Children, ' +
                  travelerDetails?.infants +
                  ' Infants' +
                  ' : '
                }
                editable={false}
                style={styles.textInput}
              />
            </Pressable>
          </View>
          <View style={styles.nonStopFlights}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />
            <Text>Show Non-stop flights only</Text>
          </View>

          <FlightFrom
            modalVisible={modalVisibleFrom}
            setModalVisible={setModalVisibleFrom}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            flightData={flightData1}
            setSourceDetails={setSourceDetails}
            sourceDetails={sourceDetails}
          />

          <FlightTo
            modalVisible={modalVisibleTo}
            setModalVisible={setModalVisibleTo}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            flightData={flightData1}
            setDestinationDetails={setDestinationDetails}
            destinationDetails={destinationDetails}
          />

          <DepartureModal
            modalVisible={modalDeparture}
            setModalVisible={setModalDeparture}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            setModalVisible={setModalDeparture}
          />

          <TravelersModal
            modalVisible={modalTraveler}
            setModalVisible={setModalTraveler}
            travelerDetails={travelerDetails}
            setTravelerDetails={setTravelerDetails}
          />
          <TouchableOpacity
            style={commonStyles.button}
            onPress={handleSearchFlights}>
            <Text style={commonStyles.buttonText}>Search Flights</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  fromTo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },

  inputFromTo: {
    width: '40%',
    borderBottomWidth: 1,
    borderBottomColor: StyleConfig.colors.primary,
    marginHorizontal: 10,
  },
  inputDeparture: {
    width: '95%',
    borderBottomWidth: 1,
    borderBottomColor: StyleConfig.colors.primary,
    marginHorizontal: 10,
  },

  header: {
    marginTop: 50,
    marginBottom: 30,
  },
  primaryText: {
    fontWeight: 'bold',
  },
  formContainer: {
    // flex: 1,
    // borderWidth: 0.5,
    borderRadius: 8,
    borderColor: '#808080',
    // padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: scale(80),
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  textInput: {
    color: StyleConfig.colors.darkGrey,
    fontSize: scale(16),
    // fontWeight: 'bold',
  },
  nonStopFlights: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: scale(20),
    // marginVertical:scale(10)
  },
});

export default Home;
