import React, {useState} from 'react'
import {useSelector} from "react-redux";
import Loader from "react-loader-spinner";


function Spinner(props) {

    console.log ('props', props)

    return (
        <div>
            
            {props.loaded ?  (
                    <div>
                        
                    </div>
                ):  (
                    <div className="modal">
                        <Loader type="BallTriangle" color="#00BFFF" height={80} width={80} />
                    </div>
                )
        
            }

        </div>
    )
}

export default Spinner
