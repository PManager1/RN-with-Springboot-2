import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Text, View } from 'react-native';

const MainScreen=({ navigation })=>

{

  console.log('--> 14 navigation WORKING INSIDE FUNc Component=>', navigation); 

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Test screen External</Text>
      <Button
        title="Go to Details"
        // onPress={() => navigation.navigate('Details')}
      />
    </View>
  );;
}
 
export default MainScreen;

