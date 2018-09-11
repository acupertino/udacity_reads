import React, { Component } from 'react';
import './App.css';


class BookContainer extends Component {
  render() {
    console.log('Props', this.props)
    return (
      <div className="list-books">
        <div className="list-books-title"><h1>MyReads</h1></div>

        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading </h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.dados.filter(book => book.shelf === 'currentlyReading').map(book => (
                    <li>
                      <div className="book">
                        <div className="book-top">
                          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}/>

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
                    <li>
                      <div className="book">
                        <div className="book-top">
                          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}/>

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
                    <li>
                      <div className="book">
                        <div className="book-top">
                          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}/>

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
    )
  }
}

export default BookContainer


