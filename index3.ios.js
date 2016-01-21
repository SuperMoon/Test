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
    Text,
    TouchableHighlight,
    TouchableOpacity,
    TextInput,
} = React;

//import Header2 from "./components/header";
//var Header = require("./components/header");
var Router = require('react-native-router');
var { Icon,TabBarIOS} = require('react-native-icons');


var leftButton = React.createClass({
  render(){
    return (<TouchableOpacity  onPress={this._userPress} style={{marginLeft:30,paddingLeft:30}}>
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


var index = require('./components/index');

var MyApp = React.createClass({
    componentDidMount(){
        console.log('did mount');
        console.log(this.refs.myrouter);
    },
    openRoute: function(route) {
        route.index = this.state.route.index + 1 || 1;
        this.refs.navigator.replace(route);
    },
  render:function() {
    return (
      <Router ref="myrouter" firstRoute={index} customAction={this.openRoute} />
    )
  }
});


AppRegistry.registerComponent('navProject', () => MyApp);
 // AppRegistry.registerComponent('navProject', () => TwitterApp);

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
    borderColor: 'transparent',
    tintColor:'#fff',

    borderRadius: 3,
  },

  textInput: {
    backgroundColor: BGWASH,
    borderColor: '#000',
    borderRadius: 3,
    borderWidth: 1,
    height: 24,
    paddingLeft: 10,
    margin:3,
    paddingTop: 3,
    paddingBottom: 3,
    width:220,
    justifyContent: 'center',
    fontSize: 14,
  },
});
