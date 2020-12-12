import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Button,
  Image,
} from 'react-native';

const SearchScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.description}>Search for houses to buy!</Text>
      <Text style={styles.description}>Search by place, name or postcode!</Text>
      <View style={styles.flowRight}>
        <TextInput
          style={styles.searchInput}
          placeholder={'Search via name or postcode'}
          underlineColorAndroid={'transparent'}
        />
        <Button onPress={() => {}} title={'Go'} />
      </View>
      <Image
        source={require('../assets/images/house.png')}
        style={styles.image}
        resizeMode="contain"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
    marginTop: 65,
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginTop: 40,
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flexGrow: 1,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48bbec',
    borderRadius: 8,
    color: '#48bbec',
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default SearchScreen;
