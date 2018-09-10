import React from 'react'
import BookContainer from './BookContainer'
import './App.css'
import * as BooksAPI from './BooksAPI'


class App extends React.Component {
  state = {
    dados: [],
    dados2: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ dados: books })
    })

    BooksAPI.get("nggnmAEACAAJ").then((teste) => {
      this.setState({dados2 : teste})
    })
  }



  render() {

    return (
      <div>

        {this.state.dados.filter(book => book.shelf === 'wantToRead').map(book => (
          <ol key={book.id}>{book.title}</ol>
        )
        )}

        {this.state.dados2.title}
      </div>
    )
  }
}

export default App
