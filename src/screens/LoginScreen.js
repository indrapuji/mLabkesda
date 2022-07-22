import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
  TextInput,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';

const {height, width} = Dimensions.get('screen');

const Login = ({navigation}) => {
  const [value, setValue] = useState({
    email: '',
    password: '',
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#3AB4F2" />
      <View style={{alignItems: 'center'}}>
        <Text style={styles.title}>E-LABKESDA</Text>
        <Image
          style={styles.tinyLogo}
          source={require('../assets/employee.png')}
        />
        <TextInput
          placeholder="Enter Your Email"
          autoCapitalize="none"
          style={styles.inputSize}
          onChangeText={text => setValue({...value, email: text})}
          value={value.email}
        />
        <TextInput
          placeholder="Enter Your Password"
          autoCapitalize="none"
          secureTextEntry
          style={styles.inputSize}
          onChangeText={text => setValue({...value, password: text})}
          value={value.password}
        />
        <TouchableOpacity
          style={styles.bottonSize}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.textButton}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop: 15}}>
          <Text style={{color: 'white'}}>Reset Password</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3AB4F2',
  },
  title: {
    fontWeight: '700',
    fontSize: 25,
    color: 'red',
    marginBottom: 50,
  },
  tinyLogo: {
    width: 200,
    height: 200,
    marginBottom: 50,
  },
  inputSize: {
    width: width / 1.3,
    height: 50,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    paddingLeft: 20,
    paddingRight: 50,
    color: 'blue',
  },
  bottonSize: {
    width: width / 1.3,
    height: 50,
    borderRadius: 10,
    marginTop: 30,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: 'white',
    fontSize: 15,
    fontWeight: '700',
  },
});
