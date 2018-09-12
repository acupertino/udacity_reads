import React from 'react';
import './App.css';

class ButtonChange extends React.Component {

    render() {
        return (
            <div>
                <select value = {this.props.opcao} onChange = {}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default ButtonChange


