import React from "react";
import './FAQ.css'
import "../../index.css"

function FAQ(){
    return(
        <div>
            <div className="columns is-vcentered is-mobile">
                <div className="column has-text-left">
                    <p className="is-size-5">When is the offical launch?</p>
                </div>
                <div className="column has-text-right">
                    <span className="icon mr-3">
                        <li class="fa fa-angle-down fa-2x"></li>
                    </span>
                </div>
            </div>
            <hr/>
        </div>
    )
}

export default FAQ;