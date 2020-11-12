import React from 'react';
    
    //when using this component you should set up several required and optional props.

    /*use arrays -props.links- and -props.items- as attributes when using this component, these are used for each item. props.items[0] and props.links[0] are a pair, and so on. use -props.name- for the name of the menu.*/

    /*you can set the optional attribute -props.multiple- to true. if you do so, this allows multiple selections to be highlighted and output by the pulldown. */

class DropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selection: [],
        }
        this.itemsMap = this.itemsMap.bind(this);
        this.updateSelection = this.updateSelection.bind(this);
        this.handleSelected = this.handleSelected.bind(this);
    };

    updateSelection(clicked) {
        // if (this.state.selection.includes(clicked)) {
        //     //remove selection by clicking on it again.
        //     this.setState(({
        //         selection: this.state.selection.filter((_,i) => i !== clicked)
        //     }))    
        // }

        // if (this.props.multiple === true) {
        //     //if multiple selections can be made
        //     this.setState((state) => ({
        //         selection: [...state.selection, clicked]
        //     }))
        // }

        // this.setState(({
        //     selection: [clicked],
        // }))
        console.log('pressed' + clicked)
    }

    handleSelected(element) {
        return this.state.selection.includes(element) ? 'dropdown-item active' : 'dropdown-item';

    }

    itemsMap(arr1, arr2) {
        const handleClick = () => this.updateSelection

        return arr1.map((e,i) => <button key={i} className={this.handleSelected(i)} type='button' href={e} onClick={handleClick} >{arr2[i]}</button>)
    }

    render() {
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
                    {this.props.name}
                </button>
                <div 
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                >
                    {this.itemsMap(this.props.links,this.props.items)}
                </div>
            </div>
        )
    }

}

export default DropDown;
