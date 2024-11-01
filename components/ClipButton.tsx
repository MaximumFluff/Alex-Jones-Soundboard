import {
  ToastAndroid,
  TouchableHighlight,
  View,
  StyleSheet,
} from 'react-native';

type Props = {
  index?: number;
};

const ClipButton = ({ index }: Props) => {
  return (
    <TouchableHighlight
      underlayColor={'#DDDDDD'}
      activeOpacity={0.5}
      onPress={() =>
        ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT)
      }
      onLongPress={() =>
        ToastAndroid.show('My name is Jeff', ToastAndroid.SHORT)
      }
      key={index}
    >
      <View style={styles.view}></View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  view: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    width: 75,
    height: 75,
    marginHorizontal: 5,
    marginVertical: 10,
    padding: 0,
  },
});

export default ClipButton;
