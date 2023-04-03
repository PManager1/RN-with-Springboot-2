import React from 'react';
import { SafeAreaView } from 'react-native';
import SearchableFlatList from './SearchableList';

const FlatListSearch = () => (
  <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
    <SearchableFlatList />
  </SafeAreaView>
);

export default FlatListSearch;