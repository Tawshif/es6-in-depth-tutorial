import React, { Component } from 'react';
import {FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';

class Global extends Component{
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            item:[]
        }
    }
    search() {
        const BASE_URL = `https://www.googleapis.com/books/v1/volumes?q=`;
        fetch(`${BASE_URL}${this.state.query}`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(json => {
                console.log('book items', json);
                let { items } = json;
                this.setState({items});
            })
    }
	render(){ 
		return ( 
			<div className="text-center">
				<h2>Book explorer!</h2>	
				<FormGroup>
					<InputGroup>
						<FormControl
                            type="text"
                            placeholder="search form books"
                            onChange={event => {this.setState({query: event.target.value})}}
                            onKeyPress={event => {
                                if (event.key == "Enter") {
                                    this.search()
                                }
                            }}
                        />
						<InputGroup.Addon onClick={() => this.search()} >
							<Glyphicon glyph="search"></Glyphicon>
						</InputGroup.Addon>
					</InputGroup>
				</FormGroup>
			</div>
		)
	}
}

export default Global;