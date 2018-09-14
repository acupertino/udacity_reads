import React from 'react';

class AddBook extends React.Component {    
    constructor(props) {
        super(props);
    }        
    render() {
        console.log(this.props)
        return(
            <div>                
           Add Book
        </div>
        )
    }
}
export default AddBook


