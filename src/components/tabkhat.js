import React, {Component} from 'react';
import {TouchableOpacity,Image, StyleSheet, Text, View,FlatList} from 'react-native';
import Integreads from './Integreads';
import { createStackNavigator } from 'react-navigation';
import profile from '../Screens'
export default class Tabkhat extends Component{


    state ={
        data:[]
      }
    
      fetchData= async()=>{
        const response = await fetch("http://192.168.1.8:3000/imgtitle");
        const customers = await response.json();
        this.setState({data: customers});
    
      }
    componentDidMount(){
      this.fetchData();
    }
      render() {
        return (
          <View >
          
           <FlatList
           data={this.state.data}
           keyExtractor={(item,index) => index.toString()}
           renderItem={({item}) =>
           <TouchableOpacity
                key={item.list_img}
                onPress={() => {
                  this.props.navigation.navigate('About');
                }
         }>
    
           <View style={{backgroundColor:'#fffafa',padding:10,margin:10}}>
              <Text style={{color:'#000000', fontWeight:'bold'}}>{item.list_title}</Text>
              <Image source={{uri:item.list_img}} style = {{height: 200, resizeMode : 'stretch', margin: 5 }}
               />
              


             </View>
             </TouchableOpacity>
    
           }
    
           />
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


    export const DetailsT =  ({ route, navigation }) => {
      return (
        <View>
          <Text>hi</Text>
        </View>
      );
      
    };