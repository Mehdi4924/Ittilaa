import Toast from 'react-native-simple-toast';
import {PermissionsAndroid, Platform} from 'react-native';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';

const isPermitted = async () => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'External Storage Write Permission',
          message: 'App needs access to Storage data',
        },
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      return false;
    }
  } else {
    return true;
  }
};
export default async function FileDownloader(file, cb) {
  if (Platform.OS == 'android') {
    if (await isPermitted()) {
      try {
        const newfile = await CameraRoll.save(file, 'photo');
        if (newfile) {
          cb({error: false});
        }
      } catch (err) {
        console.log('error', err);
        cb({error: true});
      }
    } else {
      cb({error: true});
      Toast.show('Please Grant Permission For Downloading', Toast.LONG);
    }
  } else {
    const file = CameraRoll.save(file, 'photo');
  }
  return null;
}
