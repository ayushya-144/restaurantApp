/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import BarbecueSvg from './assets/barbecue.svg';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={Main}
          name="Main"
          options={{headerShown: false}}
        />
        <Stack.Screen component={Home} name="Home" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Home = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Ayushya</Text>
    </View>
  );
};

function Main({navigation}) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
      }}>
      <View>
        <Text style={{fontSize: 30, fontWeight: 'bold', color: '#20315f'}}>
          Ayushya
        </Text>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <BarbecueSvg width={300} height={300} />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={{
          backgroundColor: '#AD40AF',
          width: '90%',
          borderRadius: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 20,
        }}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: '#FFF'}}>
          Let's Begin
        </Text>
        <MaterialIcons name="arrow-forward-ios" size={22} color="#FFF" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default App;
