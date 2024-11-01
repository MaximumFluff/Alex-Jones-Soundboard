import ClipButton from '@/components/ClipButton';
import { View } from 'react-native';

export default function Index() {
  let rows: React.JSX.Element[] = [];
  for (let i = 0; i < 20; i++) {
    rows.push(<ClipButton index={i} />);
  }
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
      }}
    >
      {rows}
    </View>
  );
}
