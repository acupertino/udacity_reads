import React, {Component} from 'react';
import './App.css';


class BookContainer extends Component {
render(){
console.log('Props', this.props)
return(
    <div className="list-books">
        <div className="list-books-title"><h1>MyReads</h1></div>

        <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {this.props.filtrado1.map((a) => (
                        <li>
                            <div className="book">
                              <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(${livros_lendo.url}' }}></div>
                            
                              </div>
                              <div className="book-title">{a.name}</div>
                              <div className="book-authors">{a.author}</div>
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
                      {this.props.filtrado2.map((b) => (
                        <li>
                            <div className="book">
                              <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(${livros.quero.url})' }}></div>
                                    
                              </div>
                              <div className="book-title">{b.name}</div>
                              <div className="book-authors">{b.author}</div>
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
                      {this.props.filtrado3.map((c) => (
                        <li>
                            <div className="book">
                              <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(${livros_lido.url}' }}></div>
                                   
                              </div>
                              <div className="book-title">{c.name}</div>
                              <div className="book-authors">{c.author}</div>
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
                    
         
