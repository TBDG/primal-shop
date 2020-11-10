import React from 'react';

const DropDown = (props) => {
    /*use arrays props.links and props.items as attributes when using this component, these are used for each item. props.items[0] and props.links[0] are a pair, and so on. use props.name for the name of the menu.*/

    return (
        <div className="dropdown">
            <button 
                className="btn btn-secondary btn-sm dropdown-toggle"
                type="button" 
                id="dropdownMenuButton" 
                data-toggle="dropdown" 
                aria-haspopup="true" 
                aria-expanded="false"
            >
                {props.name}
            </button>
            <div 
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
            >
                <a className="dropdown-item" href={props.links[0]}>{props.items[0]}</a>
                <a className="dropdown-item" href={props.links[1]}>{props.items[1]}</a>
                <a className="dropdown-item" href={props.links[2]}>{props.items[2]}</a>
            </div>
        </div>
    )
}

export default DropDown;
