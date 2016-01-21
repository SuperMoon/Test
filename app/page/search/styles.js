import React,{
    StyleSheet
} from 'react-native';

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
    backgroundColor: 'transparent',
    //borderColor: '#000',
    //borderRadius: 3,
    //borderWidth: 1,
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
  searchbar: {
      flex:1,
      flexDirection:"row",
      backgroundColor: BGWASH,
      marginLeft:5,
      borderColor:"blur",
      borderWidth:1,
      borderRadius:20
  }
});

export default styles;
