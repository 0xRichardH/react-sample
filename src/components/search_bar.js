import React, { Component } from 'react'

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = { term: 'Search' }
  }

  render() {
    return (
      <div className="searchBar">
        <input
            value={this.state.term}
            onChange={event => {this.onSearchChange(event.target.value)} }
            className="form-control"/>
      </div>
    )
  }

  onSearchChange(term) {
    this.setState({ term: term })
    this.props.onSearchChange(term)
  }
}

export default SearchBar
