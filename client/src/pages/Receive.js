import React, { useEffect } from 'react';

function Receive({ history }) {

    useEffect(()=> {
        if (!sessionStorage.getItem('jwt')) {
            history.push("/")
        }
    })

    return(
        <div>
            <h1>REceive items PAGE</h1>
            
        </div>
    )
}

export default Receive;