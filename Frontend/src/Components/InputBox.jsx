import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types'
import PinInput from './PinInput';

const InputBox = ({ length, maxInput, setQuery }) => {
    const inputBoxes = new Array(length).fill(1);
    const [value] = useState([])
    const inputRef = useRef([]);

    const handleForward = (e, index) => {
        if (index < length - 1 && e.target.value.length === maxInput) {
            inputRef.current[index + 1].focus();
        }
        value[index] = e.target.value;
        setQuery(value.join(''));
    }

    const handleBackward = (e, index) => {
        value[index] = e.target.value;
        if (index > 0 && e.target.value.length < 1) {
            inputRef.current[index - 1].focus();
        }
        setQuery(value.join(''));
        value.pop();
    }

    const handlePaste = (e) => {
        e.preventDefault();
        const data = e.clipboardData.getData('text').trim().split('').filter((ele, index) => (ele !== ' '));
        let checkLength = length;
        let arr = []
        while (checkLength) {
            arr.push(data.splice(0, maxInput))
            checkLength--;
        }
        arr.forEach((ele, index) => {
            value[index] = ele.join('');
            inputRef.current[index].value = ele.join('');
            if (index < length - 1 && inputRef.current[index].value.length === maxInput) {
                inputRef.current[index].focus();
            }
        });

        if (value.includes(' ') === false) {
            value.splice(value.indexOf(' '), 2);
        }
        setQuery(value.join(''));
    }
    // console.log(value.length)
    const styleData = (length === value.length) && (value[value.length - 1].length === maxInput) ? { border: '2px solid green', width: '50%', margin: 'auto' } : {}
    return (
        <form ref={inputRef} onPaste={handlePaste} style={styleData}>
            <h3>Please enter the one time password
                to verify your account</h3>
            <p>Please Enter Your OTP
            </p>
            {inputBoxes.map((_, index) => (
                <PinInput
                    key={index}
                    length={length}
                    valueCheck={value}
                    maxInput={maxInput}
                    handleBackward={(e) => handleBackward(e, index)}
                    handleForward={(e) => handleForward(e, index)}
                />
            ))}
            <p style={{marginTop:'50px'}}>Cancel</p>
        </form>
    )
}

InputBox.propTypes = {
    length: PropTypes.number.isRequired,
    maxInput: PropTypes.number.isRequired,
    setQuery: PropTypes.func
}

export default InputBox