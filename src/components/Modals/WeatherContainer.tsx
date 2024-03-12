import { View, Text,Image } from 'react-native'
import React from 'react'
import { styles } from '../../screens/Guide/Tabs/Today'
styles

const WeatherContainer = () => {
  return (
        <View style={styles.weatherContainer}>
            <View style={styles.weather}>
                <View style={{display:"flex",flexDirection:"column"}}>
                    <Text style={styles.titleText}>Maldives</Text>
                    <Text style={styles.subTextLight}>Save the Turtles</Text>
                </View>
                <View style={{height:50,width:50,backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:50}}>
                <Image source={require("./../../../assets/Itinenery/Moon_cloud_fasr_wind1.png")}/>
                </View>
            </View>
            <View style={styles.weather}>
                <View style={{display:"flex",flexDirection:"column"}}>
                    <Text style={styles.titleText}>Golden beach</Text>
                    <Text style={styles.subTextLight}>Surfing on the sea</Text>
                </View>
                <View style={{height:50,width:50,backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:50}}>
                <Image source={require("./../../../assets/Itinenery/Cloud_zap_thunder2.png")}/>
                </View>
            </View>
            <View style={styles.weather}>
                <View style={{display:"flex",flexDirection:"column"}}>
                    <Text style={styles.titleText}>Coconut grove</Text>
                    <Text style={styles.subTextLight}>BBQ party by the sea</Text>
                </View>
                <View style={{height:50,width:50,backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:50}}>
                <Image source={require("./../../../assets/Itinenery/Moon_fast_wind3.png")}/>
                </View>
            </View>
            <View style={styles.weather}>
                <View style={{display:"flex",flexDirection:"column"}}>
                    <Text style={styles.titleText}>Maldives Islands</Text>
                    <Text style={styles.subTextLight}>Sea blowing</Text>
                </View>
                <View style={{height:50,width:50,backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:50}}>
                <Image source={require("./../../../assets/Itinenery/Sun_cloud_angled_rain4.png")}/>
                </View>
            </View>
        </View>
  )
}

export default WeatherContainer