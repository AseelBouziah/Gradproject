// Homescreen.js
import React from 'react';
import { Button,TouchableOpacity,Image, StyleSheet, Text, View,FlatList } from 'react-native';
import Logo from './Logo';
import { Paragraph } from 'react-native-paper';
export default class about {
 
  render() {
    return (
      <View >
        <Logo/>  
    <Paragraph>
          نحتار انا وزميلاتي بالسكن ما هي طبخة اليوم 
         ومن سيقوم بطهيها حيث ان خبرتنا بالطهي ليست كافية فكرنا لو ان هناك
           تطبيق يجمع بين المساعدة باختيار طبخة اليوم مع طريقتها و بين تعلم وصفة طبخة معينة...
           ومن هنا كانت فكرة(اوريجانو),,, ما زالت الفكرة في بدايتها
           انتظر اقتراحاتكم وارائكم ليكون تطبيقكم المفضل :)
    </Paragraph>
     </View>


    )
  }
}