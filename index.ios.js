/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
} = React;

var MOCKED_MOVIES_DATA = [
	{title: 'Movie Title', year: '2015',
	 posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
];


var PlayWithReactNative = React.createClass({
	render:function(){
		var movie = MOCKED_MOVIES_DATA[0];

		return(
			<View style={styles.container}>
        <Image 
          source={{uri: movie.posters.thumbnail}}
          style={styles.thumbnail}>
        </Image> 
        

        <View style={styles.rightContainer}>
        	<Text style={styles.title}>{movie.title}</Text>
        	<Text style={styles.year}>{movie.year}</Text>
        </View>
        	
      </View>
		)
	}
})



var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1,
    marginRight:10,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  thumbnail: {
    width: 53,
    height: 81,
    marginLeft:10,
  },
  title: {
    fontSize: 30,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
});

AppRegistry.registerComponent('PlayWithReactNative', () => PlayWithReactNative);
