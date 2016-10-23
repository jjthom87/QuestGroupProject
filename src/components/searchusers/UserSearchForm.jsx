import React, { Component } from 'react';

export default class UserSearchForm extends React.Component {
	handleSearch(){
		var searchText = this.refs.searchText.value;

		this.props.onSearch(searchText);
	}
	render(){
		return (
			<div>
				<input type="search" ref="searchText" placeholder="Search Users" onChange={this.handleSearch.bind(this)}/>
			</div>
		);
	}
}