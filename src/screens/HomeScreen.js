import React, { useState } from 'react'
import { Text, View, StyleSheet} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native';
import Features from '../components/features';
import { dummyMessages } from '../constants';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';


const HomeScreen = () => {
    const [messages, setMassages] = useState(dummyMessages);
    const [recording, setRecording] = useState(true);
    return (
      <View style={styles.container}>
        <SafeAreaView style={{ flex: 1, margin: 5 }}>
            <View style={styles.botIcon}>
            <Image
        source={require('../../assets/images/bot.png')} // Đường dẫn đến tệp ảnh trong dự án của bạn
        style={{ width : 180, height : 180 }}
      />
            </View>
        {
            messages.length>0? (
                <View style={{ flex : 1, margin : 10,  }}>
                    <Text style={{ fontSize : 20, fontWeight : '700', color : 'gray' }}>Assistant</Text>
                    <View
                    style={{ height : 480, backgroundColor : '#CACACA', borderRadius : 30, margin : 10,padding: 20 }}
                    >
                      <GestureHandlerRootView bounces={true} style={{ flex: 1 }}>
                      {messages.map((message, index) => {
                  if (message.role == 'assistant') {
                    if (message.content.includes('https')) {
                      // result is an AI image
                      return (
                        <View key={index} style={{ flexDirection: 'row', justifyContent: 'flex-start', width: 220, }}>
                          <View style={{ padding: 10, flex: 1, borderRadius: 20, backgroundColor: '#68D391', height: 220,  }}>
                            <Image
                              source={{ uri: message.content }}
                              style={{ height: 200, width: 200, borderRadius: 20 }}
                              resizeMode="contain"
                            />
                          </View>
                        </View>
                      );
                    } else {
                      // chat GPT response
                      return (
                        <View key={index} style={{ width:300, backgroundColor: '#68D391', padding: 10, borderRadius: 20, marginLeft: 5, marginVertical: 10 }}>
                          <Text style={{ color: '#2D3748', fontSize: 15 }}>{message.content}</Text>
                        </View>
                      );
                    }
                  } else {
                    // user input text
                    return (
                      <View key={index} style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <View style={{ width: 300, backgroundColor: 'white', padding: 10, borderRadius: 20, marginVertical: 10 }}>
                          <Text style={{ fontSize: 15 }}>{message.content}</Text>
                        </View>
                      </View>
                    );
                  }
                })}

                      </GestureHandlerRootView>

                    </View>
                </View>
            ) : (
                <Features/>
            )

        }
        {/* recording, clear and stop button */}
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10  }}>
         
            {
                recording? (
                    <TouchableOpacity>
                    <Image 
                    source={require('../../assets/images/voiceLoading.gif')}
                    style={{ height : 90, width : 90, }}
                    />
                </TouchableOpacity>
    
                ) : (
                    <TouchableOpacity>
                    <Image 
                    source={require('../../assets/images/recordingIcon.png')}
                    style={{ height : 90, width : 90, }}
                    />
                </TouchableOpacity>
    
                )
            }
        </View>
        </SafeAreaView>
      </View>
    )
  
}

export default HomeScreen
const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor :'white'
    },
    botIcon : {
        flexDirection :'row',
        justifyContent : 'center'
     }
 })

