import React from 'react';
import './App.css';


class ButtonChange extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
        this.setState({newShelf: event.target.value});
    }
    render() {
        console.log('Props', this.props)
        return(
            <div>                
            <select defaultValue={this.props.shelf} onChange = {this.handleChange}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
            {console.log(this.state)}
        </div>
        
              
        )
    }
}

export default ButtonChange


