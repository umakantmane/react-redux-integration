import { ADD_ARTICLE, SET_MENU, ADD_MENU } from '../ActionTypes';

export function addArticle(payload){

    return {type:ADD_ARTICLE, payload};
};

export function setMenus(payload){
    return {type:SET_MENU, payload};
}

export function addMenu(payload){
    return {type:ADD_MENU, payload};
}