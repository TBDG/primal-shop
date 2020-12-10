import React from 'react';
    
    //when using this component you should set up several required and optional props, in addition to several required methods on the parent component.

    /*required props/attributes:
        -props.name- is the name of the menu.
        -props.items- is an array of objects.
            props.items[i].label and props.items[i].value must be properties of each object in the array.
            eg: items= {[
                        {label: 'option1', value: 'option1'},
                        {label: 'option2', value: 'option2'},
                        {label: 'option3', value: 'option3'},
                    ]}
        -props.callback- allows parent to access selected values, parent can also clear.  
            set as callback={this.dropDownCallback}/callback={dropDownCallback}
        -ref={this.clearDropDown}/ref={clearDropDown}- allows to clear from the parent component.
    */

    /*optional prop:
        -props.multiple- allows multiple selections to be highlighted and output.
            Set as multiple='true' if used. also adds a clear button.       
    */

    /*Parent component set-up:
        (this is the instructions for setting up with a parent functional component, class style parent component instructions can come later.)
        
        import the following:
            import React, { useRef, useState } from 'react';
            import DropDown from "./components/DropDown/DropDown";

        add the following methods:
            const [dropDown, setDropDown] = useState([]);
            const dropDownCallback = (dropDownData)  => {
                setDropDown([...dropDownData])
            }
            const dropDownRef = useRef(null);
            const triggerDropDownClear = () => dropDownRef.current.handleClear()

        example DropDown component in the parent return statement:
            <DropDown 
                items= {[
                    {label: 'option1', value: 'option1'},
                    {label: 'option2', value: 'option2'},
                    {label: 'option3', value: 'option3'},
                ]}
                name='test menu'
                callback={dropDownCallback}
                multiple='true'
                ref={dropDownRef}
            />
            
        to clear from the parent, call triggerDropDownClear()
            eg: 
                <button className='btn btn-primary' onClick={() => triggerDropDownClear()} >clear</button>
        
        access value data from DropDown by referencing the dropDown const.
            eg:
                <h1>Selection: {dropDown}</h1>
        
    */

class DropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selection: [],
        }
        this.updateSelection = this.updateSelection.bind(this);
        this.clear = this.clear.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.itemsMap = this.itemsMap.bind(this);
        this.sendDropDownData = this.sendDropDownData.bind(this);
    };

    updateSelection(clicked) {
        if (this.state.selection.includes(clicked)) {
            //remove selection by clicking on it again.
            this.setState({
                selection: this.state.selection.filter(i => i !== clicked)
            }, this.sendDropDownData); 
            return;
        }

        if (this.props.multiple === 'true') {
            //if multiple selections can be made, this adds new selections to state.selection array, instead of replacing them.
            this.setState((state) => ({
                selection: [...state.selection, clicked]
            }),this.sendDropDownData);
            return;
        }

        //sets clicked menu item to state.selection. in this case, said item will replace what was already there.
        this.setState({
            selection: [clicked],
        },this.sendDropDownData);       
        return;
    }

    clear() {
        //if state.selection.length > 0 then clear button is enabled.
        const clearClassNameToggle = () => this.state.selection.length > 0 ? 'dropdown-item' : 'dropdown-item disabled';

        //if props.multiple is set to true in parent component, adds a clear button to menu.
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
        //clears state.selection and sends that change to parent component.
        this.setState({
            selection: [],
        },this.sendDropDownData);
        return;
    }

    itemsMap(items) {
        //gives .active bootstrap className to selected items.
        const itemsClassNameToggle = (element) => this.state.selection.includes(element) ? 'dropdown-item active' : 'dropdown-item';

        //maps array from props.items to the dropdown menu options
        return items.map((e,i) => <button key={i} className={itemsClassNameToggle(e.value)} type='button' value={e.value} onClick={() => this.updateSelection(e.value)} >{e.label}</button>)
    }

    sendDropDownData() {
        //sends state.selection, which is an array of values of selected items, to parent component.
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
