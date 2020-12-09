import React from 'react';
import SearchScreen from './SearchScreen';
import {fireEvent, render} from '@testing-library/react-native';
import {act} from 'react-test-renderer';
import {useNavigation} from '@react-navigation/native';
import {renderComponent} from '../utilities/testintUtils';
import {Destination} from '../navigation/types/Destination';

// @ts-ignore
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([]),
  }),
);

const mockedNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: mockedNavigate,
  }),
}));

describe('SearchScreen', () => {
  it('should display the correct elements', () => {
    const {getByText, getByTestId} = renderComponent(<SearchScreen />);
    const text1 = getByText('Search for houses to buy!');
    const text2 = getByTestId('SecondaryText');
    const textInput = getByTestId('SearchInput');
    const searchButton = getByTestId('SearchButton');

    expect(text1).toBeDefined();
    expect(text2).toBeDefined();
    expect(text2.children[0]).toEqual('Search by place, name or postcode!');
    expect(textInput).toBeDefined();
    expect(searchButton).toBeDefined();
  });

  it('should fire an api request when pressing a button', () => {
    const {getByTestId} = renderComponent(<SearchScreen />);
    const searchButton = getByTestId('SearchButton');
    const textInput = getByTestId('SearchInput');

    const searchTerm = 'Dublin';
    const event = {nativeEvent: {text: searchTerm}};
    const url = `https://5f843a3c6b97440016f4f2dc.mockapi.io/properties?search=${searchTerm}`;

    fireEvent(textInput, 'onChange', event);
    fireEvent(searchButton, 'onPress');
    expect(fetch).toBeCalledTimes(1);
    expect(fetch).toBeCalledWith(url);
  });

  it('should navigate to the the SearchResults page', async () => {
    const {navigate} = useNavigation();
    const wrapper = renderComponent(<SearchScreen />);
    const searchButton = wrapper.getByTestId('SearchButton');

    await act(async () => {
      await fireEvent(searchButton, 'onPress');
    });

    expect(navigate).toBeCalledWith(Destination.SearchResults, {
      data: [],
    });
  });
});
