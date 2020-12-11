import React from 'react';
import {Image, StyleSheet, Text, View, Button} from 'react-native';
import {PropertyRouteProp} from '../navigation/types/RouteProps';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../store';
import {like, unlike} from '../store/favourites';

interface IPropertyScreenProps {
  route: PropertyRouteProp;
}

const PropertyScreen = (props: IPropertyScreenProps) => {
  const {favourites} = useSelector((state: RootState) => state.favourites);
  const dispatch = useDispatch();
  
  const {id, image, price, address, description} = props.route.params.data;
  const isLiked = favourites.some(fId => fId === id);
  const func = isLiked ? unlike : like;
  
  return (
    <View style={[styles.item, styles.container]}>
      <View style={styles.imageWrapper}>
        <Image source={{uri: image}} style={styles.itemImage} />
        <Text style={styles.itemPrice}>£{price}</Text>
      </View>
      <View style={styles.bottomText}>
        <Text style={styles.itemAddress}>{address}</Text>
        <Text style={styles.itemAddress}>{description}</Text>
        {
          isLiked &&
          <Text style={styles.liked}>
            Liked
          </Text>
        }
        <Button onPress={() => dispatch(func({data: id}))} title={isLiked ? 'Unlike' : 'Like' } />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    flex: 1,
  },
  item: {
    flexDirection: 'column',
    marginBottom: 20,
    paddingBottom: 10,
  },
  imageWrapper: {
    backgroundColor: '#DEDEDE',
    padding: 10,
  },
  bottomText: {
    paddingHorizontal: 5,
  },
  itemImage: {
    width: '100%',
    height: 320,
    marginBottom: 10,
  },
  itemInformation: {
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
  liked: {
    fontWeight: 'bold',
    color: 'green',
    backgroundColor: 'pink',
    fontSize: 20,
    textAlign: 'center'
  }
});

export default PropertyScreen;
