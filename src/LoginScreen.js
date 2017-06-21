import React, { Component } from 'react'
import firebase from 'firebase'
import firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

class LoginScreen extends Component {
	componentDidMount() {
		console.log("componentDidMount")

		this.uiConfig = {
			// signInSuccessUrl: '<url-to-redirect-to-on-success>',
			signInOptions: [
				// Leave the lines as is for the providers you want to offer your users.
				// firebase.auth.GoogleAuthProvider.PROVIDER_ID,
				// firebase.auth.FacebookAuthProvider.PROVIDER_ID,
				// firebase.auth.TwitterAuthProvider.PROVIDER_ID,
				// firebase.auth.GithubAuthProvider.PROVIDER_ID,
				{
					provider:firebase.auth.EmailAuthProvider.PROVIDER_ID,
					requireDisplayName: true,
				}	
				// firebase.auth.PhoneAuthProvider.PROVIDER_ID
			],
			callbacks: {
				signInSuccess: (currentUser, credential, redirectUrl) => {
					console.log(currentUser, credential, redirectUrl)

					console.log(firebase.auth().currentUser)

					return false
				},
			},
			// Terms of service url.
			// credentialHelper: firebaseui.auth.CredentialHelper.NONE,
			signInFlow: 'popup',
		};

		// Initialize the FirebaseUI Widget using Firebase.
		this.authUi = new firebaseui.auth.AuthUI(firebase.auth());
		// The start method will wait until the DOM is loaded.
	

		
	}
	
	

	signIn(e) {

		console.log(e)
		this.authUi.start('#firebaseui-auth-container', this.uiConfig);
	}
	
	render() {
		console.log("render")
		var signInAction = this.signIn.bind(this)

		return (
			<div>
				LoginScreen
				<br/>
				<button onClick={signInAction}>Sign in</button>
				<div id={'firebaseui-auth-container'}></div>
			</div>
		)
	}
}

export default LoginScreen