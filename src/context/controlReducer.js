import { types } from "../types/types"

// uid: '',
// tipoPunto: '' , // UID del usuario al que yo quiero enviar mensajes
// semilla: '',
// usuarios: [], // Todos los usuarios de la base datos

export const controlReducer = (state, action) => {


    switch (action.type) {

        case types.loadPost:
            return {
                ...state,
                post: action.payload
            }

        case types.filter:
	    return {
	      ...state,
	      filter: action.payload
	    }
        case types.actualizarNav:
            return {
                ...state,
                navegador: action.payload
                
            }
      case types.rutas:
	  return {
	    ...state,
	    ruta: action.payload
	  }
      case types.refrescar:
	return {
	  ...state,
	  refresh: action.payload
	}
      case types.recargar:
	return {
	  ...state,
	  reload: action.payload
	}
        default:
            return state;
    }

}

