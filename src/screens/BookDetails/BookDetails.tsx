import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  Pressable,
  Alert,
} from 'react-native';
import {scale} from '../../utils/utils';
import {commonStyles} from '../../utils/CommonStyle';
import StyleConfig from '../../utils/StyleConfig';
import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Book} from './../../types/book.ts';

// Define Book type
interface RouteParams {
  data: Book;
}

interface Props {
  route: {
    params: RouteParams;
  };
  navigation: any; 
}

const BookDetails: React.FC<Props> = ({route, navigation}) => {
  const {data} = route.params;

  const addToFav = async () => {
    const storedFavBooksJson = await AsyncStorage.getItem('favBooks');
    const favBooks: Book[] = storedFavBooksJson
      ? JSON.parse(storedFavBooksJson)
      : [];

    const isBookAlreadyFav = favBooks.some(
      book => book.cover_id === data.cover_id,
    );

    if (!isBookAlreadyFav) {
      favBooks.push(data);
      AsyncStorage.setItem('favBooks', JSON.stringify(favBooks));

      Alert.alert(
        'Info',
        'Book added to favorites successfully!',
        [
          {
            text: 'OK',
            onPress: () => console.log('OK Pressed'),
            style: 'default',
          },
        ],
        {cancelable: false},
      );
    } else {
      Alert.alert(
        'Info',
        'Book is already added to favorites!',
        [
          {
            text: 'OK',
            onPress: () => console.log('OK Pressed'),
            style: 'default',
          },
        ],
        {cancelable: false},
      );
    }
  };

  return (
    <View style={styles.container}>
      <Header back={true} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.bookDetailsContainer}>
          <View style={styles.imageContainer}>
            <Image
              resizeMode="center"
              source={{
                uri: `https://covers.openlibrary.org/b/id/${data.cover_id}-M.jpg`,
              }}
              style={styles.image}
            />
            <View style={styles.bookDetails}>
              <Text style={commonStyles.fontMedBold}>{data.title}</Text>
              <Text style={commonStyles.fontMed}>
                By: {data.authors[0].name}
              </Text>
              <Text style={commonStyles.fontMed}>
                Publish Year: {data.first_publish_year}
              </Text>
              <View style={commonStyles.flexRow}>
                <Text style={commonStyles.fontMed}>Genre: </Text>
                <Text style={commonStyles.fontMed}>{data?.subject[0]}</Text>
              </View>
            </View>
            <View style={styles.bookDetails}>
              <Text style={commonStyles.fontMedBold}>Description</Text>
              <Text style={commonStyles.fontMed}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laboriosam ratione doloribus sequi reiciendis numquam eos quae
                ex in vel. Quos praesentium nesciunt temporibus quae molestias
                earum maiores assumenda natus quis?
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.readingAndLike}>
        <View style={styles.startRead}>
          <Text style={commonStyles.fontLgWhite}>Start Reading</Text>
        </View>
        <Pressable style={styles.like} onPress={addToFav}>
          <Icon name="heart" size={20} color="red" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    display: 'flex',
  },
  bookDetailsContainer: {
    margin: scale(20),
  },
  imageContainer: {
    backgroundColor: StyleConfig.colors.whiteInput,
    borderRadius: 8,
  },
  image: {
    height: scale(300),
    resizeMode: 'contain',
    borderRadius: 8,
  },
  bookDetails: {
    backgroundColor: StyleConfig.colors.whiteInput,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: scale(10),
    padding: scale(20),
    borderWidth: 1,
    borderRadius: 8,
    borderColor: StyleConfig.colors.white,
    elevation: 2,
  },
  readingAndLike: {
    display: 'flex',
    flexDirection: 'row',
    padding: scale(20),
    borderRadius: 8,
    borderColor: StyleConfig.colors.white,
    width: '100%',
  },
  startRead: {
    backgroundColor: StyleConfig.colors.darkGrey,
    color: StyleConfig.colors.white,
    width: '70%',
    padding: scale(20),
    borderRadius: 8,
    alignItems: 'center',
  },
  like: {
    backgroundColor: StyleConfig.colors.darkGrey,
    color: StyleConfig.colors.white,
    width: '25%',
    padding: scale(20),
    borderRadius: 8,
    alignItems: 'center',
    marginLeft: 10,
  },
});

export default BookDetails;
