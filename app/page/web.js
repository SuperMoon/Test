/**
 *
 * @authors Your Name (you@example.org)
 * @date    2015-10-19 18:32:08
 * @version $Id$
 */
'use strict';
var React = require('react-native');
//var HTMLView = require('react-native-htmlview');
var {
  	StyleSheet,
  	View,
  	WebView,
} = React;
var wv = null
var Web = React.createClass({
  getInitialState: function() {
    return {
        wv:null
    };
  },

  componentDidMount: function() {
      console.log('web.mount'+this.props.url);
  },

  componentDidUnMount: function() {
      console.log('web.unmount');
      wv = null;
  },

  render(){

      if(this.props.url){
        wv = <WebView url={this.props.url}/>
      }

      return(
        <View style={{flex:1}}>
          {wv}
        </View>
      );
  },

  render2: function() {
  	var webView = null;
    if(this.props.url){
      webView = <WebView url={this.props.url}/>
    }
    return(
      <View style={{flex:1}}>
        {webView}
      </View>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom:68,
  },
});


module.exports = Web;
