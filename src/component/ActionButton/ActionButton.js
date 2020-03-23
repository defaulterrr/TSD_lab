import React from 'react'
import './ActionButton.css'

class ActionButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            label:      props.label,
            action:     props.action
        }
        this.onClick = this.onClick.bind(this)
    }

    onClick = () => {
        this.state.action(this.state.label)
    }

    render() {

        return(
            <div className='ActionButton' class="ActionButton">

        <button onClick={this.onClick} class="button">{this.state.label}</button>
            </div>
        )

    }
}

export default ActionButton;