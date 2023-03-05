export const REMOVE_ITEM = 'REMOVE_ITEM';
export const removeItem = text =>({
    type : REMOVE_ITEM,
    payload : {text},
});

export const ADD_ITEM = 'ADD_ITEM';
export const addItem = item =>({
    type : ADD_ITEM,
    payload : {item},
});

