"use strict";

import React ,{
    Component,
    StyleSheet,
    View,Text
} from "react-native";

import Swiper from "react-native-swiper";

export default class ImageSwiper extends Component{
    constructor(props) {
        super(props);
        this.height = 200;
    }

    render() {
        return (
            <View>
                <Swiper style={styles.wrapper} height={this.props.height ? this.props.height : this.height} {...this.props}>
                    <View style={styles.slide1}>
                      <Text style={styles.text}>Hello Swiper</Text>
                    </View>
                    <View style={styles.slide2}>
                      <Text style={styles.text}>Beautiful</Text>
                    </View>
                    <View style={styles.slide3}>
                      <Text style={styles.text}>And simple</Text>
                    </View>
              </Swiper>
             </View>
        );
    }
}


var styles = StyleSheet.create({
  wrapper: {
     height:200,
     borderBottomColor:"#000",
     borderBottomWidth:1
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})
