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

  changeShelf(x) {
    console.log(this.refs.selected.value);
  }

  render() {

    return (
      <BookContainer dados={this.state.dados}
        changeShelf={this.changeShelf} />
    )
  }
}

export default App
