import React from 'react';


const Child=(props)=>{
    return(
        <div>
            <button onClick={props.onHandleUpdate}>Update Counter</button>
        </div>
    )
}

export default Child;