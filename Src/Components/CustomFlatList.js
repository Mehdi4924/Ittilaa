import {StyleSheet, Text, View, FlatList, Image, Pressable} from 'react-native';
import React from 'react';

export default function CustomFlatList(props) {
  return (
    <View>
      <FlatList
        contentContainerStyle={props.flatListStyle}
        horizontal={props.horizontal}
        showsHorizontalScrollIndicator={false}
        data={props.data}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <Pressable key={index}>
            <View style={props.featureCard}>
              <Image
                source={item.image}
                style={props.featureImageStyle}
                resizeMode="contain"
              />
              <Text style={props.featureNameText} 
              numberOfLines={2}
              >{item.name}</Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
