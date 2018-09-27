import React from 'react'
import BookContainer from './BookContainer'
import './App.css'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import AddBook from './AddBook';

class App extends React.Component {
  state = {
    data: []
  }

    componentDidMount() {
      BooksAPI.getAll().then((books) => {
        this.setState({ data: books })
      })
    }
    funcaoCompare = (book) => { 
      var i = 0, x =0
      for(i=0;i<this.state.data.length;i++){
        if(book.id === this.state.data[i].id){
          book.shelf = this.state.data[i].shelf
          return book.shelf
        }}return x
  }

  changeBook = (book, newShelf) => {
    const newBook = { ...book, shelf: newShelf}
    BooksAPI.update(book, newShelf).then(() => {
      this.setState(state => ({
           data: state.data.filter((c) => c.id !== book.id).concat([newBook])
      }))
  })
}


  render() {
    return (
      <div>
        <Route exact path="/" render={() => (
          <BookContainer data={this.state.data}
            changeBook={this.changeBook}
            funcaoCompare={this.funcaoCompare}/>
        )} />
        <Route path="/search" render={() => (
          <AddBook data={this.state.data}
            changeBook={this.changeBook}
            funcaoCompare={this.funcaoCompare}/>
        )} />
      </div>

    )
  }
}

export default App
