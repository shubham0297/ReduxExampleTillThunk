import React from 'react';



const ShowGreeting = (props) => {

    return (
        <div>
            <button onClick={props.action}>{props.label}</button>
            {/* Only one button created as in parent we have used <ShowComponent> two times */}
        </div>
    );

}

export default ShowGreeting;