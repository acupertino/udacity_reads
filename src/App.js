import React from 'react'
import BookContainer from './BookContainer'
import './App.css'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'


class App extends React.Component {
  state = {
    dados: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ dados: books })

    })
  }

  render() {
    const changeBook = (book, newS) => {
      BooksAPI.update(book, newS)
    }
    return (
      <div>
        
          <BookContainer dados={this.state.dados}
            changeBook={changeBook} />

    
      </div>
    )
  }
}

export default App
