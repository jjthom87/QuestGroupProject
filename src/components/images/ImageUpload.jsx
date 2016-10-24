import React, { Component } from 'react';

export default class ImageUpload extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			file: '',
			imageUrl: '',
			savedImage: []
		}
	}
	handleSubmit(e){
		e.preventDefault();
		const data = {
			image: this.state.imageUrl
		}
		fetch('/api/imageupload', {
			method: 'post',
			body: JSON.stringify(data),
			headers: {
				'content-type': 'application/json'
			}
		}).then((response) => response.json())
			.then((results) => {
		});
	}
	handleImageChange(e){
		e.preventDefault();

		let reader = new FileReader();
		let file = e.target.files[0];

		reader.onloadend = () => {
			this.setState({
				file: file,
				imageUrl: reader.result
			})
		}
		reader.readAsDataURL(file)
	}
	componentWillMount(){
		fetch('/api/image')
			.then((response) => response.json())
				.then((results) => {
				this.setState({
					savedImage: results[0].image
				});
			});
	}
	render(){
		return (
			<div className="top-bar">
				<form onSubmit={this.handleSubmit.bind(this)}>
					<input 
						className="fileInput" 
						type="file"
						onChange={this.handleImageChange.bind(this)}
					/>
					<input type="submit" value="Upload Image"/>
				</form>
				<div> 
					<img src={this.state.savedImage} style={{width: 300, height: 300}}/>
				</div>
			</div>
		)
	}
}