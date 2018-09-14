import React, { Component } from 'react';
import ButtonChange from './ButtonChange';
import './App.css';
import { Link } from 'react-router-dom'
import AddBook from './AddBook';

class BookContainer extends Component {
  render() {
    console.log('Props', this.props)
    return (
      <div className="list-books">
        <div className="list-books-title"><h1>MyReads</h1></div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.dados.filter(book => book.shelf === 'currentlyReading').map(book => (
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


            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.dados.filter(book => book.shelf === 'wantToRead').map(book => (
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


            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.dados.filter(book => book.shelf === 'read').map(book => (
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
                        <div className="book-authors">{book.authors}
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
        <Link className="open-search a" to ="/AddBooks"> add </Link>

      </div>
    )
  }
}
    
export default BookContainer


