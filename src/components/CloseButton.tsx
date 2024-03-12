import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { scale } from '../utils/utils'
import Icon from 'react-native-vector-icons/Ionicons';
import StyleConfig from '../utils/StyleConfig';


const CloseButton = ({closeHandler}) => {
  return (
    <Pressable style={{marginTop: scale(20),marginHorizontal: scale(5)}} onPress={closeHandler}>
      <Icon name={'close'} size={32} color={StyleConfig.colors.greyLabel} />
    </Pressable>
  );
}

export default CloseButton