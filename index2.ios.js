/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Login = require('./app/page/login');
var Index = require('./app/page/index');
var store = require('react-native-simple-store');

var {
  AppRegistry,
  Text
} = React;

// StatusBarIOS.setStyle('light-content');

var app = React.createClass({
  getInitialState: function() {
    var logined = true;

    return{
      logined:logined,
    };

    //this.getUserInfo();
  },

  componentDidMount(){
      this.getUserInfo();
  },

  _renderLogin:function(){
    return (
        <Login loginResult={(userData)=>this._loginSucc(userData)}/>
      );
  },

  _loginSucc:function(userData){
    store.save('user', userData);
    this.setState({
      logined:true,
    });
  },

  _renderIndex:function(){
    return (
        <Index/>
      );
  },
  async getUserInfo(){
      let logined = false;
      logined = await store.get('user');
      this.setState({logined:logined});
      console.log(this.state.logined);
  },
  render: function() {
    if(this.state.logined){
        return this._renderIndex();
    }else{
        return this._renderLogin();
    }
  },

});

AppRegistry.registerComponent('HelloWorld', () => app);
