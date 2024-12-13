import React from 'react';
import {Text, View} from 'react-native';

var a = "うんちっち"+"10";

const YourApp = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>クソアプリ</Text>
      <Text>ふぁっく</Text>
      <Text>{ a }</Text>
    </View>
  );
};

export default YourApp;