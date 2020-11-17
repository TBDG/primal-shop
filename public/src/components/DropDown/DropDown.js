import React from 'react';
    
    //when using this component you should set up several required and optional props.

    /*required:
    -props.name- is the name of the menu.
    -props.items- is an array of objects.
        props.items[i].label and props.items[i].value must be properties of each object in the array.
    -props.callback- allows parent to access selected values, parent can also clear.
        to use, add this method to parent:
            
        set as callback={this.dropDownCallback}
    */

    /*optional:
    -props.multiple- allows multiple selections to be highlighted and output.
        Set as multiple='true' if used. also adds a clear button.
        
    */

class DropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selection: [],
        }
        this.itemsMap = this.itemsMap.bind(this);
        this.clear = this.clear.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.updateSelection = this.updateSelection.bind(this);
        
    };

    updateSelection(clicked) {
        if (this.state.selection.includes(clicked)) {
            //remove selection by clicking on it again.
            this.setState(({
                selection: this.state.selection.filter(i => i !== clicked)
            })); 
            return;
        }

        if (this.props.multiple === 'true') {
            //if multiple selections can be made
            this.setState((state) => ({
                selection: [...state.selection, clicked]
            }));
            return;
        }

        this.setState(({
            selection: [clicked],
        }));
        return;
    }

    clear() {
        const clearClassNameToggle = () => this.state.selection.length > 0 ? 'dropdown-item' : 'dropdown-item disabled';

        if (this.props.multiple === 'true') {
            return (
                <div>
                    <button className={clearClassNameToggle()} type='button' value='clear' onClick={() => this.handleClear()} >Clear</button>
                    <div className='dropdown-divider' ></div>
                </div>
            )
        }    
    }

    handleClear() {
        this.setState(({
            selection: [],
        }));
        return;
    }

    itemsMap(items) {
        const itemsClassNameToggle = (element) => this.state.selection.includes(element) ? 'dropdown-item active' : 'dropdown-item';

        return items.map((e,i) => <button key={i} className={itemsClassNameToggle(i)} type='button' value={e.value} onClick={() => this.updateSelection(i)} >{e.label}</button>)
    }

    sendDropDownData = () => {
        this.props.callback(this.state.selection)
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
                    <form>
                        {this.clear()}
                        {this.itemsMap(this.props.items)}
                    </form>
                </div>
            </div>
        )
    }

}

export default DropDown;
