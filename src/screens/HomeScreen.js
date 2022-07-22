import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {inbox, outbox, file, group, setting} from '../assets';

const Home = () => {
  return (
    <SafeAreaView>
      <View style={{marginHorizontal: 16, marginTop: 20}}>
        <View>
          <Text style={{fontWeight: '700', fontSize: 20, color: '#3AB4F2'}}>
            Welcome Back,
          </Text>
          <Text style={{fontWeight: '700', fontSize: 20, color: '#3AB4F2'}}>
            Gilang
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
          >
            <Image source={inbox} />
            <Text style={{color: '#3AB4F2', fontSize: 15, fontWeight: '700'}}>
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
          >
            <Image source={outbox} />
            <Text style={{color: '#3AB4F2', fontSize: 15, fontWeight: '700'}}>
              Outbox
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
          >
            <Image source={group} />
            <Text style={{color: '#3AB4F2', fontSize: 15, fontWeight: '700'}}>
              Disposisi
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
          >
            <Image source={file} />
            <Text style={{color: '#3AB4F2', fontSize: 15, fontWeight: '700'}}>
              Cuti
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
          >
            <Image source={setting} />
            <Text style={{color: '#3AB4F2', fontSize: 15, fontWeight: '700'}}>
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
