/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

 'use strict';

var React = require('react-native');

var Router = require('react-native-router');
var Home = require('./home/');
var BackButton = require("../../components/BackButton");
//var EventEmitter = require("EventEmitter");

export default class Index extends React.Component{

  constructor(props){
    super(props);
    this.state = {route:{
        index:0,
        name:''
    }};
  }

  componentWillMount(){
    //this.eventEmitter = new EventEmitter();
  }

  openRoute(route) {
      console.log('this.props.navigator');
      console.log(this.props.toRoute);
      alert(this.state);

    route.index =  1;
    this.props.toRoute(route);
  }

  myAction(opts){
      console.log('my action');

      this.eventEmitter.emit('myRightBtnEvent', { someArg: 'argValue' });
  }

  render(){
    /*Object.assign(Home,{passProps :{
        events: this.eventEmitter
    }});
    Home.passProps = {
        events: this.eventEmitter
    };*/

    return (
      <Router
        ref="xx"
        headerStyle={{backgroundColor:"#981A1A"}} //红色
        firstRoute={Home}
        backButtonComponent={BackButton}
        customAction={this.myAction}
        data={this.eventEmitter}
      />
    )
  }
}
