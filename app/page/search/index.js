"use strict";

import React,{
    Component,
    Text,View,
    TextInput,
    ListView
} from "react-native";
//import RealTitle from "./SearchInput";
import styles from './styles';
//import Router from "react-native-router";
//var Subscribable = require('Subscribable');
//var Home = require('../home/index');
var EventEmitter = require('RCTDeviceEventEmitter');

class HotWords extends Component{
    render(){
        return (
            <View style={{flex:1,flexDirection:'row'}}>
              <View>
                <Text> word1 </Text>
              </View>
              <View>
                <Text> 热词2 </Text>
              </View>
            </View>
        );
    }
}
var eventBinded = false;
var num = 0;
var subscriber;

class SearchIndex extends Component{
    /*componentDidMount(){
        var me = this;

        EventEmitter.addListener('change',function(text){
            console.log("changing:"+text);
           me.setState({
            text : text
           })
        })
    }*/


    constructor(props){
        super(props);
        this.state = {text:'hehe',search:false};
        console.log('SearchIndex:');
        console.log(this.props);
    }

    componentDidMount(){
        console.log('search index component did mount');

        var callback = (text) => {
            this.setState({
             text : text
            })
        };

        subscriber && subscriber.remove();
        subscriber = EventEmitter.addListener('change',callback);

    }

    componentWillMount(){
        console.log('search index component will mount');

    }

    componentDidUnMount(){
        console.log('search index component did unmount');

    }

    componentWillUnMount(){
        console.log('search index component will unmount');

    }

    render(){
        if (this.state.search)
            return (
                <View>
                    {this.state.text}
                </View>
            )

        return (
            <View><HotWords />
              </View>
        )
    }
}

module.exports = SearchIndex;
