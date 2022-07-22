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

const InboxScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={{marginHorizontal: 16}}>
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center'}}
          onPress={() => navigation.navigate('Home')}
        >
          <Image source={leftArrow} />
          <Text style={{color: '#3AB4F2', fontSize: 20, fontWeight: '700'}}>
            Back
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default InboxScreen;

const styles = StyleSheet.create({});
