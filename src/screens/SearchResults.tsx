import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  View,
  Pressable,
} from 'react-native';
import {IProperty} from '../models/Property';
import {Destination} from '../navigation/types/Destination';
import {SearchResultsRouteProp} from '../navigation/types/RouteProps';

interface ISearchResultsScreenProps {
  route: SearchResultsRouteProp;
}

interface IListItemProps {
  data: IProperty;
  onPress: () => void;
}

const Item = ({data, onPress}: IListItemProps) => {
  const {address, image, price} = data;
  return (
    <Pressable onPress={onPress}>
      <View style={styles.item}>
        <Image source={{uri: image}} style={styles.itemImage} />
        <View style={styles.itemInformation}>
          <Text style={styles.itemPrice}>£{price}</Text>
          <Text style={styles.itemAddress}>{address}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const SearchResultsScreen = (props: ISearchResultsScreenProps) => {
  const {navigate} = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.flastList}
        data={props.route.params.data || []}
        renderItem={({item}) => (
          <Item
            data={item}
            onPress={() => {
              navigate(Destination.Property, {data: item});
            }}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flastList: {
    padding: 20,
  },
  container: {
    width: '100%',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  item: {
    flexDirection: 'row',
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomColor: '#656565',
    borderBottomWidth: 2,
  },
  itemInformation: {
    flexDirection: 'column',
    marginLeft: 10,
    flex: 1,
  },
  itemPrice: {
    color: '#48bbec',
    fontWeight: 'bold',
    flexWrap: 'wrap',
    fontSize: 25,
  },
  itemAddress: {
    fontSize: 20,
    flexWrap: 'wrap',
  },
  itemImage: {
    width: 100,
    height: 75,
  },
});

export default SearchResultsScreen;
