import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const SearchScreen = () => {
  return (
    <SafeAreaView>
      <Text style={styles.description}>Search for houses to buy!</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
    marginTop: 65,
  },
});

export default SearchScreen;
