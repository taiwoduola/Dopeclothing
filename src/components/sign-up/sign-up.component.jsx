import React from 'react';
import CustomForm from '../../components/customform/customform.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';


class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(
                email,
                password
            );

            await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });    
        } catch (error) {
            console.log(error);
        }
    };

    handleChange = e => {
        const {name, value} = e.target;

        this.setState({[name]: value});
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state;

        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span className='sub-title'>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit} className='sign-up-form'>
                    <CustomForm 
                       type= 'text'
                       name= 'displayName'
                       value={displayName}
                       label='Display Name'
                       onChange={this.handleChange}
                       required
                    />

                    <CustomForm 
                       type= 'email'
                       name= 'email'
                       value={email}
                       label='Email'
                       onChange={this.handleChange}
                       required
                    />

                    <CustomForm 
                       type= 'password'
                       name= 'password'
                       value={password}
                       label='Password'
                       onChange={this.handleChange}
                       required
                    />

                    <CustomForm 
                       type= 'password'
                       name= 'confirmPassword'
                       value={confirmPassword}
                       label='Confirm Password'
                       onChange={this.handleChange}
                       required
                    />

                    <CustomButton type='submit'>Sign up</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;