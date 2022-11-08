import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { hp, wp } from '../Constants/Responsive';

export default function TitaniumFlatlist(props) {
  return (
    <View style={props.listContainerstyle}>
      <FlatList
      contentContainerStyle={props.flatListStyle}
        horizontal={props.horizontal}
        showsHorizontalScrollIndicator={false}
        data={props.data}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <View key={index} style={{alignItems:'center', marginRight:wp(2),}}>
            <View style={props.cardStyle}>
              <Image source={item.image}
              style={{width:wp(20), height:hp(10)}}
              resizeMode='contain'

              />
            </View>
            <Text style={props.listTitleStyle}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
