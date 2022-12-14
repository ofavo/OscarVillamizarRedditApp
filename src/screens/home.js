import {useEffect, useContext} from "react";
import { StyleSheet, View } from "react-native";
import { ControlContext } from '../context/controlContexts';
import {types} from '../types/types';
import Listas from '../componets/listas';
import { getData} from '../hooks/calldata';

const Home = ({navigation}) =>{

  const { controlState, dispatch } = useContext(ControlContext)
 
  useEffect(()=>{
   dispatch({
	  type: types.actualizarNav,
	  payload: navigation
	});
    dispatch({
      type: types.rutas,
      payload: "News"
    })
    getData(dispatch,"/r/pics/new.json").then(()=>{})
 },[controlState.reload])
 
  const onRefresh = () => {
     getData(dispatch,"new.json");
   
  };
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
export default Home;

