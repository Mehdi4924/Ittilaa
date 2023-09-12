import * as React from 'react';
import { FCMNotification, configureAxiosHeaders } from './Src/Api/ApiCalls';
import Routes from './Src/Navigation/Routes';
import { LogBox, Platform, StatusBar, View } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import NotificationService from './Src/Constants/NotificationService';
import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import axios from 'axios';
import { hp } from './Src/Constants/Responsive';
import { colors } from './Src/Constants/Colors';

function StatusBarPlaceHolder() {
  const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? hp('4.5%') : hp('0%');
  return (
    <View
      style={{
        width: '100%',
        height: STATUS_BAR_HEIGHT,
        backgroundColor: colors.primary,
      }}>
      <StatusBar backgroundColor={colors.primary} barStyle="dark-content" />
    </View>
  );
}

export default function App() {
  React.useEffect(() => {
    LogBox.ignoreAllLogs();
    configureAxiosHeaders();
    requestUserPermission();
    NotificationService();
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log(
        'A new FCM message arrived!',
        JSON.stringify(remoteMessage, null, 2),
      );
      if (Platform.OS = 'android') {

        PushNotification.localNotification({
          /* Android Only Properties */
          channelId: 'firebase-notification',
          title: remoteMessage?.notification?.title,
          message: remoteMessage?.notification?.body,
        });
      } else {
        PushNotificationIOS.addNotificationRequest({
          alertBody: remoteMessage?.notification?.body,
          alertTitle: remoteMessage?.notification?.title,
        });

      }
    });
    return unsubscribe;
  }, []);

  async function requestUserPermission() {
    await messaging().registerDeviceForRemoteMessages();
    const token = await messaging().getToken();
    console.log(token);
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
      SubscribeToTopic();
    }
  }
  async function SubscribeToTopic() {
    await messaging().subscribeToTopic('nots');
  }
  return <>
    <StatusBarPlaceHolder />
    <Routes />
  </>
}
