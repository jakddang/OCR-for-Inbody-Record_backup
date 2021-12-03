// import React from 'react';
// import {StyleSheet, Text, View, Image, TextInput} from 'react-native';

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Image
//           style={{width: 50, height: 50}}
//           source={{
//             uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
//           }}
//         />
//         <TextInput />
//         <Text style={styles.loadingText}>Now Loading ...</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'gold',
//   },
//     loadingText: {
//       fontSize: 45,
//     },
// });

//App.js 
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          // eslint-disable-next-line react-native/no-inline-styles
          style={{width: '100%', height: '100%'}}
          source={require('./images/background.png')}>
          <View style={styles.settingView}>
            <TouchableOpacity>
              <Image source={require('./icon/setting.png')} />
            </TouchableOpacity>
          </View>
          <View style={styles.ddayView}>
            <Text style={styles.titleText}>수능까지</Text>
            <Text style={styles.ddayText}>D-123</Text>
            <Text style={styles.dateText}>2021년 12월 3일</Text>
          </View>
          <View style={styles.chatView}>
            <ScrollView style={styles.chatScrollView}></ScrollView>
            <View style={styles.chatControl}>
              <TextInput style={styles.ChatInput} />
              <TouchableOpacity style={styles.sendButton}>
                <Text>전송</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  settingView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: '1%',
  },
  ddayView: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatView: {
    flex: 6,
  },
  titleText:{
    alignSelf: 'flex-end',
    fontSize: 36,
    fontWeight: 'bold',
    color: '#4A4A4A',
    marginRight: '15%',
  },
  ddayText: {
    fontSize: 100,
    fontWeight: 'bold',
    color: '#4A4A4A',
  },
  dateText: {
    alignSelf: 'flex-start',
    fontSize: 21,
    fontWeight: 'bold',
    color: '#4A4A4A',
    marginLeft: '15%',
  },
  sendButton: {
    backgroundColor: 'rgb(97,99,250)',
    height: 40,
    width: 50,
    borderRadius: 20,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
  ChatInput: {
    backgroundColor: 'white',
    width: '75%',
    height: 40,
    borderWidth: 1,
    borderColor: '#a5a5a5',
    borderRadius: 20,
  },
  chatControl: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  chatScrollView: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: 'rgba(201,201,201,0.7)',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#a5a5a5',
    marginBottom: 10,
  },
});