import { ADD_ARTICLE,SET_MENU,ADD_MENU } from '../ActionTypes';

const initialstates = {
    articles:[],
    menus:[]
}

const UserReducer = function(state = initialstates, action){

    if(action.type == ADD_ARTICLE) {
        return Object.assign({}, state, {
            articles:state.articles.concat(action.payload)
        });
    }
    else if(action.type == SET_MENU) {
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

export default UserReducer;