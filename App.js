import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DemoFunComponent from  './screens/DemoFunComponent.js'

import AllProperties from  './screens/AllProperties.js'
import TestScreen from  './screens/TestScreen.js'


import MainScreen from  './screens/MainScreen.js'


function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details!</Text>
    </View>
  );
}

function HomeScreen({ navigation }) {
  console.log(' 24 navigation =>', navigation); 
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />

      <Button
              title="Go to TestScreen / FlatList "
              onPress={() => navigation.navigate('TestScreen')}
            />


      <Button
                    title="Go to MainScreen "
                    onPress={() => navigation.navigate('MainScreen')}
                  />

    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />

      <HomeStack.Screen name="TestScreen" component={TestScreen} />
      <HomeStack.Screen name="MainScreen" component={MainScreen} />
      
    </HomeStack.Navigator>
  );
}



const AllPropertiesStack = createNativeStackNavigator();

function AllPropertiesStackScreen() {
  return (
    <AllPropertiesStack.Navigator>
      <AllPropertiesStack.Screen name="AllProperties" component={AllProperties} />
      <AllPropertiesStack.Screen name="Details" component={DetailsScreen} />
    </AllPropertiesStack.Navigator>
  );
}



const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="AllProperties" component={AllProperties} />
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}