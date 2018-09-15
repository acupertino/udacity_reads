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


  changeBook = (book, newShelf) => {
    BooksAPI.get(book.id).then((books) => {
      console.log(books.shelf)
    })
    BooksAPI.getAll().then((books) => {
      console.log(books)
    })

  }

  render() {
    return (
      <div>
        <Route exact path="/" render={() => (
          <BookContainer dados={this.state.dados}
            changeBook={this.changeBook} />
        )} />
        <Route path="/AddBooks" component={AddBook} />
      </div>

    )
  }
}

export default App
