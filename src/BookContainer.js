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
                      {this.props.livros_lendo.map((livros_lendo) => (
                        <li>
                            <div className="book">
                              <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(${livros_lendo.url}' }}></div>
                                    <div className="book-shelf-changer" onClick ={() => this.props.removeBookLendo(livros_lendo)}>                                        
                                    </div>
                              </div>
                              <div className="book-title">{livros_lendo.name}</div>
                              <div className="book-authors">{livros_lendo.author}</div>
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
                      {this.props.livros_quero.map((livros_quero) => (
                        <li>
                            <div className="book">
                              <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(${livros.quero.url})' }}></div>
                                    <div className="book-shelf-changer" onClick ={() => this.props.removeBookQuero(livros_quero)}>                                        
                                    </div>
                              </div>
                              <div className="book-title">{livros_quero.name}</div>
                              <div className="book-authors">{livros_quero.author}</div>
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
                      {this.props.livros_lido.map((livros_lido) => (
                        <li>
                            <div className="book">
                              <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(${livros_lido.url}' }}></div>
                                    <div className="book-shelf-changer" onClick ={() => this.props.removeBookLido(livros_lido)}>                                        
                                    </div>
                              </div>
                              <div className="book-title">{livros_lido.name}</div>
                              <div className="book-authors">{livros_lido.author}</div>
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
                    
         
