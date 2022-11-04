import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.GRAY_600,
  },
  contentContainer: {
    paddingHorizontal: 24,
    marginTop: -25,
    flex: 1,
  },
  countTasks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
    paddingBottom: 20,
  },
  createdText: {
    color: THEME.COLORS.BLUE,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: THEME.FONT_SIZE.SM,
  },
  finishedText: {
    color: THEME.COLORS.PURPLE,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: THEME.FONT_SIZE.SM,
  },
});
