import react, {useContext} from 'react';

import { ControlContext } from '../context/controlContexts';
import Icon from '@expo/vector-icons/FontAwesome';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, RefreshControl } from 'react-native'
import {types} from '../types/types';

const Menu = ({navigation}) =>{
   
    const { controlState, dispatch } = useContext(ControlContext);
  
  return(
   
	      <View style={styles.inferior}>
                    <TouchableOpacity style={styles.openBottonA} onPress={() =>{ 
		     if(controlState.ruta !== "News"){	
		      dispatch({
		      		type: types.rutas,
				payload: "News"
		       });
		      controlState.navegador.push("News")}
		    }}>
	    	    {controlState.ruta === "News"		
                      	?<>
		        <Icon name='newspaper-o' size={20} color="#0010a1"  />
		      	
                         <Text style={styles.labelblack}>
                             News
                         </Text>
		      </>
		    	:<> 
		      	<Icon name='newspaper-o' size={20} color="gray" />
		      
                         <Text style={styles.labels}>
                             News
                         </Text>
		      </>
		    }	
                    </TouchableOpacity>
		  
                    <TouchableOpacity style={styles.openBottonA} onPress={() => {
		     
		     if(controlState.ruta !== "Top"){	
		      dispatch({
		      		type: types.rutas,
				payload: "Top"
		       });
		      controlState.navegador.push("Top")}
		    }}>
	    	   	
	    	    {controlState.ruta === "Top"		
                      	?<>
                      <Icon name='signal' size={20} color="#0010a1" />
                         <Text style={styles.labelblack} >
                             Top
                         </Text>
		      </>
		      :<>

                      <Icon name='signal' size={20} color="gray" />
                         <Text style={styles.labels}>
                             Top
                         </Text>
		      </>
		    }
                    </TouchableOpacity>
	  	
                     
                    <TouchableOpacity style={styles.openBottonA} onPress={() => {

		     if(controlState.ruta !== "Popular"){	
		      dispatch({
		      		type: types.rutas,
				payload: "Popular"
		       });
		      controlState.navegador.push("Popular")}}}>
		    
	    	    {controlState.ruta === "Popular"		
                      	?<>
                      <Icon name='users' size={20}  color="#0010a1"/>
                         <Text style={styles.labelblack}>
                              Controversial
                         </Text>
		       </>
		      :<>
                      <Icon name='users' size={20} color="gray" />
                         <Text style={styles.labels}>
                              Controversial
                         </Text>
		       </>
		    }
                    </TouchableOpacity>
	  
                    <TouchableOpacity style={styles.openBottonB} onPress={() =>{ 

		     if(controlState.ruta !== "Hot"){	
		      dispatch({
		      		type: types.rutas,
				payload: "Hot"
		       });
		      controlState.navegador.replace("Hot")}}}>
                      
	    	    {controlState.ruta === "Hot"		
                      	?<>
                      <Icon name='star' size={20}  color="#0010a1"/>
                         <Text style={styles.labelblack}>
                             Hot
                         </Text>
		       </>
		      :<>
                      <Icon name='star' size={20} color="gray" />
                         <Text style={styles.labels}>
                              Hot
                         </Text>
		       </>
		    }


                      </TouchableOpacity>
              </View>	
	  
	)
}

const styles = StyleSheet.create({
    labelblack:{
      color:"#0010a1",
      fontSize:11
    },	
    check: {
        width: "100%",
        height: 20,
        flexDirection: "row",
        alignItems: "center",
        position: "absolute",
        top: 80,
        justifyContent: "center",
        marginTop: 15
    },
    labels: {
        color: 'gray',
        marginHorizontal: 9,
        fontSize: 10
    },
    openBottonA: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 10,
        color: '#0010a1',
       	width: "20%"

    },
    openBottonB: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 10,
        color: '#0010a1',
        width:"20%"
    },

    botonSend: {
        marginTop: 5,
        height: 40,
        width: 40,
        backgroundColor: '#0010a1',
        color: "white",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10
    },
    input: {
        width: 200,
        height: 30,
        margin: 12,
        borderWidth: 1,
        borderColor: "white",
        color: '#0010a1',
        backgroundColor: "white",
        borderRadius: 20,
        padding: 4,
        textAlign: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    },

    barra: {
        width: "100%",
        height: 20,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    head: {
        height: 50,
        flexDirection: "row",
        padding: 10,
        marginBottom: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 40,
        },
        shadowOpacity: 1,
        shadowRadius: 5.46,

        elevation: 9,

    },
    listas: {
        backgroundColor: "white",
        flex: 1,
        width: "100%",
        alignItems: "center"
    },

    container: {
        flex: 1,

        color: 'white'

    },
    containerHeader: {
        flexDirection: "row",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 5.46,

        elevation: 9,
    },
    escudo: {
        width: 30,
        height: 30
    },
    background: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        height: "110%",
    },
    scan: {
        flex: 0.5
    },

    closeBottonPage: {
        width: 80,
        borderRadius: 12,
        backgroundColor: '#0010a1',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        position: 'absolute',
        top: 10,
        right: 10,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
    },
    closeBottonRegistro: {
        width: 80,
        borderRadius: 12,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        position: 'absolute',
        alignContent: 'center',
        top: 30,
        right: 100,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
    },

    closeBottonPage: {
        width: 80,
        borderRadius: 12,
        backgroundColor: '#0010a1',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        position: 'absolute',
        top: 10,
        right: 10,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
    },
    closeBottonRegistro: {
        width: 80,
        borderRadius: 12,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        position: 'absolute',
        alignContent: 'center',
        top: 30,
        right: 100,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
    },

    closeBottonModal: {
        width: 80,
        borderRadius: 12,
        backgroundColor: '#001594',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        elevation: 20
    },
    closeBotton: {
        width: '100%',
        backgroundColor: '#001594',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        position: 'absolute',
        bottom: 0
    },
  
    scaneos:{
	
        position: "absolute",
      	height: 50,
        bottom: 20,
      	left:0,
    	width: "100%",
      	justifyContent: "center",
      	alignItems :"center",
        backgroundColor: null
    },	
    openBotton: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        width: 60,
        height: 60,
        backgroundColor: '#0010a1',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50

    },

    inferior: {
        flexDirection: "row",
        position: "absolute",
        alignItems: "center",
        justifyContent: "space-around",
        borderColor: "black",
        borderWidth: 0.8,
        borderColor: 'gray',
        bottom: 0,
        width: "100%",
        height: 45,
        backgroundColor: "white"
    },
    text: {
        color: 'white',
        marginHorizontal:10

    }
})

export default Menu;
