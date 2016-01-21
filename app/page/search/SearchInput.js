"use strict";
import React,{
    TextInput,View
} from "react-native";

var { Icon } = require('react-native-icons');
var RCTDeviceEventEmitter = require('RCTDeviceEventEmitter');
//import SearchPage from "./index";
//var SearchPage = require("./index");
import styles from './styles';

var SearchTitle = React.createClass({
    getInitialState: function(){
        return {text:'',canSearch:false}
    },

    _update(txt){
        RCTDeviceEventEmitter.emit('change',txt.nativeEvent.text);
    },
    componentDidMount(){
        console.log(this.props);
    },
    render:function(){
        return (
            <View style={styles.searchbar}>
            <View style={{alignItems:'center',justifyContent:'center',marginTop:8,marginLeft:3}}>
                <Icon name="fontawesome|search" style={{height:18,width:18,}} size={18} color="gray" />
            </View>

            <TextInput
              ref={'TXI'}
              autoCapitalize="none"
              placeholder="查找"
              value={this.props.name}
              clearButtonMode="while-editing"
              onChange={this._update}
              onFocus={this._onFocus}
              onSubmitEditing={this._submitSearch}
              onEndEditing={this._toSearchPage}
              keyboardType="web-search"
              style={styles.textInput}
            />
            </View>
        );
    },

    _onFocus: function(event){
        if(this.props.onFocus && !this.state.canSearch){
            this.setState({canSearch:true});
            this.props.onFocus();
        }
    },

    _submitSearch: function(event){
        
        //console.log("submited");
        //console.log([event.nativeEvent.text,this.state.text]);
        if(this.props.onSubmit){
            this.props.onSubmit(event.nativeEvent.text);
        }
    },


    _toSearchPage: function(){
        if(this.props.toSearchPage){
            return this.props.toSearchPage();
        }


        /*
        this.props.toRoute({
            name: '红酒搜索',
            titleComponent:(RealTitle),
            component: SearchPage,
        });*/
    }
});
/*
var RealTitle = React.createClass({
    render:function(){
        return (
            <View style={{backgroundColor:"blue",marginLeft:5,borderColor:"blur",borderWidth:1,borderRadius:20}}>
            <TextInput
              ref={'TXI'}
              autoCapitalize="none"
              defaultValue="查找更多"
              clearButtonMode="while-editing"
              //onChange={this._toSearchPage}
              onChange={this._update}
              onFocus={this._toSearchPage}
              onEndEditing={this._toSearchPage}
              style={styles.textInput}
            />
            </View>
        );
    },

    _update(txt){
        RCTDeviceEventEmitter.emit('change',txt);
    },

    _toSearchPage: function(){
        //console.log(this.props.customAction);

        if(!this.props.toPage){
            this.props.toRoute({
                name: '红酒搜索2',
                titleComponent:(RealTitle),
                component: SearchPage,
            });
            return true;
        }

    }
});
*/
module.exports = SearchTitle;//{FakeTitle,RealTitle};
