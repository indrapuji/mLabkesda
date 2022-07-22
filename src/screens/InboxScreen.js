import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import React from 'react';
import {leftArrow, pesan} from '../assets';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';

const {width, height} = Dimensions.get('screen');

const InboxScreen = ({navigation}) => {
  const dataInternal = [
    {
      nama: 'Indra',
      subject: 'data Pendukung',
    },
    {
      nama: 'Rahman',
      subject: 'Syarat Cuti',
    },
    {
      nama: 'Rian',
      subject: 'Pengajuan Pinjaman',
    },
  ];
  const dataExternal = [
    {
      nama: 'Rudi',
      subject: 'Apa Kabar',
    },
    {
      nama: 'Adhar',
      subject: 'Libur Nasional',
    },
    {
      nama: 'Suci',
      subject: 'Izin Sakit',
    },
  ];
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
              Pesan Masuk
            </Text>
          </View>
        </View>
      </View>
      <ScrollView>
        <Collapse>
          <CollapseHeader>
            <View
              style={{
                marginTop: 20,
                width: width,
                height: 50,
                backgroundColor: '#3AB4F2',
                alignItems: 'center',
                paddingHorizontal: 16,
                flexDirection: 'row',
              }}
            >
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={pesan} style={{marginRight: 10}} />
                <Text style={{color: 'white'}}>Pesan Internal</Text>
              </View>
            </View>
          </CollapseHeader>
          <CollapseBody>
            {dataInternal.map((item, index) => {
              return (
                <View
                  style={{
                    height: 50,
                    backgroundColor: '#F1F1F1',
                    alignItems: 'center',
                    paddingLeft: 20,
                    borderBottomWidth: 1,
                    flexDirection: 'row',
                  }}
                >
                  <View style={{marginRight: 10}}>
                    <Text>-</Text>
                  </View>
                  <View>
                    <Text>{item.nama}</Text>
                    <Text>{item.subject}</Text>
                  </View>
                </View>
              );
            })}
          </CollapseBody>
        </Collapse>
        <Collapse>
          <CollapseHeader>
            <View
              style={{
                width: width,
                height: 50,
                backgroundColor: '#3AB4F2',
                alignItems: 'center',
                paddingHorizontal: 16,
                flexDirection: 'row',
              }}
            >
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={pesan} style={{marginRight: 10}} />
                <Text style={{color: 'white'}}>Pesan External</Text>
              </View>
            </View>
          </CollapseHeader>
          <CollapseBody>
            {dataExternal.map((item, index) => {
              return (
                <View
                  style={{
                    height: 50,
                    backgroundColor: '#F1F1F1',
                    alignItems: 'center',
                    paddingLeft: 20,
                    borderBottomWidth: 1,
                    flexDirection: 'row',
                  }}
                >
                  <View style={{marginRight: 10}}>
                    <Text>-</Text>
                  </View>
                  <View>
                    <Text>{item.nama}</Text>
                    <Text>{item.subject}</Text>
                  </View>
                </View>
              );
            })}
          </CollapseBody>
        </Collapse>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InboxScreen;

const styles = StyleSheet.create({});
