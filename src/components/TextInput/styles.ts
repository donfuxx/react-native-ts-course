import {useContext} from 'react';
import {StyleSheet, Platform} from 'react-native';
import {ThemeContext} from '../../theme';

export default function useStyles() {
  const {theme} = useContext(ThemeContext);

  const color = Platform.OS === 'ios' ? theme.colors.blue : theme.colors.grey;
  
  return StyleSheet.create({
    input: {
      height: 36,
      padding: 4,
      marginRight: 5,
      flexGrow: 1,
      fontSize: 18,
      borderWidth: 1,
      borderColor: color,
      color: color,
      borderRadius: 8,
    },
  });
}
