
import {useEffect, useContext} from "react";
import { StyleSheet, View } from "react-native";
import { ControlContext } from '../context/controlContexts';
import Listas from '../componets/listas';
import { getData} from '../hooks/calldata';

const Popular = ({navigation}) =>{

  const { controlState, dispatch } = useContext(ControlContext)
 
  useEffect(()=>{
  
    getData(dispatch,"/r/pics/controversial.json").then(()=>{})
 },[controlState.reload])
 
  return (
	  <View style={style.body}>
		
    			<Listas />
		
	  </View>
	)
}

const style = StyleSheet.create({
  body:{
    flex:1,

    marginTop: 35
  }
})
export default Popular;
