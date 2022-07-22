import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {leftArrow} from '../assets';

const ProfileScreen = ({navigation}) => {
  return (
    <SafeAreaView>
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
            <Text style={{fontWeight: '700', fontSize: 20, color: '#3AB4F2'}}>
              Profile
            </Text>
          </View>
        </View>
      </View>
      <ScrollView>
        <View style={{marginTop: 20, marginHorizontal: 16}}>
          <View style={{alignItems: 'center', marginTop: 20}}>
            <View
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                backgroundColor: 'grey',
              }}
            />
            <View style={{marginTop: 20}}>
              <Text style={{fontWeight: '700', fontSize: 30, color: '#3AB4F2'}}>
                Gilang Akram
              </Text>
            </View>
          </View>
          <View style={{marginTop: 20}} />
          <View
            style={{
              flexDirection: 'row',
              height: 50,
              alignItems: 'center',
              borderTopWidth: 1,
            }}
          >
            <View style={{width: 100}}>
              <Text style={{fontWeight: '700', fontSize: 15}}>Divisi</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{marginRight: 20}}>
                <Text>:</Text>
              </View>
              <Text style={{fontWeight: '700', fontSize: 20}}>FnA</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              height: 50,
              alignItems: 'center',
              borderTopWidth: 1,
            }}
          >
            <View style={{width: 100}}>
              <Text style={{fontWeight: '700', fontSize: 15}}>Jabatan</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{marginRight: 20}}>
                <Text>:</Text>
              </View>
              <Text style={{fontWeight: '700', fontSize: 20}}>Keuangan</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              height: 50,
              alignItems: 'center',
              borderTopWidth: 1,
            }}
          >
            <View style={{width: 100}}>
              <Text style={{fontWeight: '700', fontSize: 15}}>
                Date of Birth
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{marginRight: 20}}>
                <Text>:</Text>
              </View>
              <Text style={{fontWeight: '700', fontSize: 20}}>10-10-1995</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              height: 50,
              alignItems: 'center',
              borderTopWidth: 1,
            }}
          >
            <View style={{width: 100}}>
              <Text style={{fontWeight: '700', fontSize: 15}}>Gender</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{marginRight: 20}}>
                <Text>:</Text>
              </View>
              <Text style={{fontWeight: '700', fontSize: 20}}>Laki - laki</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
