import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {inbox, outbox, file, group, setting, edit} from '../assets';

const Home = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={{marginHorizontal: 16, marginTop: 20}}>
        <View>
          <Text
            style={{
              fontWeight: '700',
              fontSize: 20,
              color: '#3AB4F2',
              fontStyle: 'italic',
            }}
          >
            Welcome Back,
          </Text>
          <Text style={{fontWeight: '700', fontSize: 30, color: '#3AB4F2'}}>
            Gilang Akram
          </Text>
        </View>
        <View
          style={{
            marginTop: 50,
            justifyContent: 'space-around',
            flexDirection: 'row',
          }}
        >
          <TouchableOpacity
            style={{
              alignItems: 'center',
              width: 100,
              height: 100,
              borderWidth: 1,
              borderRadius: 10,
              borderColor: '#3AB4F2',
            }}
            onPress={() => navigation.navigate('Write')}
          >
            <Image source={edit} />
            <Text
              style={{
                color: '#3AB4F2',
                fontSize: 15,
                fontWeight: '700',
                marginTop: 10,
              }}
            >
              Tulis Pesan
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              width: 100,
              height: 100,
              borderWidth: 1,
              borderRadius: 10,
              borderColor: '#3AB4F2',
            }}
            onPress={() => navigation.navigate('Inbox')}
          >
            <Image source={inbox} />
            <Text
              style={{
                color: '#3AB4F2',
                fontSize: 15,
                fontWeight: '700',
                marginTop: 10,
              }}
            >
              Inbox
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              width: 100,
              height: 100,
              borderWidth: 1,
              borderRadius: 10,
              borderColor: '#3AB4F2',
            }}
            onPress={() => navigation.navigate('Outbox')}
          >
            <Image source={outbox} />
            <Text
              style={{
                color: '#3AB4F2',
                fontSize: 15,
                fontWeight: '700',
                marginTop: 10,
              }}
            >
              Outbox
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 30,
            justifyContent: 'space-around',
            flexDirection: 'row',
          }}
        >
          <TouchableOpacity
            style={{
              alignItems: 'center',
              width: 100,
              height: 100,
              borderWidth: 1,
              borderRadius: 10,
              borderColor: '#3AB4F2',
            }}
            onPress={() => navigation.navigate('Disposisi')}
          >
            <Image source={group} />
            <Text
              style={{
                color: '#3AB4F2',
                fontSize: 15,
                fontWeight: '700',
                marginTop: 10,
              }}
            >
              Disposisi
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              width: 100,
              height: 100,
              borderWidth: 1,
              borderRadius: 10,
              borderColor: '#3AB4F2',
            }}
            onPress={() => navigation.navigate('Cuti')}
          >
            <Image source={file} />
            <Text
              style={{
                color: '#3AB4F2',
                fontSize: 15,
                fontWeight: '700',
                marginTop: 10,
              }}
            >
              Cuti
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Profile')}
            style={{
              alignItems: 'center',
              width: 100,
              height: 100,
              borderWidth: 1,
              borderRadius: 10,
              borderColor: '#3AB4F2',
            }}
          >
            <Image source={setting} />
            <Text
              style={{
                color: '#3AB4F2',
                fontSize: 15,
                fontWeight: '700',
                marginTop: 10,
              }}
            >
              Profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
