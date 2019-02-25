import { SET_MENU,ADD_MENU } from '../ActionTypes';

const initialstates = {
    menus:[]
}

const LayoutReducer = function(state = initialstates, action){

     if(action.type == SET_MENU) {
        return Object.assign({}, state,{
            menus:action.payload
        });
    }
    else if(action.type == ADD_MENU){
        return Object.assign({}, state, {
            menus:state.menus.concat(action.payload)
        });
    }

    return state;
}

export default LayoutReducer;