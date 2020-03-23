import React from 'react'

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
        this.state.action()
    }

    render() {

        return(
            <div className='ActionButton'>

        <button onClick={this.onClick}>{this.state.label}</button>
            </div>
        )

    }
}

export default ActionButton;