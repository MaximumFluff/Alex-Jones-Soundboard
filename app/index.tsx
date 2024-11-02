import ClipButton from '@/components/ClipButton';
import { View, StyleSheet } from 'react-native';
import sounds from '@/constants/Sounds';

export default function Index() {
  return (
    <View style={styles.container}>
      {sounds.map((sound, index) => (
        <ClipButton key={index} sound={sound} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
});
