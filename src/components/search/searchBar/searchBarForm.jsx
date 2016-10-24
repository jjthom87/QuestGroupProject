import React, { Component } from 'react';

export default class SearchBarForm extends React.Component {
	handleSearch(){
		var searchText = this.refs.searchText.value;

		this.props.onSearch(searchText);
	}
	render(){
		return (
			<div>
				<input type="search" ref="searchText" placeholder="Search for Specific Missions & Quests" onChange={this.handleSearch.bind(this)}/>
			</div>
		);
	}
}