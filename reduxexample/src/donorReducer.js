import axios from 'axios';                                                      // THIS REDUCER IS FOR THUNK(MIDDLEWARE) EXAMPLE
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
export const myActionCreator = (list) =>{
    return{
        type:'GET_ALL_DONORS',
        payload:list
    }
}

export function getListByThunk(){
    return function(dispatch){
            axios.get("http://localhost:3000/donors").then(function(){
                dispatch(resp=>myActionCreator(resp.data));
            })
    }
}
const donorReducer = (state=[{id:1,donorName: "Pranjal",donationCount: 54,bloodGroup: "opos",lastDonated: "2019-04-12"}], action)=>{
    switch (action.type) {
        case 'GET_ALL_DONORS':
            return Object.assign({},action);
        default:
            return state
    }
}

let restStore = createStore(donorReducer,applyMiddleware(thunk));
export default restStore;