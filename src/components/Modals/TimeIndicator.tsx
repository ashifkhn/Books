import { View, Text,StyleSheet, Image } from 'react-native'
import { styles } from '../../screens/Guide/Tabs/Today'
import { calCulateTimePercentage, scale } from '../../utils/utils'

   

export  const Complete = () => {
    return (
            <View style={styles.itineraryContainer}>
                <View style={[styles.completedTime,{height:scale*100}]}>
                </View>
            </View>
    )
}

export const PartiallyComplete = () => {
    return (

        <View style={styles.itineraryContainer}>
            <View>
                <View style={[styles.completedTime,{height:calCulateTimePercentage().timePassedPercentage*scale,}]}>           
                </View>
                <View style={[styles.incompleteTime,{height:(scale*100)-calCulateTimePercentage().timePassedPercentage,}]}>
                </View>
            </View>
        </View>
    )
}

export const InComplete = () => {
    return (
        <View style={styles.itineraryContainer}>
            <View>
            <View style={[styles.incompleteTime,{height:scale*100}]}>         
            </View>
            </View>
        </View>
    )
}