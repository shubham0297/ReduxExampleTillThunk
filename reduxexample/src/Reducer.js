 const reducer = (state={message:"Hello"}, action)=>{
    switch (action.type) {
        case 'BIRTHDAY':
            // console.log(Object.assign({},action));
            return Object.assign({},action);
        case 'VALENTINEDAY':
            return {...action};                         // Line 4 & 6 are same ...just syntax different. 6 is spreading       
        default:
            return state
    }
}

export default reducer
