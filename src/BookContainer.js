import React, { Component } from 'react';
import ButtonChange from './ButtonChange';
import './App.css';
import { Link } from 'react-router-dom'



class BookContainer extends Component {
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
      <div className="list-books">
        <div className="list-books-title"><h1>MyReads</h1></div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.data.filter(book => book.shelf === 'currentlyReading').map(book => (
                    <li key={book.id}>
                      <div className="book">
                        <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: this.funcaThumb(book) }} />
                          <div className="book-shelf-changer">
                            <ButtonChange shelf={book.shelf}
                              infoLivro={book}
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


            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.data.filter(book => book.shelf === 'wantToRead').map(book => (
                    <li key={book.id}>
                      <div className="book">
                        <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: this.funcaThumb(book) }} />
                          <div className="book-shelf-changer">
                            <ButtonChange shelf={book.shelf}
                              infoLivro={book}
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


            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.data.filter(book => book.shelf === 'read').map(book => (
                    <li key={book.id}>
                      <div className="book">
                        <div className="book-top">
                         <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: this.funcaThumb(book) }} /> 
                          <div className="book-shelf-changer">
                            <ButtonChange shelf={book.shelf}
                              infoLivro={book}
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
        <div className="open-search a">
          <Link to="/search" dados ={this.props.dados}> </Link>
        </div>
      </div>
    )
  }
}

export default BookContainer


