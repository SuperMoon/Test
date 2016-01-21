

var React = require('react-native');
var Swiper = require('react-native-swiper');
var Loading = require('../loading');
var Web = require('../web');
var Styles = require('./style');

var {
    Image,
    TouchableHighlight,
    } = React;

var TouchableElement = React.createClass({
    render(){
        var banner = this.props.data;
        return (
            <TouchableHighlight onPress={()=>this.props.thiz._loadWeb(banner.title,banner.url)}>
                <Image style={[Styles.slide,]} source={{uri: banner.image_path}}></Image>
            </TouchableHighlight>
        );
    }
});

//参数的传递使用props
var Slider = React.createClass({

    _loadWeb:function(title,loadurl){
        this.props.navigator.push({
            title: title,
            component: Web,
            passProps:{
                url: loadurl,
            }
        });
    },

    componentDidUnMount(){
        console.log('slider.unmount');
    },

    render: function(){
        var thiz = this;
        return (
            <Swiper style={Styles.wrapper} showsButtons={true} autoplay={true} height={125} showsPagination={false}>
                {this.props.banners.map(function(banner){
                    return (<TouchableElement key={banner} data={banner} thiz={thiz}/>);
                })}
            </Swiper>
        );
    }
});

module.exports = Slider;
