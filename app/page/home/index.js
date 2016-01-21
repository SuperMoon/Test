/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var {
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
import SearchTitle from "../search/SearchInput";
import SearchPage from "../search/index";
import styles from "../search/styles";

var Region = require('rn-china-region-picker');
//var EventEmitter = require('EventEmitter');
var EventEmitter = require('RCTDeviceEventEmitter');
var Subscribable = require('Subscribable');

class TitleComp extends Component{
    _toSearchPage(){
        //this.props.reset();
        this.props.toRoute({
            name: 'Do Search',
            titleComponent:(TitleComp2),
            component: SearchPage,
        })
    }

    render(){
        return (<SearchTitle {...this.props} onFocus={() => this._toSearchPage()} />)
    }
}

class TitleComp2 extends Component{
    _doSearch(query){
        console.log('do searching');
        console.log(this.props);

        this.props.toReplace({
            name: query.replace(/[<>!*]/g,''),
            //titleComponent:(TitleComp2),
            //title: query.replace(/[<>!*]/g,''),
            component: SearchPage,
            data:query,
        });
        //EventEmitter.emit('dosearch',query);

    }

    render(){
        return (<SearchTitle  {...this.props} onSubmit={(x) => this._doSearch(x)} />)
    }
}


/*var SearchPage = React.createClass({

  nextPage: function() {
    console.log(this.props);

    this.props.toRoute({
      name: "A new screen",
      titleComponent:TitleComp ,
      component: SearchPage
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
});*/


//var ImageSwiper = require("./ImageSwiper").default;

//import ImageSwiper from "./ImageSwiper";
import ImageSwiper from "./SlideBanner";

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

class HelloPage extends Component{
    render(){
        return (<Text> hello,world</Text>)
    }
}

var RCTDeviceEventEmitter = require('RCTDeviceEventEmitter');

//class HomePage extends React.Component{
var HomePage = React.createClass({
  mixins: [Subscribable.Mixin],
  /*constructor(props){
      super(props);
      this.mixins = [Subscribable.Mixin],
      this.state = {
          hotwords : [],
          city:true,
          cityInfo:{provinceName:'',cityName:'',areaName:''},
          variable:''
      };
  }*/
  getInitialState(){
    return {
        hotwords : [],
        city:true,
        cityInfo:{provinceName:'',cityName:'',areaName:''},
        variable:'',
        text:'hehe'
    };
  },
  nextPage() {
    this.props.toRoute({
      name: "A new screen",
      component: HelloPage,
    });
},

  getCityInfo(info){
      console.log(info);
      this.setState({city:false,cityInfo:info});

  },

  componentWillMount(){
      console.log('homepage will mount');
      console.log(this.props);
  },

  componentDidMount:function(){
      /*var me = this;
      RCTDeviceEventEmitter.addListener('change',function(text){
         me.setState({
          text : text
         })
     });*/
      console.log('homepage did mount');
      console.log(this.props);
     // this.addListenerOn(this.props.events, 'myRightBtnEvent', this.miscFunction);
  },

  miscFunction(args){
       this.setState({
           variable: args.someArg
       });
   },

  render() {
    return (
        <View>
            <TouchableHighlight onPress={() => this.nextPage()} >
             <Text>Hello,Putao (index) {this.state.hotwords}</Text>
            </TouchableHighlight>
            <Text>{this.state.text}</Text>
            <Text>{this.state.cityInfo.provinceName} - {this.state.cityInfo.cityName} - {this.state.cityInfo.areaName}</Text>
            {this.state.city &&
                <Region
                  visible={true} //true展示，false不展示
                  selectedProvince={'110000'} //初始化省，不传默认也是北京
                  selectedCity={'110100'} //初始化市，不传默认也是北京
                  selectedArea={'110101'} //初始化区，不传默认为东城区
                  onSubmit={(params) => this.getCityInfo(params)}
                  onCancel={() => console.log('cancel')}
                />
            }
        </View>
    );
  }
});

var rightButton = React.createClass({
  render(){
    return (<TouchableOpacity onPress={this._onFilterPress}>
        <Icon style={styles.filter} name="fontawesome|filter"  size={24} color="white" />
    </TouchableOpacity>);
  },

  _onFilterPress(){
      this.props.toRoute({
        name: "Filter Page",
        //titleComponent:(TitleComp),
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
var name = 'moonzhang';
var firstRoute = {
  name: 'Welcome!',
  titleComponent:(TitleComp),
  rightCorner:rightButton,
  leftCorner:leftButton,
  component: HomePage,
  data:'index'
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

/*

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

  filter:{
      width:24,
      height:24,
      margin: 7,
      padding: 5,
      alignItems: 'center',
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
*/
