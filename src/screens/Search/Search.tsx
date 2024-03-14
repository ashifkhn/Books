import React, {useState, useEffect} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Text,
  Image
} from 'react-native';
import axios from 'axios';
import Header from '../../components/Header';
import { scale } from '../../utils/utils';




const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

const fetchData = async () => {
  try {
    setLoader(true);
    const formattedQuery = searchQuery.replace(/\s+/g, '+'); // Replace spaces with '+'
    const response = await axios.get(
      `https://openlibrary.org/search.json?title=${formattedQuery}`,
    );
    console.log(response)
    setData(response.data.docs);
    setLoader(false);
  } catch (error) {
    console.error('Error fetching data:', error);
    setLoader(false);
  }
};
  useEffect(() => {
    if (searchQuery !== '') {
      fetchData();
    }
  }, [searchQuery]);

  const renderItem = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <View>
        <Text>{item?.title}</Text>
        <Text>Publishing Year {item?.first_publish_year}</Text>
        </View>
        <Image
          resizeMode="contain"
          source={{
            uri: `https://covers.openlibrary.org/b/id/${item?.cover_i}-S.jpg`,
          }}
          style={styles.image}
        />
      </View>
    );
  };

  return (
    <View>
      <Header back={true}/>
      <TextInput
        style={styles.searchBar}
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
        maxLength={200}
        placeholder="Search User"
        placeholderTextColor="grey"
        autoFocus
      />

      {!loader ? (
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchBar: {
    marginBottom: 20,
    marginHorizontal: 5,
    borderBottomWidth: 0.5,
    fontSize: 12,
    color: 'darkgrey',
  },
  itemContainer:{
  height:scale(50),
  display:"flex",
  flexDirection:"row",
  justifyContent:"space-between",
  alignItems:"center",
  margin:scale(20)
  },
  image: {
    width: scale(30),
    height: scale(30),
    borderRadius: 50,
  },
});
