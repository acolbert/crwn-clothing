import React, {useState} from 'react';
import './sign-up.styles.scss';

import FormInput from '../form-input/form-input.componet';
import CustomButton from '../custom-button/custom-button.component';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';


const SignUp = () => {

    const [userCredentials, setCredentials] = useState({ displayName : '', email : '', password: '', confirmPassword: ''})
    const {displayName, email, password, confirmPassword} = userCredentials;


    const handleSubmit = async event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("passwords do not match");
            return;
        }

        try {
            
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            
            setCredentials({
                displayName : '',
                email : '',
                password: '',
                confirmPassword: ''
            });
        } catch (error) {
            console.log(error.message);
        }

        
    };

    const handleChange = event => {
        
        const {value, name} = event.target;

        this.setState({
            ...userCredentials,
            [name] : value });
    };


        return (
            <div className='sign-up'>
                <h2 className="title"> I do not have an account</h2>
                <span> Sign un with your email and password</span>

                <form className='sign-up-form' onSubmit={handleSubmit}>
                    <FormInput name="displayName" type="displayName" label="Display Name" value={displayName} handleChange={handleChange} required />    
                    <FormInput name="email" type="email" label="Email" value={email} handleChange={handleChange} required />
                    <FormInput name="password" type="password" label="Password" value={password} handleChange={handleChange} required/>
                    <FormInput name="confirmPassword" type="password" label="ConfirmPassword" value={confirmPassword} handleChange={handleChange} required/>
                    
                    <CustomButton type='submit'> Sign Up </CustomButton>

                </form>
            </div>
        );
    

}

export default SignUp;