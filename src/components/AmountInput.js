import React, { Component } from 'react';

class AmountInput extends Component {
    constructor() {
        super();

        const state = {
            text: '',
        };

        this.state = state;
    }

    onKeyDown = ($event) => {
        const key = $event.key;

        const map = [
            '.', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
            'ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown',
            'Backspace', 'Home', 'End', 'Delete'];


        if (map.indexOf(key) === -1 || (key === '.' && $event.currentTarget.value.match(/[.]/))) {
            $event.preventDefault();
        }

        const MAX_DECIMAL_LENGTH = 7;
        const NUMBERS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

        if (NUMBERS.indexOf(key) !== -1) {
            const input = $event.currentTarget.value;
            if (input.indexOf(".") !== -1) {
                const decimal = input.substr(input.indexOf(".") + 1);

                if (decimal.length >= MAX_DECIMAL_LENGTH) {
                    $event.preventDefault();
                }
            }
        }
    };


    render() {
        return (
            <input {...this.props}
                onKeyDown={this.onKeyDown}
                onBlur={this.onKeyUp}
                type="number"
                min="0.1"
                step="0.1"
                placeholder="0.1" />
        )
    }
}

export default AmountInput;