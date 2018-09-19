import React from 'react'
import BookContainer from './BookContainer'
import './App.css'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import AddBook from './AddBook';

class App extends React.Component {
    state = { 
      dados : []
  }


  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ dados: books })
    })
  }

  changeBook = (book, newShelf) => {
    var i=0;
    {for (i=0;i<this.state.dados.length;i++){
      this.state.dados[i].id === book.id && (this.state.dados[i].shelf = newShelf)
    }
    BooksAPI.update(book, newShelf).then(book => {
      this.setState(state => ({
        book : state.dados.concat([ book ])
      }))
    })
  }
}
  
  render() {
    return (
      <div>
        <Route exact path="/" render={() => (
          <BookContainer dados={this.state.dados}
                         changeBook={this.changeBook} />
        )} />
        <Route path="/AddBooks" render={() => (
          <AddBook dados={this.state.dados}
                   changeBook={this.changeBook} />
        )} />
      </div>

    )
  }
}

export default App
