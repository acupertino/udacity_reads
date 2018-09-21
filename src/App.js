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
    funcaoCompare = (book) => { //0 para não pertencente, != 0 para pertencente (numero = indice)    
      var i = 0, x =0
      for(i=0;i<this.state.dados.length;i++){
        if(book.id === this.state.dados[i].id){
          book.shelf = this.state.dados[i].shelf
          return book.shelf
        }}return x
  }

  changeBook = (book, newShelf) => {
        book.shelf = newShelf
        BooksAPI.update(book, newShelf).then(book => {
          this.setState(state => ({
        book: state.dados.concat([book])
        }))
      })
    }
    


  render() {
    return (
      <div>
        <Route exact path="/" render={() => (
          <BookContainer dados={this.state.dados}
            changeBook={this.changeBook}
            funcaoCompare={this.funcaoCompare}/>
        )} />
        <Route path="/search" render={() => (
          <AddBook dados={this.state.dados}
            changeBook={this.changeBook}
            funcaoCompare={this.funcaoCompare}/>
        )} />
      </div>

    )
  }
}

export default App
