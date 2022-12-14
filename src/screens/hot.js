
import {useEffect, useContext} from "react";
import { StyleSheet, View } from "react-native";
import { ControlContext } from '../context/controlContexts';
import Listas from '../componets/listas';
import { getData} from '../hooks/calldata';

const Hot = ({navigation}) => {

  const { controlState, dispatch } = useContext(ControlContext)
 
  useEffect(()=>{
   
    getData(dispatch,"/r/pics/hot.json").then(()=>{})
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
export default Hot;
