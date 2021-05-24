import React, {Component} from 'react';
import {Button,Image, StyleSheet, Text, View,FlatList,TextInput} from 'react-native';
//import Comments  from './Comments';
//import Rate from "./Rate";
import axios from 'axios'
import { AirbnbRating } from 'react-native-ratings';
import { Comment, Recipe } from '../Screens';


export default class Tabkhat extends Component{
  

  
    state ={
        data:[]
      }
    
      fetchData= async()=>{
        const response = await fetch("http://192.168.1.8:3000/finalfinal");
        const customers = await response.json();
        this.setState({data: customers});
    
      }

      



      
      
        

     
     
    componentDidMount(){
      this.fetchData();
     // this.submitData();
      
    }
      render() {
        return (
          <View >
          
           <FlatList
           data={this.state.data}
           keyExtractor={(item,index) => index.toString()}
           renderItem={({item}) =>
           
    
           <View style={{backgroundColor:'#fffafa',padding:10,margin:10}}>
             <Text style={{color:'#000000', fontWeight:'bold'}}>{item.list_title}</Text>
              <Image source={{uri:item.list_img}} style = {{height: 200, resizeMode : 'stretch', margin: 5 }} />
              <Text style={{color:'#000000', fontWeight:'bold'}}>{item.list_p}</Text>
              <Text style={{color:'#000000', fontWeight:'bold'}}>{item.list_time}</Text>
              <Text style={{color:'#000000', fontWeight:'bold'}}>{item.list_timeA}</Text>
              <Text style={{color:'#000000', fontWeight:'bold'}}>{item.list_time1}</Text>
              <Text style={{color:'#000000', fontWeight:'bold'}}>{item.list_time1A}</Text>
              <Text style={{color:'#000000', fontWeight:'bold'}}>{item.list_count}</Text>
              <Text style={{color:'#000000', fontWeight:'bold'}}>{item.list_countA}</Text>
              <Text style={{color:'#000000', fontWeight:'bold'}}>{item.list_amount}</Text>
              <Text style={{color:'#000000', fontWeight:'bold'}}>{item.list_name}</Text>
              <Text style={{color:'#000000', fontWeight:'bold'}}>{item.list_Idiv}</Text>
              <Text style={{color:'#000000', fontWeight:'bold'}}>{item.list_way}</Text>
              <Text style={{color:'#000000', fontWeight:'bold'}}>{item.list_name1}</Text>
              <Text style={{color:'#000000', fontWeight:'bold'}}>{item.list_IIdiv}</Text>

              
              <AirbnbRating  size={15}/>
    
             
              <View>
                
         <Comment/>
          
  
        </View>
             </View>
            
    
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
     
      inputs: {
        height: 50,
        width: 370,
        borderColor: "#005d66",
        borderWidth: 1,
        padding: 15,
        borderRadius: 20,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
      },
    
     
      loginButton: {
        bottom:100,
        backgroundColor: '#fff',
        justifyContent: "center",
        alignItems: "center",
        height: 45,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
        width: 150,
        borderRadius: 30,
        padding: 15,

        
      },
      
    });


   