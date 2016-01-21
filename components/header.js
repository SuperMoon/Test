/**
 * @flow
 * header for homepage
 */

 var ICONS = {'user':'fontawesome|user','filter':'fontawesome|filter'};

 import React,{
   View,
   TouchableHighlight,
   Text,
   TouchableOpacity,
   TextInput,
   Dimensions,
   StyleSheet
 } from "react-native";


 import type {
   NavigationContext
 }
 from 'NavigationContext';

 var EmptyPage = React.createClass({

   render: function() {
     return (
       <View style={styles.emptyPage}>
         <Text style={styles.emptyPageText}>
           {this.props.text}
         </Text>
       </View>
     );
   },

 });

var { Icon,TabBarIOS} = require('react-native-icons');
//import TimerMixin from 'react-timer-mixin';
//import Dimensions from 'Dimensions';
///var TimerMixin = require('react-timer-mixin');
var ImageSwiper = require('./ImageSwiper');
 /*
type Props = {
  navigator: {
    navigationContext: NavigationContext,
    push: (route: {
      title: string,
      component: ReactClass <any,any,any>
    }) => void,
  },

  onExternalExampleRequested: Function,
};*/



export default class Header extends React.Component{
     //props: Props;

   constructor(props){
     super(props);
     console.log('constructed');
     this.state = {
       logined:false,
       userPressed:false,
       placeholder:'查找想要的酒2',
       filters:[]
   }
    //this.props = Props;
   }

   componentDidMount(){
     console.log('mounted');
   }

   _userPress(){
     console.log('user.selected')
    this.setState({userPressed:true});
    }

    _searchTextChange(e){
        console.log('changed:' + e.nativeEvent.text);
        this.refs["TXI2"].setNativeProps({text:e.nativeEvent.text});
    }

    _searchFocused() {
        console.log('focused');

    }

    _onFilterPress() {
        console.log('filter pressed');

        console.log(this.props.navigator);
        this.props.navigator.push({
          title: 'asdfasdf',
          component: <EmptyPage> sdfaasfd </EmptyPage>,
        });
    }

    _searchBlur() {
        console.log('search blur');
        this.refs["TXI"].blur();
    }

    render(){
        return (<View style={styles.wrap}>
            <View style={styles.imageswiper}>
                <ImageSwiper height={300} showsButtons={false} autoplay={true} loop={true} autoplayTimeout={2.5} />
            </View>
        </View>);
    }

   render2(){
     return (
        <View style={styles.wrap}>
            <View style={{flexDirection:"row"}}>
                <TouchableOpacity  onPress={this._userPress.bind(this)}>
                    <Icon style={styles.user} name="fontawesome|user"  size={24} color="white"/>
                </TouchableOpacity>
                <TextInput
                  ref={'TXI'}
                  autoCapitalize="none"
                  defaultValue={this.state.placeholder}
                  clearButtonMode="while-editing"
                  onChange={this._searchTextChange.bind(this)}
                  onFocus={this._searchFocused.bind(this)}
                  onBlur={this._searchBlur.bind(this)}
                  onEndEditing={this._searchBlur.bind(this)}s
                  onSubmitEditing={this.onSubmitEditing}
                  style={styles.textInput}
                />
                <TouchableOpacity  onPress={this._onFilterPress.bind(this)}>
                    <Icon style={styles.user} name="fontawesome|filter"  size={24} color="white" />
                </TouchableOpacity>
            </View>
            <View style={styles.imageswiper}>
                <ImageSwiper height={300} showsButtons={false} autoplay={true} loop={true} autoplayTimeout={2.5} />
            </View>
        </View>

     );
   }
 }

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
    margin:2,
    marginRight: 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'transparent',
    tintColor:'#fff',

    borderRadius: 3,
  },

  textInput: {
    backgroundColor: BGWASH,
    borderColor: 'transparent',
    borderRadius: 3,
    borderWidth: 1,
    height: 24,
    paddingLeft: 10,
    margin:3,
    paddingTop: 3,
    paddingBottom: 3,
    flex: 1,
    fontSize: 14,
  },
});
