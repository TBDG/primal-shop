import React from 'react';
    
    //when using this component you should set up several required and optional props.

    /*required: 
    -props.items- is an array of objects.
        props.items[i].label and props.items[i].value must be properties of each object in the array.
    -props.name- is the name of the menu.
    
    */

    /*optional:
    -props.multiple- allows multiple selections to be highlighted and output.
        Set as multiple='true' if used.
        
    */

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
        if (this.state.selection.includes(clicked)) {
            //remove selection by clicking on it again.
            this.setState(({
                selection: this.state.selection.filter((_,i) => i !== clicked)
            }))    
        }

        if (this.props.multiple === 'true') {
            //if multiple selections can be made
            this.setState((state) => ({
                selection: [...state.selection, clicked]
            }))
        }

        this.setState(({
            selection: [clicked],
        }))
    }

    handleSelected(element) {
        return this.state.selection.includes(element) ? 'dropdown-item active' : 'dropdown-item';

    }

    //label and value are separate. instead of props.items and props.links.
    itemsMap(items) {
        return items.map((e,i) => <button key={i} className={this.handleSelected(i)} type='button' value={e.value} onClick={() => this.updateSelection(i)} >{e.label}</button>)
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
                    {this.itemsMap(this.props.items)}
                </div>
            </div>
        )
    }

}

export default DropDown;
