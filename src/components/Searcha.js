import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {CheckBox} from "native-base"

export default class App extends React.Component {
  state={
    selectedLang1:false,
    selectedLang2:false,
    selectedLang3:false,
    selectedLang4:false,

  }
  render(){
    const {selectedLang1,selectedLang2,selectedLang3,selectedLang4} = this.state
    return (
      <View style={styles.container}>
        <Text style={styles.header}>قم باختيار المكونات التي لديك لنساعدك باختيار طبخة اليوم</Text>
        <View style={styles.item} >
        <View style={styles.item2}>
        <Text style={
              {...styles.checkBoxTxt,
                color:this.state.selectedLang1?"blue":"gray",
                fontWeight:this.state.selectedLang1? "bold" :"normal"
              }}
              >حلبة</Text>
            <CheckBox style={styles.checkBox}  checked={selectedLang1} color="blue" onPress={()=>this.setState({selectedLang1:!selectedLang1})}/>
           </View>
        </View>
        <View style={styles.item}>
        <View style={styles.item2}>
        <Text style={
              {...styles.checkBoxTxt,
                color:this.state.selectedLang2?"blue":"gray",
                fontWeight:this.state.selectedLang2? "bold" :"normal"
              }}
              >الفلفل الأخضر</Text>
            <CheckBox style={styles.checkBox}  checked={this.state.selectedLang2} color="blue" onPress={()=>this.setState({selectedLang2:!selectedLang2})}/>
            </View>
        </View>
        <View style={styles.item}>
          <View style={styles.item2}>
        <Text style={
              {...styles.checkBoxTxt,
                color:this.state.selectedLang3?"blue":"gray",
                fontWeight:this.state.selectedLang3? "bold" :"normal"
              }}
              >الثوم</Text>
            <CheckBox style={styles.checkBox}  checked={this.state.selectedLang3} color="blue" onPress={()=>this.setState({selectedLang3:!selectedLang3})}/>
            </View>
        </View>
        <View style={styles.item}>
        <View style={styles.item2}>
        <Text style={
              {...styles.checkBoxTxt,
                color:this.state.selectedLang4?"blue":"gray",
                fontWeight:this.state.selectedLang4? "bold" :"normal"
              }}
              >بصل</Text>
            <CheckBox style={styles.checkBox} checked={this.state.selectedLang4} color="blue" onPress={()=>this.setState({selectedLang4:!selectedLang4})}/>
           </View>
        </View>
        <TouchableOpacity style={styles.submit}>
          <Text style={{color:"white"}}>SUBMIT</Text>
        </TouchableOpacity>
  
  
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    fontSize:25,
    fontWeight:"bold",
    color:"#364f6b",
    marginBottom:40
  },
  item:{
    width:"80%",
    backgroundColor:"#fff",
    borderRadius:20,
    padding:10,
    marginBottom:10,
    flexDirection:"row",
    
  },
  item2:{
    marginLeft:250

  },

  submit:{
    width:"80%",
    backgroundColor:"blue",
    borderRadius:20,
    padding:10,
    alignItems:"center",
    marginTop:40
  }
});