import React from 'react'
import BookContainer from './BookContainer'
import './App.css'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import AddBook from './AddBook';

class App extends React.Component {

  state = {
    dados: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ dados: books })
    })
  }

  stateLenght = () => {
    var n1 = this.state.dados.filter(book => book.shelf === 'currentlyReading').length
    var n3 = this.state.dados.filter(book => book.shelf === 'wantToRead').length
    var n2 = this.state.dados.filter(book => book.shelf === 'read').length
    return n1+n2+n3
  }

  changeBook = (book, newShelf) => {
    if (newShelf === "none") {
      this
      book.shelf = newShelf
      BooksAPI.update(book, newShelf).then(book => {
        this.setState(state => ({
          book: state.dados.concat([book])
        }))
      })
    } else {
      book.shelf = newShelf
      BooksAPI.update(book, newShelf).then(book => {
        this.setState(state => ({
          book: state.dados.concat([book])
        }))
      })
    }
  }


  render() {
    return (
      <div>
        <Route exact path="/" render={() => (
          <BookContainer dados={this.state.dados}
            changeBook={this.changeBook}
            stateLenght={this.stateLenght} />
        )} />
        <Route path="/AddBooks" render={() => (
          <AddBook dados={this.state.dados}
            changeBook={this.changeBook}
            dados={this.state.dados}
            stateLenght={this.stateLenght} />
        )} />
      </div>

    )
  }
}

export default App
