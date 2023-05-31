import PushNotification, {Importance} from 'react-native-push-notification';
export default function NotificationService() {
  PushNotification.createChannel(
    {
      channelId: 'firebase-notification', // (required)
      channelName: `Default channel`, // (required)
      channelDescription: 'A default channel', // (optional) default: undefined.
      soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
      importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
      vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
    },
    created =>
      console.log(`createChannel 'default-channel-id' returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
  );
}
