import React from 'react';
import {connect} from 'react-redux'
import {myActionCreator,getListByThunk} from '../donorReducer'

const ShowDonor = (props) => {

    return (
        <div >
            {props.list}  
            <button onClick={props.get}>Get Donors</button>   
        </div>
    );
}

const mapStateToProps = (state) =>{
    return{
        list:state.payload
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        get:()=>{
            dispatch(getListByThunk());
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ShowDonor);