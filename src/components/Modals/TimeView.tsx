import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../../screens/Guide/Tabs/Today'
import { calCulateTimePercentage } from '../../utils/utils'


const TimeView = () => {
const {timePassedPercentage} = calCulateTimePercentage();
  return (
        <View style={styles.timeView}>
            <Text style={styles.time}>00.00</Text>
             <Text style={styles.time}>08.00</Text>
             <Text style={styles.time}>16.00</Text>
            {
                timePassedPercentage>=99.75?
                <Text style={styles.time}>23.59</Text>:
                <Text style={styles.time}>23.59</Text>
            }
        </View>
  )
}

export default TimeView