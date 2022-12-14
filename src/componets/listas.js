import React, { useContext } from 'react';
import { FlatList, View, Text, StyleSheet, TouchableOpacity, Image, RefreshControl } from 'react-native'
import { ControlContext } from '../context/controlContexts';
import Icon from '@expo/vector-icons/MaterialIcons';
import {types} from '../types/types';



 const calcularhora = (time) => {
       
       
	let myDate = new Date( time *1000);
  	 return myDate.toLocaleString()
       
        
        
    }





const Item = ({ title }) => (
  <View key={Math.random().toString()} style={styles.code}>
	
    <Image style={styles.url} source={{uri: title.url} } />

    <View style={styles.datos}>	      
  	<Text>{calcularhora(title.created)} </Text>
  	<Text style={styles.title}> {title.title}</Text>
  	<View style={styles.subdata}>
  		<Text>

  			{title['author_fullname']}
  		</Text>
		<Text style={styles.comment}>
  			<Icon name='score' size={23} />
  			{title.score }
 	        </Text>

		<Text style={styles.comment}>
  			<Icon name='forum' size={23} />
  			{title.num_comments}
 	        </Text>
  			
  	</View>
    </View>
      
   
  </View>
);
const Listas = ({ navigation,date, filtrar }) => {

  const { controlState, dispatch } = useContext(ControlContext)
  
  const renderItem = ({ item }) => (
    <TouchableOpacity
    	onPress={()=> {controlState.navegador.navigate("webview", {urls:item.data["subreddit_name_prefixed"]})}} >
   	 <Item title={item.data} />
    </TouchableOpacity>
  );

  const onRefresh = () =>{
    dispatch({
	type: types.recargar,
        payload: !controlState.refresh
    })
  } 
  return (
    < >
      <View style={styles.container}>
    	<FlatList
    		
          data={controlState.post}
          renderItem={renderItem}
          keyExtractor={item => item.id}

  			refreshControl={
          			<RefreshControl
            				refreshing={controlState.refresh}
            				onRefresh={onRefresh}
          		/>}
        />
	
      </View>


    </>
  )
}
const styles = StyleSheet.create({
  url:{
    width:150, 
     height: 193,
    marginTop: 5
  },
  container: {
    flex:1 ,
    color: 'white'
  },
  code: {
    flexDirection: "row",
    height: 200,
    marginVertical: 1,
    borderBottomWidth: 0.4,
    borderBottomColor: '#000',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  datos:{
    	justifyContent: "center",
    	alignItems:"flex-end",
    	padding: 10,	
	flexWrap: 'wrap'
  },
  subdata:{
    flexDirection: "row",
    justifyContent: "space-between"
  },
  title:{
    width: 250,
    flexWrap: 'wrap',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 10
  },
  comment:{
    fontSize: 20,
    height: 25,
    justifyContent: "center",
    alignItems: "center"
  }


})
export default Listas;
