import React from 'react';
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import * as BooksAPI from './BooksAPI'


class AddBook extends React.Component {

    state = {
        query: ''
    }
    updateQuery = (query) => {
        this.setState({ query: query.trim() })
    }
    render() {
        let showingBooks
        const dados = this.props.dados.title
        if(this.state.query) { //condição para ver se foi digitado algo no campo de entrada
            const  match = new RegExp(escapeRegExp(this.state.query), 'i') //ajuste da string
            showingBooks = this.props.dados.filter((book) => match.test(book.title))    
            
        }
                     
        
        return (
            <div>
                {console.log(dados)}
                <div className="search-books-bar">
                    <div className="search-books-bar">
                        <div><Link to="/" className="close-search"></Link></div>
                        <input
                            type="text" 
                            placeholder="Search by title or author"
                            value={this.state.query}
                            onChange={ (event) => this.updateQuery(event.target.value) }>
                        </input>
                    </div>
                </div>

             {this.props.dados.filter(book => book.shelf === 'currentlyReading').map(book => (
                <ol> <li key={book.id}> {book.title}</li></ol>
             ))}

             <div>--------</div>

             {this.props.dados.filter(book => book.shelf === 'wantToRead').map(book => (
                <ol> <li key={book.id}> {book.title}</li></ol>
             ))}

             <div>--------</div>

             {this.props.dados.filter(book => book.shelf === 'read').map(book => (
                <ol> <li key={book.id}> {book.title}</li></ol>
             ))}




            </div>
        )
    }
}
export default AddBook


