import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LeafletMap from './LeafletMap'
import LoginScreen from './LoginScreen'
import firebase from 'firebase'
import firebaseui from 'firebaseui'

class App extends Component {

	constructor() {
		super()
		let self = this
		
		firebase.auth().onAuthStateChanged(function(user) {

			console.log(user)
			// user ? handleSignedInUser(user) : handleSignedOutUser();
		});
	}


	render() {
		console.log("render App.js")
		
		console.log(firebase.auth().currentUser)
		let auth = firebase.auth()
		let content 

		if (auth.currentUser) {
			content  = <LeafletMap />
		}
		else {
			content = <LoginScreen />
		}
		return (
			<div className="App">
				{content}
			</div>
		);
	}
}

export default App;
