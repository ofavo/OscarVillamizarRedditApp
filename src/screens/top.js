
import {useEffect, useContext} from "react";
import {View, StyleSheet  } from "react-native";
import { ControlContext } from '../context/controlContexts';
import Listas from '../componets/listas';
import { getData} from '../hooks/calldata';

const Top = ({navigation}) =>{

  const { controlState, dispatch } = useContext(ControlContext)
 
  useEffect(()=>{
  
    getData(dispatch,"/r/pics/top.json").then(()=>{})
 },[controlState.reload]);

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
export default Top;
