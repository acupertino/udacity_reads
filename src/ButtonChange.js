import React from 'react';
import './App.css';

class ButtonChange extends React.Component {

    render() {
        var shelf = this.props.opcao;
        return (
            <div>
                <select defaultValue = {this.props.opcao}>
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


