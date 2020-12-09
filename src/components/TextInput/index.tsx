import React from 'react';
import {TextInput, TextInputProps} from 'react-native';
import useStyles from './styles';

export type IInputFieldProps = Omit<TextInputProps, 'style'>;

function CustomTextInput(props: IInputFieldProps) {
  const styles = useStyles();

  return <TextInput testID="TextInput" {...props} style={styles.input} />;
}

export default CustomTextInput;
