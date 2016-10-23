import React, { Component } from 'react';

export default class SearchYourItemForm extends React.Component {
	handleSearch(){
		var searchText = this.refs.searchText.value;

		this.props.onSearch(searchText);
	}
	render(){
		return (
			<div>
				<input type="search" ref="searchText" placeholder="Search Quests and Missions By Title" onChange={this.handleSearch.bind(this)}/>
			</div>
		);
	}
}