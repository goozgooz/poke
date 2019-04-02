import React, {Component} from 'react';

class SearchBar extends Component {
    state = {
        name: '',
    }
    
    handleChange = (e) => {
        this.setState({name: e.target.value});
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.name) {
            this.props.findPokemon(this.state.name)
            this.setState({name: ''});
        }
    }
    
    render(){
        return (
            <form 
                className="search-form"
                onSubmit={this.handleSubmit}
            >    
                <input
                    type="text"
                    value={this.state.name}
                    placeholder="Enter Pokemon Name"
                    onChange={this.handleChange}
                />
                <input
                    type="submit"
                    value="Search"
                />
            </form>
        )
    }
}

export default SearchBar;