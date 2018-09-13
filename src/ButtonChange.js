import React from 'react';
import './App.css';
import * as BooksAPI from './BooksAPI'

class ButtonChange extends React.Component {    
    constructor(props) {
        super(props);
        this.change = this.change.bind(this);
    }

    change(event)  {
        var newShelf = event.target.value;
        BooksAPI.update(this.props.infoLivro, newShelf)
      }
    


    render() {
        console.log(this.props)
        return(
            <div>                
            <select defaultValue={this.props.shelf} onChange = {this.change}>
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


