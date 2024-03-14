import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../../components/Header';
import {commonStyles} from '../../utils/CommonStyle';
import {Book} from "./../../types/book.ts"

interface Props {
  navigation: any; 
}

const Favorite: React.FC<Props> = ({navigation}) => {
  const isFocused = useIsFocused();
  const [favBooks, setFavBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchFavBooks = async () => {
      try {
        const storedFavBooksJson = await AsyncStorage.getItem('favBooks');
        if (storedFavBooksJson) {
          const storedFavBooks = JSON.parse(storedFavBooksJson) as Book[]; // Parse as Book[]
          setFavBooks(storedFavBooks);
        }
      } catch (error) {
        console.error('Error fetching favorite books:', error);
      }
    };

    fetchFavBooks();
  }, [isFocused]);

  const renderItem = ({item}: {item: Book}) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('BookDetails', {
          data: item,
        })
      }
      style={styles.item}>
      <View style={styles.itemContainer}>
        <Image
          resizeMode="contain"
          source={{
            uri: `https://covers.openlibrary.org/b/id/${item.cover_id}-M.jpg`,
          }}
          style={styles.image}
        />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.author}>by {item.authors[0].name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header />
      <Text style={commonStyles.fontMedBold}>Favorites</Text>
      <FlatList
        data={favBooks}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    margin: 20,
  },
  itemContainer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
  },
  image: {
    width: 150,
    height: 150,
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

export default Favorite;
