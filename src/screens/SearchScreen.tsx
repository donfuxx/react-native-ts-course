import React, {useState} from 'react';
import {
  Button,
  Image,
  NativeSyntheticEvent,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TextInputChangeEventData,
  View,
} from 'react-native';
import {IProperty} from '../models/Property';
const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('london');
  const [isLoading, setIsLoading] = useState(false);
  const [properties, setProperties] = useState<IProperty[]>([]);

  function onSearchTermChange(
    event: NativeSyntheticEvent<TextInputChangeEventData>,
  ) {
    console.log(`Current: ${searchTerm}, Next: ${event.nativeEvent.text}`);
    setSearchTerm(event.nativeEvent.text);
  }

  function getProperies() {
    setIsLoading(true);
    fetch(
      `https://5f843a3c6b97440016f4f2dc.mockapi.io/properties?search=${searchTerm}`,
    )
      .then((response) => response.json())
      .then((data: IProperty[]) => {
        setProperties(data);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      });
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.description}>Search for houses to buy!</Text>
      <Text style={styles.description}>Search by place, name or postcode!</Text>
      <View style={styles.flowRight}>
        {isLoading ? (
          <View>
            <Text style={styles.loadingText}>Loading...</Text>
          </View>
        ) : (
          <>
            <TextInput
              style={styles.searchInput}
              placeholder={'Search via name or postcode'}
              underlineColorAndroid={'transparent'}
              value={searchTerm}
              onChange={onSearchTermChange}
              returnKeyType="search"
              onSubmitEditing={getProperies}
            />
            <Button onPress={getProperies} title={'Go'} />
          </>
        )}
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
  loadingText: {
    fontSize: 20,
  },
});

export default SearchScreen;
