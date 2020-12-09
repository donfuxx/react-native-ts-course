import React from 'react';
import {renderComponent} from '../../../utilities/testintUtils';
import TextInput from '../';
import colors from '../../../theme/themes/primary/colors';
import {Platform} from 'react-native';

describe('TextInput', () => {
  it('should apply correct styling for Android', () => {
    Platform.OS = 'android';
    const {getByTestId} = renderComponent(<TextInput />);

    const inputField = getByTestId('TextInput');

    expect(inputField.props.style.borderColor).toEqual(colors.grey);
    expect(inputField.props.style.color).toEqual(colors.grey);
  });

  it('should apply correct styling for iOS', () => {
    Platform.OS = 'ios';
    const {getByTestId} = renderComponent(<TextInput />);

    const inputField = getByTestId('TextInput');

    expect(inputField.props.style.borderColor).toEqual(colors.blue);
    expect(inputField.props.style.color).toEqual(colors.blue);
  });
});
