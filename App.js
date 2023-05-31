import * as React from 'react';
import {FCMNotification, configureAxiosHeaders} from './Src/Api/ApiCalls';
import Routes from './Src/Navigation/Routes';
import {LogBox} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import NotificationService from './Src/Constants/NotificationService';
import PushNotification from 'react-native-push-notification';
import axios from 'axios';

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
      PushNotification.localNotification({
        /* Android Only Properties */
        channelId: 'firebase-notification',
        title: remoteMessage?.notification?.title,
        message: remoteMessage?.notification?.body,
      });
    });
    return unsubscribe;
  }, []);

  async function requestUserPermission() {
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
    await messaging()
      .subscribeToTopic('nots')
      .then(res => {
        console.log('response subscribing', res);
      })
      .catch(err => {
        console.log('error subscribing', err);
      });
      //yahan sy
    axios.defaults.headers['Content-Type'] = 'application/json';
    let data = JSON.stringify({
      to: '/topics/nots',
      priority: 'high',
      content_available: true,
      notification: {
        title: 'Title',
        body: 'Body',
      },
    });
    FCMNotification.sendNotificationToAll(data)
      .then(res => {
        console.log('res sending not', res);
      })
      .catch(err => {
        console.log('error ', err);
      })
      .finally(function () {
        axios.defaults.headers['Content-Type'] = 'multipart/form-data';
      });
  }
  return <Routes />;
}
