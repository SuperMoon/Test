/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var {
    AppRegistry,
    Component,
    ScrollView,
    NavigatorIOS,
    Navigator,
    StyleSheet,
    View,
    PixelRatio,
    Image,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    TextInput,
} = React;

var { Icon,TabBarIOS} = require('react-native-icons');

var TitleComp = React.createClass({
    render:function(){
        return (
            <TextInput
              ref={'TXI'}
              autoCapitalize="none"
              defaultValue="查找更多小狗"
              clearButtonMode="while-editing"
              onChange={this._toSearchPage}
              onFocus={this._toSearchPage}
              onEndEditing={this._toSearchPage}
              style={styles.textInput}
            />
        );
    },
    _toSearchPage: function(){
        this.props.toRoute({
            name: "To Search Page",
            component: SearchPage
        }
        );
    }
});

var SearchPage = React.createClass({

  nextPage: function() {
    console.log(this.props);

    this.props.toRoute({
      name: "A new screen",
      titleComponent:TitleComp ,
      component: HelloPage
    });
  },

  render: function() {
    return (
      <View>
        <TouchableHighlight onPress={this.nextPage} underlayColor="transparent">
          <Text>This is search page</Text>
        </TouchableHighlight>
      </View>
    );
  }
});


//var ImageSwiper = require("./ImageSwiper").default;

import ImageSwiper from "./ImageSwiper";


var Sview = React.createClass({
    render(){
        return (
          <ScrollView
            automaticallyAdjustContentInsets={false}
            onScroll={() => { console.log('onScroll!'); }}
            scrollEventThrottle={200}
            stickyHeaderIndices={[0]}
            style={styles2.scrollView}>
            {THUMBS.map(createThumbRow)}
          </ScrollView>
      );
    }
})
/*
exports.displayName = (undefined: ?string);
exports.title = '<ScrollView>';
exports.description = 'Component that enables scrolling through child components';
exports.examples = [
{
  title: '<ScrollView>',
  description: 'To make content scrollable, wrap it within a <ScrollView> component',
  render: function() {
    return (
      <ScrollView
        automaticallyAdjustContentInsets={false}
        onScroll={() => { console.log('onScroll!'); }}
        scrollEventThrottle={200}
        style={styles.scrollView}>
        {THUMBS.map(createThumbRow)}
      </ScrollView>
    );
  }
}, {
  title: '<ScrollView> (horizontal = true)',
  description: 'You can display <ScrollView>\'s child components horizontally rather than vertically',
  render: function() {
    return (
      <ScrollView
        automaticallyAdjustContentInsets={false}
        horizontal={true}
        style={[styles.scrollView, styles.horizontalScrollView]}>
        {THUMBS.map(createThumbRow)}
      </ScrollView>
    );
  }
}];
*/
var Thumb = React.createClass({
  shouldComponentUpdate: function(nextProps, nextState) {
    return false;
  },
  render: function() {
    return (
      <View style={styles2.button}>
        <Image style={styles2.img} source={{uri:this.props.uri}} />
      </View>
    );
  }
});

//var THUMBS = ['https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-ash3/t39.1997/p128x128/851549_767334479959628_274486868_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851561_767334496626293_1958532586_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-ash3/t39.1997/p128x128/851579_767334503292959_179092627_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851589_767334513292958_1747022277_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851563_767334559959620_1193692107_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851593_767334566626286_1953955109_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851591_767334523292957_797560749_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851567_767334529959623_843148472_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851548_767334489959627_794462220_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851575_767334539959622_441598241_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-ash3/t39.1997/p128x128/851573_767334549959621_534583464_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851583_767334573292952_1519550680_n.png'];
var THUMBS = ['https://123p0.sogoucdn.com/imgu/2015/07/20150730114336_910.png','https://12…53_67.jpg','https://123p3.sogoucdn.com/imgu/2015/12/20151211115828_994.jpg'];
THUMBS = THUMBS.concat(THUMBS); // double length of THUMBS
var createThumbRow = (uri, i) => <Thumb key={i} uri={uri} />;

// var HomePage = React.createClass({
class HomePage extends React.Component{

  nextPage() {
    this.props.toRoute({
      name: "A new screen",
      component: HelloPage,
    });
  }

  render() {
    return (
        <ScrollView>

            <ImageSwiper height={300} showsButtons={false} autoplay={true} loop={true} autoplayTimeout={2.5} />
            <View>
                <Sview />
            </View>
            <View>
                <ImageSwiper height={300} showsButtons={false} autoplay={true} loop={true} autoplayTimeout={2.5} />
            </View>

        </ScrollView>
    );
  }
};

var rightButton = React.createClass({
  render(){
    return (<TouchableOpacity onPress={this._onFilterPress}>
        <Icon style={styles.user} name="fontawesome|filter"  size={24} color="white" />
    </TouchableOpacity>);
  },

  _onFilterPress(){
      this.props.toRoute({
        name: "Filter Page",
        component: SearchPage,
      });
  }
});

var leftButton = React.createClass({
  render(){
    return (<TouchableOpacity  onPress={this._userPress}>
        <Icon style={styles.user} name="fontawesome|user"  size={24} color="white"/>
    </TouchableOpacity>);
  },

  _userPress(){
      this.props.toRoute({
        name: "user Page",
        component: SearchPage,
      });
  }
});

var firstRoute = {
  name: 'Welcome!',
  titleComponent:(TitleComp),
  rightCorner:rightButton,
  leftCorner:leftButton,
  component: HomePage,
};

module.exports = firstRoute;

var styles2 = StyleSheet.create({
  scrollView: {
    backgroundColor: '#6A85B1',
    height: 300,
  },
  horizontalScrollView: {
    height: 120,
  },
  containerPage: {
    height: 50,
    width: 126,
    backgroundColor: '#527FE4',
    padding: 5,
  },
  text: {
    fontSize: 20,
    color: '#888888',
    left: 80,
    top: 20,
    height: 40,
  },
  button: {
    margin: 7,
    padding: 5,
    alignItems: 'center',
    backgroundColor: '#eaeaea',
    borderRadius: 3,
  },
  buttonContents: {
    flexDirection: 'row',
    width: 124,
    height: 64,
  },
  img: {
    width: 126,
    height: 140,
  }
});



var BGWASH = 'rgba(255,255,255,0.8)';
var styles = StyleSheet.create({
  wrap:{
    flex:1,
    flexDirection:'column',
    backgroundColor:"#000",
    height:120,
    justifyContent: 'center',
  },
  imageswiper:{

    height:150,
    flexDirection:"column",
    alignItems: 'center',

  },
  user:{
    width:24,
    height:24,
    marginLeft: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'transparent',
    tintColor:'#fff',

    borderRadius: 3,
  },

  textInput: {
    backgroundColor: BGWASH,
    borderColor: '#000',
    borderRadius: 3,
    borderWidth: 1,
    height: 34,
    paddingLeft: 10,
    borderRadius:5,
    margin:3,
    paddingTop: 3,
    paddingBottom: 3,
    width:220,
    justifyContent: 'center',
    fontSize: 14,
  },
});
