import * as React from "react";
//import { HALLS } from "../halls";
import { StyleSheet, View, Image ,ScrollView, Alert } from "react-native";
import { Searchbar } from "react-native-paper";
import { Card} from "react-native-elements";
import axios from 'axios'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import CheckboxGroup from 'react-native-checkbox-group'



export default class Searchc extends React.Component {
  constructor(props) {
    super(props),
      (this.state = {

        search: '',
        rooms: null,
        roomNo: null,
        desc: "",
        floor: "",
        //college: "",
        //campus: "",
      });
    //this.setData = this.setData.bind(this);
    

  }

  updateSearch = (search) => {
    this.setState({search});
  };
  setData = (number) => {
 
    //let halls = this.state.rooms;
   let url4 = 'http://' + '192.168.1.8' + ':3000/searcha/'+'ahg';
    axios.get(url4)
    .then(response => {
      this.setState({ rooms: response.data }) 
        this.setState({rooms : response.data})
       
  })
  alert('دجاج,ثوم,بصل')
  
  }

  render() {



    const search = this.state.search;
    const rooms = this.state.rooms;
    return (
      <Container>
        <Header androidStatusBarColor="#146aff" style={{ backgroundColor: "#146aff" }}>
          <Left/>
          <Body>
            <Title style={{color:'white'}}>المكونات</Title>
          </Body>
          <Right />
        </Header>
        <Content>
         
        <CheckboxGroup
              callback={(selected) => { console.log(selected) }}
              iconColor={"#00a2dd"}
              iconSize={30}
              checkedIcon="ios-checkbox-outline"
              uncheckedIcon="ios-square-outline"
              checkboxes={[
                {
                  label: "دجاج", // label for checkbox item
                  value: 1, // selected value for item, if selected, what value should be sent?
                  selected: true // if the item is selected by default or not.
                },
                {
                  label: "حلبة",
                  value: 2
                },
                {
                  label: "ثوم",
                  value: 3
                },
                {
                  label: "بصل",
                  value: 4
                },
                {
                  label: "ارز",
                  value: 5
                },
                {
                  label: "بندورة",
                  value: 6
                },
              ]}
              labelStyle={{
                color: '#333'
              }}
              rowStyle={{
                flexDirection: 'row'
              }}
              rowDirection={"column"}
            />
            <ScrollView style={styles.scrollView}> 
             {this.state.rooms && this.state.rooms.map(rom=>
              <Card title="وصفة الطبيخ">
              <Text style={{ margin: 10 }}> {rom.list_title}</Text>
              <Image source={{uri:rom.list_img}} style = {{height: 200, resizeMode : 'stretch', margin: 5 }} />
              <Text style={{ margin: 10 }}> {rom.list_p}</Text>
              <Text style={{ margin: 10 }}> {rom.list_time}</Text>
              <Text style={{ margin: 10 }}> {rom.list_timeA}</Text>
              <Text style={{ margin: 10 }}> {rom.list_time1}</Text>
              <Text style={{ margin: 10 }}> {rom.list_time1A}</Text>
              <Text style={{ margin: 10 }}> {rom.list_count}</Text>
              <Text style={{ margin: 10 }}> {rom.list_countA}</Text>
              <Text style={{ margin: 10 }}> {rom.list_calories}</Text>
              <Text style={{ margin: 10 }}> {rom.list_caloriesA}</Text>
              <Text style={{ margin: 10 }}> {rom.list_amount}</Text>
              <Text style={{ margin: 10 }}> {rom.list_name}</Text>
              <Text style={{ margin: 10 }}> {rom.list_Idiv}</Text>
              <Text style={{ margin: 10 }}> {rom.list_way}</Text>
              <Text style={{ margin: 10 }}> {rom.list_name1}</Text>
              <Text style={{ margin: 10 }}> {rom.list_IIdiv}</Text>
              
            </Card>
            ) }
            </ScrollView>
        </Content>
        <Footer >
          <FooterTab style={{left:'37%'}}>
          <Searchbar
          placeholder="ابحث"
          onChangeText={this.updateSearch}
          value={search}
          onIconPress={(e)=>this.setData(search)}
          icon={({ size, color }) => (
            <Text>بحث</Text>
            
          )}
        />
          </FooterTab>
        </Footer>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: "center",
    backgroundColor: "#f0f8ff",
    top:30
  },
});

