import React from 'react';
import ShowGreeting from '../ShowGreeting/ShowGreeting.react'
import createdStore from '../Store'
import {birth,valentine} from '../Store'
import {connect} from 'react-redux'

class Greeter extends React.Component {
    constructor(props) {
        super(props);
        }
    
    // birthDay=()=>{                       no need to write these methods if we have dispatch to props
    //     createdStore.dispatch(birth);
    // }
    // valentineDay=()=>{
    //     createdStore.dispatch(valentine);
    //     // this.setState({message:"Happy Valentine's Day"});
    // }
    render() {
        return (
            <div >
                <p>{this.props.message}</p>
                <ShowGreeting action={this.props.bday} label="Birthday"></ShowGreeting>
                <ShowGreeting action={this.props.vday} label="ValentineDay"></ShowGreeting>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        message : state.message
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        bday:()=>{
            dispatch(birth)
        },
        vday:()=>{
            dispatch(valentine)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Greeter)