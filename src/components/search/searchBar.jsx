// import Search from 'react-search'
import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'

export default class SearchBar extends Component {
 
  constructor (props) {
    super(props)
    this.state = { searchResults: [] }
  }
 

  HiItems(items) {
    console.log(items)
  }

  // Goal: To fetch /search when user enter search
  // Pulling only missions for now.  Just to get something searched.
  getItemsAsync(searchValue, cb) {
    fetch('/search', {
      headers: {
                Auth: localStorage.getItem('token'),
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            credentials: 'include'
      }).then((response) => response.json())
      .then((results) => {
      if(results.items != undefined){
        let items = results.items.map( (res, i) => { return { id: i, value: 'missions' } })
        this.setState({ searchResults: items })
        cb(searchValue);
      }
    });
  }
 
  render () {
    return (
      <div>
        <Search items={this.state.searchResults}
                multiple={true}
                getItemsAsync={this.getItemsAsync.bind(this)}
                onItemsChanged={this.HiItems.bind(this)} />
      </div>
    )
  }
}