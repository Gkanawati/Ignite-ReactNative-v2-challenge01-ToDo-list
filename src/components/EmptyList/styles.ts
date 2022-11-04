import { THEME } from './../../theme/index';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    textAlign: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 48,
    borderTopWidth: 1,
    borderTopColor: THEME.COLORS.GRAY_300,
  },
  icon: {
    width: 56,
    height: 56,
    marginBottom: 16,
  },
  text: {
    fontSize: THEME.FONT_SIZE.SM,
    color: THEME.COLORS.GRAY_300,
  },
  textBold: {
    fontFamily: THEME.FONT_FAMILY.BOLD,
  },
  textRegular: {
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  },
});
