import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {leftArrow, camera} from '../assets';

const {height, width} = Dimensions.get('screen');

const WriteScreen = ({navigation}) => {
  const [value, setValue] = useState({
    kepada: '',
    subject: '',
    isiPesan: '',
    image: '',
  });
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flexDirection: 'column', flex: 1}}>
        <View>
          <View>
            <View
              style={{
                position: 'relative',
                justifyContent: 'center',
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 16,
              }}
            >
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  position: 'absolute',
                  left: 16,
                }}
                onPress={() => navigation.goBack()}
              >
                <Image source={leftArrow} />
              </TouchableOpacity>
              <View>
                <Text
                  style={{fontWeight: '700', fontSize: 20, color: '#3AB4F2'}}
                >
                  Tulis Pesan
                </Text>
              </View>
            </View>
          </View>
          <ScrollView>
            <View style={{marginHorizontal: 16, marginTop: 20}}>
              <Text>Kepada</Text>
              <TextInput
                placeholder="Kepada"
                autoCapitalize="none"
                style={styles.inputSize}
                onChangeText={text => setValue({...value, kepada: text})}
                value={value.kepada}
              />
            </View>
            <View style={{marginHorizontal: 16, marginTop: 10}}>
              <Text>Subject</Text>
              <TextInput
                placeholder="Subject"
                autoCapitalize="none"
                style={styles.inputSize}
                onChangeText={text => setValue({...value, subject: text})}
                value={value.subject}
              />
            </View>
            <View style={{marginHorizontal: 16, marginTop: 10}}>
              <Text>Pesan</Text>
              <TextInput
                multiline
                placeholder="Pesan"
                autoCapitalize="none"
                style={styles.inputSizeText}
                onChangeText={text => setValue({...value, isiPesan: text})}
                value={value.isiPesan}
              />
            </View>
            {value.image ? (
              <View
                style={{
                  width: width - 32,
                  backgroundColor: 'grey',
                  height: (width - 32) / 1.5,
                  marginLeft: 16,
                  marginTop: 16,
                }}
              />
            ) : (
              <TouchableOpacity
                style={{
                  marginTop: 10,
                  width: width - 32,
                  height: 50,
                  backgroundColor: 'yellow',
                  marginHorizontal: 16,
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Image source={camera} style={{width: 20, height: 20}} />
                <Text style={{fontWeight: '700', color: '#3AB4F2'}}>
                  Attach Image
                </Text>
              </TouchableOpacity>
            )}
          </ScrollView>
        </View>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <TouchableOpacity
            style={{
              width: width - 32,
              marginLeft: 16,
              height: 50,
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'green',
            }}
          >
            <Text style={{fontSize: 20, fontWeight: '700', color: 'white'}}>
              Kirim
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WriteScreen;

const styles = StyleSheet.create({
  inputSize: {
    width: width - 32,
    marginTop: 5,
    height: 40,
    borderRadius: 10,
    backgroundColor: 'white',
    paddingLeft: 20,
    paddingRight: 20,
    color: 'blue',
  },
  inputSizeText: {
    width: width - 32,
    marginTop: 5,
    height: 200,
    borderRadius: 10,
    backgroundColor: 'white',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    color: 'blue',
  },
});
