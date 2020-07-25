import React from 'react';

import './sign-in.styles.scss';
import CustomForm from '../customform/customform.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		};
	}

	handleSubmit = (e) => {
		e.preventDefault();

		this.setState({ email: '', password: '' });
	};

	handleChange = (e) => {
		const { value, name } = e.target;

		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="sign-in">
				<h2 className="title">I already have an account</h2>
				<span> Sign in with your email and password </span>

				<form onSubmit={this.handleSubmit}>
					<CustomForm
						name="email"
						type="email"
						value={this.state.email}
						handleChange={this.handleChange}
						label="Email"
						required
					/>

					<CustomForm
						name="password"
						type="password"
						value={this.state.password}
						handleChange={this.handleChange}
						label="Password"
						required
					/>

					<div className="buttons">
						<CustomButton type="submit"> Sign in </CustomButton>
						<CustomButton onClick={signInWithGoogle} googleSignIn>
							Sign in with Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
