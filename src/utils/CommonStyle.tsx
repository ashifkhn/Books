import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import StyleConfig from './StyleConfig';
import { scale } from './utils';


export const commonStyles = StyleSheet.create({
  fontMedBold: {
    fontSize: scale(16),
    fontWeight: 'bold',
    color: StyleConfig.colors.greyLabel,
    marginLeft: scale(10),
  },
  fontMed: {
    fontSize: scale(12),
    color: StyleConfig.colors.greyLabel,
    // marginLeft:scale(10)
  },
  fontMedBlack: {
    fontSize: scale(14),
    color: StyleConfig.colors.darkGrey,
    // marginLeft:scale(10)
  },
  button: {
    backgroundColor: StyleConfig.colors.primary,
    paddingVertical: scale(15),
    borderRadius: 5,
    marginHorizontal: scale(20),
    textAlign: 'center',
    marginVertical: scale(20),
  },
  buttonText: {
    color: 'white',
    fontSize: scale(14),
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
