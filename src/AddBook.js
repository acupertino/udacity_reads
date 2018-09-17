import React from 'react';
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import * as BooksAPI from './BooksAPI'

const livros = [
    {
        "name": "To Kill a Mockingbirddd",
        "author": "Harper Lee",
        "url": "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api",
        "id": "1"
    },
    {
        "name": "Ender's Game",
        "author": "Orson Scott Cardh",
        "url": "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api",
        "id": "1"
    },

    {
        "name": "1776",
        "author": "David McCullough",
        "url": "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api",
        "id": "2"
    },
    {
        "name": "Harry Potter and the Sorcerer's Stone",
        "author": "J.K. Rowling",
        "url": "http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api",
        "id": "2"
    }
]


class AddBook extends React.Component {

    state = {
        query: ''
    }
    updateQuery = (query) => {
        this.setState({ query: query.trim() })
    }
    render() {
        let showingBooks
        if (this.state.query) { //condição para ver se foi digitado algo no campo de entrada
            const match = new RegExp(escapeRegExp(this.state.query), 'i') //ajuste da string
            showingBooks = livros.filter((livro) => match.test(livro.name))
        }else{
            showingBooks = livros
        }
        return (
            <div>
                {console.log(showingBooks)}
                <div className="search-books-bar">
                    <div><Link to="/" className="close-search"></Link></div>
                    <input
                        type="text"
                        placeholder="Search by title or author"
                        value={this.state.query}
                        onChange={(event) => this.updateQuery(event.target.value)}>
                    </input>
                </div>
                <div className="search-books-results">
                    {livros.map(book => (
                        <ol> <li key={livros.name}> {book.name}</li></ol>
                    ))}
                </div>
            </div>

        )
    }
}
export default AddBook


