import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {leftArrow} from '../assets';

const CutiScreen = ({navigation}) => {
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
              Cuti
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CutiScreen;

const styles = StyleSheet.create({});
