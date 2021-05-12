
//style={{ margin: 20, width:400, height:200}}

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';


export const Categories = () => {
  const navigation = useNavigation(); 
    return (
      <View style={styles.container}>
       
       <Text style={{color: 'black',textAlign:'center',fontSize: 20,
    fontWeight: 'bold'}}  >البحث حسب المكونات</Text>
        <TouchableOpacity style={styles.welcome} activeOpacity={0.5} onPress={() => navigation.navigate('Searcha')}
>
        
        <ImageBackground source={require("../images/inte.jpg")} style={{width: '100%', height: '100%'}} > 
   <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
  
  
     
   </View>
   
</ImageBackground>

        </TouchableOpacity>
        <Text style={{color: 'black',textAlign:'center',fontSize: 20,
    fontWeight: 'bold'}}>البحث حسب الوقت</Text>
        <TouchableOpacity style={styles.welcome} activeOpacity={0.5} onPress={() => navigation.navigate('Searchb')} > 
          
        <ImageBackground source={require("../images/time.jpg")} style={{width: '100%', height: '100%'}}>
   <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
    
   </View>
</ImageBackground>
                </TouchableOpacity>
                <Text style={{color: 'black',textAlign:'center',fontSize: 20,
    fontWeight: 'bold'}}>البحث حسب السعرات الحرارية</Text>
                <TouchableOpacity style={styles.welcome} activeOpacity={0.5} onPress={() => navigation.navigate('Searchc')}>
                

                <ImageBackground source={require("../images/cal.jpg")} style={{width: '100%', height: '100%'}}>
   <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
     
   </View>
</ImageBackground>
                        </TouchableOpacity>
                       
                        
                        
       
      </View>
    );
  
              }

const styles = StyleSheet.create({
  containerc: {
    flex: 1,
   // marginTop: 20,
    backgroundColor: '#F5FCFF',
  },
  welcome: {

    width:400,
    height:"27%",
    borderRadius: 8,
    margin:10,
    alignSelf:"center",
    opacity:0.9,

  }
});