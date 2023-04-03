import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Text, View } from 'react-native';
// import { useNavigation} from 'react-navigation-hooks';


const AllRecords=({ navigation })=>

// const AllRecords =()=>{
//   const {navigate} = useNavigation();

{

  console.log('--> 14 navigation WORKING INSIDE FUNc Component=>', navigation); 

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>AllRecords screen </Text>
      <Button
        title="Go to Details"
        // onPress={() => navigation.navigate('Details')}
      />
    </View>
  );;
}
 
export default AllRecords;

