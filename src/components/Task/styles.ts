import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: THEME.COLORS.GRAY_500,
    padding: 12,
    height: 64,
    marginBottom: 8,
    borderRadius: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '85%',
  },
  textTask: {
    color: THEME.COLORS.GRAY_100,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.SM,
    marginLeft: 12,
  },
  checkedText: {
    textDecorationLine: 'line-through',
    color: THEME.COLORS.GRAY_300,
  },
  button: {
    width: 18,
    height: 18,
    borderRadius: 99,
    borderColor: THEME.COLORS.BLUE,
    borderWidth: 2,
  },
  checkedButton: {
    width: 18,
    height: 18,
    borderRadius: 99,
    borderColor: THEME.COLORS.PURPLE,
    borderWidth: 2,
    backgroundColor: THEME.COLORS.PURPLE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    minWidth: 22,
  },
});
