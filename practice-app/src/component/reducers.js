import {
    ADD_ITEM ,  
    REMOVE_ITEM ,
} from './action';



export const items = (state = [] , action) => {
    const {type , payload} = action;

    switch (type){
        case ADD_ITEM : {

            const {text} = payload;
            const newItem = {text};
            return state.concat(newItem);

        }    
    
        case REMOVE_ITEM : {

            const {text} = payload;
            return state.filter(item => item.text !== text);

        }

        default : 
        return state;
    }
}
export default items;