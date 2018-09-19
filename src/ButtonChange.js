import React from 'react';
import './App.css';



class ButtonChange extends React.Component {    
    constructor(props) {
        super(props);
        this.change = this.change.bind(this);
    }            
    change(event) {
        if(this.props.infoLivro.shelf == null){
            var n1 = [{"shelf" : "null"}]
            var n2 = this.props.infoLivro
            var n3 = []
            n3 = n3.concat(n2, n1)
            console.log(n3)
        }else{
        this.props.changeBook(this.props.infoLivro, event.target.value)
        }
    }   
    
    funcaoShelf = (book) => {
        if (book.shelf == null) {
            var x = "none"
            return x
        }else{
            return this.props.infoLivro.shelf
        }
    }

    render() {        
        return(
            <div>                
                <select  defaultValue={this.funcaoShelf(this.props.infoLivro)} onChange = {this.change}>
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


