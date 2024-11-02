import { AVPlaybackSource } from 'expo-av';

export interface Sound {
  name: string;
  file: AVPlaybackSource;
  description: string;
}

const sounds: Sound[] = [
  {
    name: 'die',
    file: require('@/audio/smb_mariodie.wav'),
    description: 'a mario sound',
  },
  {
    name: 'something',
    file: require('@/audio/smb_gameover.wav'),
    description: 'another mario sound',
  },
];

export default sounds;
