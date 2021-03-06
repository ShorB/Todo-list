import React, {useState} from "react";
import PropTypes from 'prop-types'

function useInputValue(defaultValue = '') {
    let [value, setValue] = useState(defaultValue)

    return {
        bind: {
            value: value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value
    }
}

function AddTodo({onCreate}) {

    const input = useInputValue('')

    function submitHandler(event) {
        event.preventDefault()

        if (input.value().trim()) {
            onCreate(input.value())
            input.clear()
        }
    }

    return (
        <form className="form-container" style={{marginBottom: '1rem'}} onSubmit={submitHandler}>
            
            <input {...input.bind}/>
            <div className="add-button-container">
                <button className="add-button" type="submit">Add todo</button>
            </div>
            
            
            
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo