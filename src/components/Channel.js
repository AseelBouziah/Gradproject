import React, {Component} from 'react';
import {TouchableOpacity,Image, StyleSheet, Text, View,FlatList} from 'react-native';

export default class Channel extends Component{
  

    state ={
        data:[]
      }
    
      fetchData= async()=>{
        const response = await fetch("http://192.168.1.8:3000/tips");
        const customers = await response.json();
        this.setState({data: customers});
    
      }
    componentDidMount(){
      this.fetchData();
    }
      render() {
        return (
          <View style={{top:35}}>
          
           <FlatList
           data={this.state.data}
           keyExtractor={(item,index) => index.toString()}
           renderItem={({item}) =>
           
    
           <View style={{backgroundColor:'#fffafa',padding:10,margin:10}}>
             <Text style={{color:'#000000', fontWeight:'bold',textAlign:'center',fontSize:20}}>{item.list_title}</Text>
              <Image source={{uri:item.list_img}} style = {{height: 200, resizeMode : 'stretch', margin: 5 }} />
              <Text style={{color:'#000000', fontWeight:'bold'}}>{item.list_Idiv}</Text>
              

            
            

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
    });