import React from 'react';
import { Link } from 'react-router-dom'

class AddBook extends React.Component {

    render() {
        console.log(this.props)
        return (
            <div >
                
                
                
                <Link className="close-search" to="/"></Link>
                <input className="search-books-bar input">
                   
                                    
          
    
              </input>
                        
            </div>
        )
    }
}
export default AddBook


