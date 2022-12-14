import {env} from '../../environment'
import { types } from '../types/types';
const getData = async(dispath, ruta) =>{
     	
    dispath({
      type: types.refrescar,
      payload: true
    })	
    const response = await fetch(env+ruta);
    const {data} = await response.json();
    dispath({
      type: types.refrescar,
      payload: false
    })
    return dispath({
      type: types.loadPost,
      payload: data.children
    }) 
}


export {
  getData
}
