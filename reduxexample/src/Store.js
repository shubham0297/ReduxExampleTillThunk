import reducer from './Reducer';
import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'

export const birth ={
    type:'BIRTHDAY',
    message: 'Happy Birthday'
}

export const valentine ={
    type:'VALENTINEDAY',
    message: 'Happy Valentine\'s Day'
}

const createdStore = createStore(reducer);
export default createdStore;