import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native';

const Features = () => {
  return (
    <View style={{ margin : 10}}>
        <Text style={{ fontSize : 28,  fontWeight: 'bold', color: '#4A5568',  }}>Features</Text>
        <View style={{ backgroundColor: '#68D391', padding: 20, borderRadius: 20, marginTop: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
          <Image source={require('../../assets/images/chatgptIcon.png')} style={{ height:30, width: 30 }} />
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#4A5568', marginLeft: 10 }}>ChatGPT</Text>
        </View>
        <Text style={{ fontSize:15, color: '#000000', fontWeight: '600' }}>
          ChatGPT can provide you with instant and knowledgeable responses, assist you with creative ideas on a wide range of topics.
        </Text>
      </View>

      <View style={{ backgroundColor: '#9F7AEA', padding: 20, borderRadius: 20, marginTop: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
          <Image source={require('../../assets/images/dalleIcon.png')} style={{ height:30, width: 30 }} />
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#4A5568', marginLeft: 10 }}>DALL-E</Text>
        </View>
        <Text style={{ fontSize:15, color:'#000000', fontWeight: '600' }}>
        DALL-E can generate imaginative and diverse images from textual descriptions, expanding the boundaries of visual creativity.
        </Text>
      </View>

      <View style={{ backgroundColor: '#63B3ED', padding: 20, borderRadius: 20, marginTop: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
          <Image source={require('../../assets/images/smartaiIcon.png')} style={{ height:30, width: 30 }} />
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#4A5568', marginLeft: 10 }}>Smart AI</Text>
        </View>
        <Text style={{ fontSize:15, color: '#000000', fontWeight: '600' }}>
        A powerful voice assistant with the abilities of ChatGPT and DALL-E, providing you the best of both worlds.
        </Text>
      </View>
    </View>
  )
}

export default Features

const styles = StyleSheet.create({})