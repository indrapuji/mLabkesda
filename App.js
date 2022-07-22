import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/screens/LoginScreen';
import Home from './src/screens/HomeScreen';
import Profile from './src/screens/ProfileScreen';
import Write from './src/screens/WriteScreen';
import Inbox from './src/screens/InboxScreen';
import Outbox from './src/screens/OutboxScreen';
import Disposisi from './src/screens/DisposisiScreen';
import Cuti from './src/screens/CutiScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: null, headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: null, headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{title: null, headerShown: false}}
        />
        <Stack.Screen
          name="Write"
          component={Write}
          options={{title: null, headerShown: false}}
        />
        <Stack.Screen
          name="Inbox"
          component={Inbox}
          options={{title: null, headerShown: false}}
        />
        <Stack.Screen
          name="Outbox"
          component={Outbox}
          options={{title: null, headerShown: false}}
        />
        <Stack.Screen
          name="Disposisi"
          component={Disposisi}
          options={{title: null, headerShown: false}}
        />
        <Stack.Screen
          name="Cuti"
          component={Cuti}
          options={{title: null, headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
