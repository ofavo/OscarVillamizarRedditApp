import * as React from 'react';
import { WebView } from 'react-native-webview';
import { url } from '../../environment'
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome';

const Web = (props)=> {

  return (
    <View style={styles.container}>
    	<View style={styles.toolbar}>
	 	<TouchableOpacity
    			style={styles.boton}
    			onPress={()=> props.navigation.goBack()}>
    	 		<Icon name="chevron-left" size={30} color="black"  />
    		</TouchableOpacity>
        </View>
   	 <WebView
      		style={styles.web}
      		source={{ uri: url+props.route.params.urls }}
    	 />
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1
  },
  web:{
    flex: 1
  },
  toolbar:{
    flex: 0.1,
    justifyContent:"flex-end"
  },
  boton:{
    
  }
})
export default Web;
