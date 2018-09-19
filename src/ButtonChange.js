import React from 'react';
import './App.css';

class ButtonChange extends React.Component {
    constructor(props) {
        super(props);
        this.change = this.change.bind(this);
    }
    change(event) {
        this.props.changeBook(this.props.infoLivro, event.target.value)
    }

    funcaoCompare = (book) => {
        var i = this.props.stateLenght()
        var j = 0
        for (j = 0; j < i; j++) {
            if (this.props.dados[j].id === book.id) {
                console.log('s')
            }
            else console.log('n')
        }
    }  
    
    funcaoShelf = (book) => {
        if(book.shelf === "read" || book.shelf === "wantToRead" || book.shelf === "currentlyReading"){
            return book.shelf
        }else{
            return "none"
        }
    }   
            render() {
                this.funcaoCompare(this.props.infoLivro)
                return (
                    <div>
                        <select defaultValue={this.funcaoShelf(this.props.infoLivro)} onChange={this.change}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                )
            }
        }
        export default ButtonChange


