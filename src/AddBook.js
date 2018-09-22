import React from 'react';
import { Link } from 'react-router-dom'
import './App.css';
import * as BooksAPI from './BooksAPI'
import ButtonChange from './ButtonChange'

var str = ""
class AddBook extends React.Component {
    state = {
        data: []
    }
    
    updateQuery = (query) => {
        str = query
        if (str !== "") {
            BooksAPI.search(str).then((result) => {
                if (result.error === "empty query") {
                    this.setState({ data: [] })
                } else {
                    this.setState({ data: result })
                }
            })
        } else {
            this.setState({ data: [] })
        }
    }
    
    funcaThumb = (book) => {
        if(book.imageLinks == null){
            return null
        }else{ return `url(${book.imageLinks.smallThumbnail})`}
    }
    
    funcaAuthors = (book) =>{
        if(book.authors == null){
            return null
        }else{ return book.authors}
    }
    
    
    render() {
        return (
            <div>
                <div className="search-books-bar">
                    <div><Link to="/" className="close-search" ></Link></div>
                    <input
                        type="text"
                        placeholder="Search by title or author"
                        value={this.str}
                        onChange={(event) => this.updateQuery(event.target.value)}>
                    </input>
                </div>
                <div className="search-books-results">
                    <div className="list-books-content">
                        <div>
                            <div className="bookshelf">
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                        {this.state.data.map(book => (
                                            <li key={book.id}>
                                                <div className="book">
                                                    <div className="book-top">
                                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: this.funcaThumb(book) }} />
                                                        <div className="book-shelf-changer">
                                                            <ButtonChange infoLivro={book}
                                                                changeBook={this.props.changeBook}
                                                                funcaoCompare={this.props.funcaoCompare}/>
                                                        </div>
                                                    </div>
                                                    <div className="book-title">{book.title}</div>
                                                    <div className="book-authors">{this.funcaAuthors(book)}</div>
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


