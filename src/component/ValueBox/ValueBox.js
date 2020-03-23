import React from 'react'
import './ValueBox.css'

class ValueBox extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            label:  props.label,
            id:     props.id,
            value:  props.value,
            // action: props.action
        }

        this.onTodoChange = this.onTodoChange.bind(this)

    }

    onTodoChange(newvalue){
        this.setState({
            label:  this.props.label,
            id:     this.props.id,
            value:  newvalue
        });
    }

    render() {
        return (
            <div className={this.state.id} class="ValueBox">
                <label className="inputLabel">
                    {this.state.label}
                </label>

                <input type="text" className="inputValue" value={this.state.value} id={this.state.id} onChange={e => this.onTodoChange(e.target.value)}>
                    
                </input>
            </div>

        )
    }

    defaultValue = ({value}) => {
        return "value="+value 
    }


}

export default ValueBox;