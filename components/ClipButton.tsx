import { useState, useEffect } from 'react';
import {
  ToastAndroid,
  TouchableHighlight,
  View,
  StyleSheet,
} from 'react-native';
import { Sound } from '@/constants/Sounds';
import { Audio } from 'expo-av';

type Props = {
  index?: number;
  sound: Sound;
};

const ClipButton = ({ index, sound }: Props) => {
  const [clip, setClip] = useState<Audio.Sound>();
  useEffect(() => {
    return clip
      ? () => {
          console.log('Unloading Sound');
          clip.unloadAsync();
        }
      : undefined;
  }, [sound]);
  return (
    <TouchableHighlight
      underlayColor={'#DDDDDD'}
      activeOpacity={0.5}
      onPress={async () => {
        ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);
        const { sound: audio } = await Audio.Sound.createAsync(sound.file);
        setClip(audio);
        await audio.playAsync();
      }}
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
