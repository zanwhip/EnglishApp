import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.area}>
    <Text style={{ fontSize: 30, textAlign: 'center', fontWeight: 'bold', color: '#4A5568'  }}>Welcome to EnglishToday</Text>
    <Text style={{ fontSize: 15, textAlign: 'center', fontWeight: '600', color: '#718096' }}> Chào mừng bạn đến với ứng dụng học tiếng anh tốt nhất </Text>
  </View>
  <View   style={styles.image}>
  <Image
        source={require('../../assets/images/welcome.png')} 
        style={{ width: 400,height: 400,  }}
      />
  </View>
  <TouchableOpacity 
  onPress={() => navigation.navigate('Home')}
  style={{ backgroundColor : '#189056', width : 300, height : 60, justifyContent : 'center', margin : '15%' , borderRadius : 20, paddingLeft : 90,  }}>
    <Text style={{ color : 'white', fontSize : 20, fontWeight : '800',  }}>Get Starting</Text>
  </TouchableOpacity>
    </SafeAreaView>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'space-around',
        backgroundColor : 'white',
    },
    area : {

    },
    image : {
        flexDirection : 'row',
        justifyContent : 'center',
    
        
    }
})