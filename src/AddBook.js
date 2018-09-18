import React from 'react';
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import './App.css';
import ButtonChange from './ButtonChange'
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
        if (this.state.query) { //condição para ver se foi digitado algo no campo de entrada
            const match = new RegExp(escapeRegExp(this.state.query), 'i') //ajuste da string
            showingBooks = this.props.dados.filter((livro) => match.test(livro.title) || match.test(livro.authors))
        } else {
            showingBooks = this.props.dados
        }
        return (
            <div>
                <div className="search-books-bar">
                    <div><Link to="/" className="close-search"></Link></div>
                    <input
                        type="text"
                        placeholder="Search by title or author"
                        value={this.state.query}
                        onChange={(event) => this.updateQuery(event.target.value)}>
                    </input>
                </div>

                <div className="search-books-results">
                    <div className="list-books-content">
                        <div>
                            <div className="bookshelf">
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                        {showingBooks.map(book => (
                                            <li key={book.id}>
                                                <div className="book">
                                                    <div className="book-top">
                                                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }} />
                                                        <div className="book-shelf-changer">
                                                            <ButtonChange shelf={book.shelf}
                                                                infoLivro={book}
                                                                changeBook={this.props.changeBook} />
                                                        </div>
                                                    </div>
                                                    <div className="book-title">{book.title}</div>
                                                    <div className="book-authors">{book.authors}</div>
                                                </div>
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

export default AddBook


