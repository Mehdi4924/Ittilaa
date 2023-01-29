import React, {useEffect, useRef} from 'react';
import {
  Alert,
  PermissionsAndroid,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MapboxGL from '@rnmapbox/maps';
import {hp, wp} from '../../Constants/Responsive';
import {allImages} from '../../Constants/Images';
import {Image} from 'react-native';
import {Icon} from '@rneui/base';
import {colors} from '../../Constants/Colors';

MapboxGL.setWellKnownTileServer('Mapbox');
MapboxGL.setAccessToken(
  'pk.eyJ1IjoiaWZ0aWtoYXJpZmZpIiwiYSI6ImNsYnI0ZjZqODBxdjczbm51MWxneWF6bGkifQ.HkA420rtPufM-amJBQV7bw',
);

const Maps = () => {
  const refMap = useRef();
  useEffect(() => {
    requestLocationPermission();
  }, []);

  async function requestLocationPermission() {
    try {
      {
        PermissionsAndroid.requestMultiple(
          [
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
          ],
          {
            title: 'Give Location Permission',
            message: 'App needs location permission to find your position.',
          },
        )
          .then(granted => {
            console.log(granted);
          })
          .catch(err => {
            console.warn(err);
          });
      }
    } catch (err) {
      console.warn(err);
    }
  }
  const coordinatesNew = [
    [-73.98330688476561, 40.76975180901395],
    [-73.96682739257812, 40.761560925502806],
    [-74.00751113891602, 40.746346606483826],
    [-73.95343780517578, 40.7849607714286],
    [-73.99017333984375, 40.71135347314246],
    [-73.98880004882812, 40.758960433915284],
    [-73.96064758300781, 40.718379593199494],
    [-73.95172119140624, 40.82731951134558],
    [-73.9829635620117, 40.769101775774935],
    [-73.9822769165039, 40.76273111352534],
    [-73.98571014404297, 40.748947591479705],
  ];
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView
          style={styles.map}
          ref={ref => (refMap.current = ref)}
          // onRegionDidChange={() => getBounds()}
          zoomEnabled
          key="mainmap"
          logoEnabled={false}>
          {/* <MapboxGL.UserLocation visible={true} /> */}
          <MapboxGL.Camera
            zoomLevel={15}
            centerCoordinate={[74.3000874, 31.4796355]}
          />
          <MapboxGL.PointAnnotation
            key="key1"
            id="id1"
            title="Test"
            coordinate={[74.3000874, 31.4796355]}>
            <Icon
              name="location-historyge"
              type="material"
              color={colors.primary}
              size={30}
            />
          </MapboxGL.PointAnnotation>
        </MapboxGL.MapView>
        <TouchableOpacity
          style={{backgroundColor: 'red', position: 'absolute', zIndex: 1000}}>
          <Text>press tjhis</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Maps;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: hp(100),
    width: wp(100),
  },
  map: {
    flex: 1,
  },
});
