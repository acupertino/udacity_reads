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

  navigateToAdd = () => {
    this.setState({ screen: 'addbook' })
  }

  render() {
    const changeBook = (book, newS) => {
      BooksAPI.update(book, newS)
    }
    return (
      <div>
        <Route exact path="/" render={() => (
          <BookContainer dados={this.state.dados}
            changeBook={changeBook}
            onNavigate={this.navigateToAdd}/>
        )} />
        <Route path="/AddBooks" component={AddBook} />
      </div>

    )
  }
}

export default App
