import React, { useEffect, useRef, useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Audio } from 'expo-av';
import * as Speech from 'expo-speech';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Features from '../components/features'
const HomeScreen = () => {
  const [recording, setRecording] = useState(null);
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const scrollViewRef = useRef();

  const startRecording = async () => {
    setRecording(true);
    try {
      await Audio.requestPermissionsAsync();
      const recordingObject = new Audio.Recording();
      await recordingObject.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
      await recordingObject.startAsync();
      setRecording(recordingObject);
    } catch (error) {
      console.error('Failed to start recording', error);
    }
  };

  const stopRecording = async () => {
    try {
      await recording.stopAndUnloadAsync();
      const uri = recording.getURI();
      if (uri) {
        const { status } = await Speech.requestPermissionsAsync();
        if (status === 'granted') {
          const { transcription } = await Speech.recognizeAsync({ uri });
          console.log('Recognized speech:', transcription);
          if (transcription && transcription.trim().length > 0) {
            setLoading(true);
            const newMessages = [...messages, { role: 'user', content: transcription.trim() }];
            setMessages(newMessages);
            updateScrollView();
            // Gọi API hoặc thực hiện các hành động khác với bản ghi âm đã nhận diện ở đây
          }
        } else {
          console.warn('Permission to access speech recognition denied.');
        }
      }
    } catch (error) {
      console.error('Failed to stop recording', error);
    } finally {
      setRecording(null);
      setLoading(false);
    }
  };

  const updateScrollView = () => {
    setTimeout(() => {
      scrollViewRef?.current?.scrollToEnd({ animated: true });
    }, 200);
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <SafeAreaView style={{ flex: 1, margin: 5 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Image
            source={require('../../assets/images/bot.png')}
            style={{ height: hp(15), width: hp(15) }}
          />
        </View>
        {messages.length > 0 ? (
          <View style={{ flex: 1, margin: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: '700', color: 'gray' }}>Assistant</Text>
            <View style={{ height: hp(58), backgroundColor: '#CACACA', borderRadius: 30, margin: 10, padding: 20 }}>
              <ScrollView
                ref={scrollViewRef}
                bounces={false}
                style={{ flex: 1 }}
                contentContainerStyle={{ paddingBottom: 10 }}
                showsVerticalScrollIndicator={false}
              >
                {messages.map((message, index) => (
                  <View key={index} style={{ flexDirection: message.role === 'assistant' ? 'row' : 'row-reverse' }}>
                    <View
                      style={{
                        width: wp(70),
                        backgroundColor: message.role === 'assistant' ? '#68D391' : 'white',
                        padding: 10,
                        borderRadius: 20,
                        marginVertical: 10,
                      }}
                    >
                      <Text style={{ color: message.role === 'assistant' ? 'white' : '#2D3748', fontSize: 15 }}>
                        {message.content}
                      </Text>
                    </View>
                  </View>
                ))}
              </ScrollView>
            </View>
          </View>
        ) : (
          <Features />
        )}
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
          {loading ? (
            <Image
              source={require('../../assets/images/loading.gif')}
              style={{ height: hp(10), width: hp(10) }}
            />
          ) : recording ? (
            <TouchableOpacity onPress={stopRecording} style={{ marginHorizontal: 10 }}>
              <Image
                source={require('../../assets/images/voiceLoading.gif')}
                style={{ height: hp(10), width: hp(10) }}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={startRecording} style={{ marginHorizontal: 10 }}>
              <Image
                source={require('../../assets/images/recordingIcon.png')}
                style={{ height: hp(10), width: hp(10) }}
              />
            </TouchableOpacity>
          )}
          {messages.length > 0 && (
            <TouchableOpacity onPress={clear} style={{ backgroundColor: '#CBD5E0', borderRadius: 20, padding: 10 }}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>CLEAR</Text>
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
