import React, {useState, useEffect} from 'react';
import {NavigationProp} from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
  Pressable,
} from 'react-native';
import axios from 'axios';
import {scale} from '../../utils/utils';
import Header from '../../components/Header';
import Loader from '../../utils/Loader';
import {commonStyles} from '../../utils/CommonStyle';
import {Book} from './../../types/book.ts';

interface Props {
  navigation: NavigationProp<any>;
}

const Home: React.FC<Props> = ({navigation}) => {
  const [data, setData] = useState<Book[]>([]);
  const [loader, setLoader] = useState(true);
  const apiUrl = 'https://openlibrary.org/subjects/sci-fi.json?details=true';

  const handler = () => {
    navigation.navigate('Search');
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(apiUrl);
      setData(response.data.works);
      setLoader(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };

  const renderItem = ({item}: {item: Book}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('BookDetails', {data: item})}
      style={styles.itemContainer}>
      <View style={styles.innerContainer}>
        <Image
          resizeMode="contain"
          source={{
            uri: `https://covers.openlibrary.org/b/id/${item.cover_id}-M.jpg`,
          }}
          style={styles.image}
        />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.author}>{item.authors[0].name}</Text>
      </View>
    </TouchableOpacity>
  );

  useEffect(() => {
    fetchData();
  }, []);

  if (loader) {
    return <Loader />;
  }

  return (
    <View style={styles.container}>
      <Header back={false} />
      <Pressable onPress={handler}>
        <TextInput
          editable={false}
          style={styles.searchBar}
          maxLength={200}
          placeholder="Search"
          placeholderTextColor="grey"
        />
      </Pressable>
      <FlatList
        horizontal
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        showsHorizontalScrollIndicator={false}
      />
      <Text style={commonStyles.fontMedBold}>Our Recommendation</Text>
      <FlatList
        horizontal
        data={data.slice(0, 5)}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    marginBottom: scale(20),
    marginHorizontal: scale(5),
    borderBottomWidth: 0.5,
    fontSize: 12,
    color: 'darkgrey',
  },
  itemContainer: {
    margin: scale(20),
    alignItems: 'center',
    height: scale(200),
  },
  innerContainer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
  },
  image: {
    width: scale(150),
    height: scale(150),
    borderRadius: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 12,
  },
  author: {
    textAlign: 'center',
  },
});

export default Home;
