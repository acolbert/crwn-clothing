import React, {useState} from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.componet';
import CustomButton from '../custom-button/custom-button.component';
import {auth, signInWithGoogle} from '../../firebase/firebase.utils';

const SignIn = (/*{emailSignInStart, googleSignInStart}*/) => {

    const [userCredentials, setCredentials] = useState({ email: '', password: '' })
    const {email, password} = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(email, password);
            
            setCredentials({
                email : '',
                password: ''
            });
        } catch (error) {
            console.log(error.message);
        }

        
    };

    const handleChange = event => {
        
        const {value, name} = event.target;

        setCredentials({
            ...userCredentials,
            [name] : value });
    };



        return (
            <div className='sign-in'>
                <h2> I already have an account</h2>
                <span> Sign in with your email and password</span>

                <form onSubmit={handleSubmit}>
                    <FormInput name="email" type="email" label="email" value={email} handleChange={handleChange} required />
                    <FormInput name="password" type="password" label="password" value={password} handleChange={handleChange} required/>
                    
                    <div className='buttons'>
                        <CustomButton type="submit" value='Submit Form' > Sign In </CustomButton>
                        <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn> 
                            Sign In with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        );

}

export default SignIn;