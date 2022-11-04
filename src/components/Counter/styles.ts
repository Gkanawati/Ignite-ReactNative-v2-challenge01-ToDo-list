import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  text: {
    color: THEME.COLORS.BLUE,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: THEME.FONT_SIZE.SM,
  },
  counter: {
    width: 25,
    marginLeft: 8,
    textAlign: 'center',
    color: THEME.COLORS.GRAY_200,
    backgroundColor: THEME.COLORS.GRAY_400,
    borderRadius: 99,
    fontFamily: THEME.FONT_FAMILY.BOLD,
  },
});
