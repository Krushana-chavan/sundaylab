import * as types from "./actionTypes"

const userData = {
   post:[]
   
}

export function PostReducer(state = userData,action){
    const {type,payload} = action
    switch(type){
      
        case types.GET_USER_POST:
        return {
            ...state,post:payload 
        }
       
        default : return state
    }
}