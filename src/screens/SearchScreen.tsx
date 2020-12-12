import React, {useState} from 'react';
import {
  Button,
  Image,
  NativeSyntheticEvent,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInputChangeEventData,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {IProperty} from '../models/Property';
import TextInput from '../components/TextInput';

import {Destination} from '../navigation/types/Destination';
const SearchScreen = () => {
  const {navigate} = useNavigation();
  const [searchTerm, setSearchTerm] = useState('london');

  function onSearchTermChange(
    event: NativeSyntheticEvent<TextInputChangeEventData>,
  ) {
    console.log(`Current: ${searchTerm}, Next: ${event.nativeEvent.text}`);
    setSearchTerm(event.nativeEvent.text);
  }

  function getProperies() {
    fetch(
      `https://5f843a3c6b97440016f4f2dc.mockapi.io/properties?search=${searchTerm}`,
    )
      .then((response) => response.json())
      .then((data: IProperty[]) => {
        navigate(Destination.SearchResults, {data});
      });
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.description}>Search for houses to buy!</Text>
      <Text style={styles.description}>Search by place, name or postcode!</Text>
      <View style={styles.flowRight}>
        <TextInput
          placeholder={'Search via name or postcode'}
          underlineColorAndroid={'transparent'}
          value={searchTerm}
          onChange={onSearchTermChange}
          returnKeyType="search"
          onSubmitEditing={getProperies}
        />
        <Button onPress={getProperies} title={'Go'} />
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
  image: {
    width: 200,
    height: 200,
  },
  loadingText: {
    fontSize: 20,
  },
});

export default SearchScreen;
