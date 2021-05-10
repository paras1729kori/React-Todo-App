import React from 'react'

const Counter = (props) => {
    const [value, setValue] = React.useState(0)
    
    const byOne = () => {
        if (value >= 20) {
            setValue(0)
        }
        else {
            setValue(value + props.incrementBy)
        }
    }

    return (
        <div>
            <button
                onClick={byOne}
                className="btn btn-block btn-success mt-5"
            >Increment by {props.incrementBy}</button>
            <h2>{value}</h2>
        </div>
    )
}

export default Counter;