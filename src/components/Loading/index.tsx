import { View, ActivityIndicator } from 'react-native';
import { THEME } from '../../theme';

export function Loading() {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <ActivityIndicator size={30} color={THEME.COLORS.BLUE} />
    </View>
  );
}
