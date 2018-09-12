import React from 'react'
import BookContainer from './BookContainer'
import './App.css'
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

  onChange(x){
    console.log(x)
  }

  render() {

    return (
      <BookContainer dados = {this.state.dados}
                     chageShelf = {this.onChange}/>
    )
  }
}

export default App
