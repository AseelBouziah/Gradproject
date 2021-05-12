import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Alert, FlatList, Image, TouchableOpacity } from 'react-native';
import Swipeout from 'react-native-swipeout';
const ic_delete = require('../images/delete.png');
const ic_back = require('../images/return.png');


export default class favourite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 0, name: 'الليزي كيك', img: 'https://www.taabkh.com/files/styles/recipe/public/recipe/2021/01/Lazy-Cake.jpg' },
        { id: 1, name: 'كرات بقايا الكيك', img: 'https://www.taabkh.com/files/styles/recipe/public/recipe/2021/01/Leftover-cake-balls.jpg' },
        { id: 2, name: 'حلا التراميسو في 10 دقائق', img: 'https://www.taabkh.com/files/styles/recipe/public/recipe/2021/01/Tramisu-desserts.jpg' },
        { id: 3, name: 'كيكة التوفي', img: 'https://www.taabkh.com/files/styles/recipe/public/recipe/2021/01/Toffee-cake.jpg' },
        { id: 4, name: 'كيكة الليمون بالصوص', img: 'https://www.taabkh.com/files/styles/recipe/public/recipe/2021/01/Lemon-cake-with-sauce.jpg' }
      ],
      close: false
    };
  }
  item = null;

  _renderButtonDelete = () => {
    return (
      <TouchableOpacity style={styles.button} onPress={() => {
        this.setState({
          data: [... this.state.data.filter(e => e.id != this.item.id)]
        })
        this.item = null;
      }}>
        <Image source={ic_delete} resizeMode='contain' style={{ width: 20, height: 20 }} />
      </TouchableOpacity>
    )
  }

  _renderButtonClose = () => {
    return (
      <TouchableOpacity style={[styles.button, { backgroundColor: 'orange' }]} onPress={() => {
        this.setState({
          close: !this.state.close
        })
      }}>
        <Image source={ic_back} resizeMode='contain' style={{ width: 20, height: 20 }} />
      </TouchableOpacity>
    )
  }

  swipeoutBtns = [
    {
      // text: 'Delete',
      backgroundColor: 'white',
      component: this._renderButtonDelete(),
      // onPress: () => {
      //   Alert.alert('Delete')
      // }
    },
    {
      // text: 'Close',
      component: this._renderButtonClose(),
      backgroundColor: 'white',
      // onPress: () => {
      //   Alert.alert('Close')
      // }
    }
  ];

  renderItem = ({ item, index }) => {
    return (
      <Swipeout
        close={this.state.close}
        onOpen={() => {
          this.item = item
        }}
        style={{ padding: 4, backgroundColor: 'white' }}
        autoClose
        right={this.swipeoutBtns}>
        <View style={styles.item}>
          <Image source={{ uri: item.img }} resizeMode='stretch' style={styles.img} />
          <View style={{ flexDirection: 'column', marginLeft: 10, flex: 1, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold' , textAlign:'right'}}>{item.name}</Text>
          </View>
        </View>
      </Swipeout>

    )
  }

  render() {
    const { data } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.list}
          data={data}
          keyExtractor={item => `key-${item.id}`}
          renderItem={this.renderItem}
          extraData={data}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  list: {
    flex: 1, padding: 8
  },
  item: {
    flexDirection: 'row',
    marginTop: 8,
    padding: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    backgroundColor: 'white',
    elevation: 3,
  },
  img: {
    width: 80,
    height: 80,
    flex:1
    
  },
  button: {
    flex: 1, backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center', marginTop: 12, padding: 12
  }
})