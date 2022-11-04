import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    marginRight: 4,
    backgroundColor: THEME.COLORS.GRAY_500,
    padding: 16,
    height: 54,
    borderRadius: 6,
    color: THEME.COLORS.GRAY_100,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  },
  addButton: {
    width: 52,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    backgroundColor: THEME.COLORS.BLUE_DARK,
  },
});
