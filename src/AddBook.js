import React from 'react';
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import './App.css';
import ButtonChange from './ButtonChange'
import sortBy from 'sort-by'
import * as BooksAPI from './BooksAPI'



class AddBook extends React.Component {
    state = {
        query: '  ',
        data: []
    }

    updateQuery = (query) => {
        console.log(query)
        this.setState({ query })
        console.log(this.state.query)


        //BooksAPI.search(this.state.query).then((result) => {
           // this.setState({ data: result })
        //})
        
    }
    render() {
        return (
            <div>
                {console.log(this.state.data)}
                <div className="search-books-bar">
                    <div><Link to="/" className="close-search"></Link></div>
                    <input
                        type="text"
                        placeholder="Search by title or author"
                        value={this.state.query}
                        onChange={(event) => this.updateQuery(event.target.value)}>
                    </input>
                </div>
            </div>
        )
    }
}

export default AddBook


