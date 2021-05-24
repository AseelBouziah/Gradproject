import React, {Component} from 'react';
import {TouchableOpacity,Image, StyleSheet, Text, View,FlatList} from 'react-native';
import Logo from './Logo';
import { Paragraph } from 'react-native-paper';
import { Icon } from 'react-native-elements'

export default class Wasfatk extends Component{
  

  
      render() {
        return (
       
      
          <View style={styles.container} >
               <Icon
          reverse
          name='ios-fast-food'
          type='ionicon'
          color='#517fa4'
          size='80'
        />
          <Paragraph style={{padding:30, }}>
          نحتار انا وزميلاتي بالسكن ما هي طبخة اليوم 
         ومن سيقوم بطهيها حيث ان خبرتنا بالطهي ليست كافية فكرنا لو ان هناك
           تطبيق يجمع بين المساعدة باختيار طبخة اليوم مع طريقتها و بين تعلم وصفة طبخة معينة...
           ومن هنا كانت فكرة(اوريجانو),,, ما زالت الفكرة في بدايتها
           انتظر اقتراحاتكم وارائكم ليكون تطبيقكم المفضل :)
    </Paragraph>    
    </View>      
   
        );
      }
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fffafa',
      },
    });