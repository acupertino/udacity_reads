import React from 'react';
import { Link } from 'react-router-dom'

class AddBook extends React.Component {

    render() {
        console.log(this.props)
        return (
            <div className="search-books-bar">
                <div className="search-books-bar">
                    <div><Link to="/" className="close-search"></Link></div>
                    <input type="text" placeholder="Search by title or author"></input>
                </div>
            </div>            
        )
    }
}
export default AddBook


