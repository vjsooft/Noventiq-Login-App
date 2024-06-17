import React, { useState } from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa";
import LanguageSelector from './LanguageSelector';

const Login =()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [language, setLanguage] = useState('en');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [emailError, setEmailError] = useState(true);

    const corporateDomains = ['noventiq.com','yourcorporate.com','anothercorporate.com']; 
    const publicDomains = ['gmail.com', 'outlook.com', 'yahoo.com']; 
    // const languages = [
    //     { value: 'en', label: 'English' },
    //     { value: 'hi', label: 'Hindi' },
    //     { value: 'es', label: 'Spanish' },
    //     { value: 'fr', label: 'French' },
    // ];

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return 'Invalid email format';
        }
    
        const domain = email.split('@')[1];
        if (!publicDomains.includes(domain)) {
            return 'Public email domains are not allowed';
        }
    
        if (corporateDomains.includes(domain)) {
            return 'Email must be from a corporate domain';
        }
        return '';
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (!isValidEmail(e.target.value)) {
            setEmailError('Please enter a valid corporate id.');
        } else {
            setEmailError('');
        }
    };
    
    const handlePasswordVisibilityToggle = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const loginData = {
            email : email,
            password : password, 
            // language: language
        }
        console.log("send Data========>", loginData);
        if (!isValidEmail(email)) {
            setEmailError('Please enter a valid corporate Id.');
        } else {
            setEmailError('');
            alert('Form submitted successfully!');
        }
    };
    return (
        <div className='form-wrapper'>
            <form onSubmit={handleSubmit}>
                <div className='form-inner-wrapper'>
                    <div className='form-group'>
                        <label htmlFor="email">Email:</label>
                        <div className='form-control-input'>
                            <span><AiOutlineMail /></span>
                            <input
                              value={email}
                              onChange={handleEmailChange}
                            className="form-control"
                            />
                             {emailError && <p className='error-msg'>{emailError}</p>}
                        </div>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="password">Password:</label>
                        <div className='form-control-input'>
                            <span><RiLockPasswordLine /></span>
                            <input
                             type={isPasswordVisible ? 'text' : 'password'}
                             value={password}
                             onChange={(e) => setPassword(e.target.value)}
                             required
                              className="form-control"
                            />
                            <button className='eye-btn' type="button" onClick={handlePasswordVisibilityToggle}>
                            {isPasswordVisible ? <FaRegEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                    </div>
                    <div className='forgot-link'>
                        <p>Forgot password</p>
                    </div>
                    <div className='form-group land-drop'>
                        <label htmlFor="languageDropdown">Language: </label>
                        <div className='select-language'>  <LanguageSelector/></div>
                        {/* <select
                        id="language"
                        name="language"
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        >
                        {languages.map((lang) => (
                            <option key={lang.value} value={lang.value}>
                            {lang.label}
                            </option>
                        ))}
                        </select> */}
                    </div>
                    <div className='switch-btn'>
                        <input type="checkbox" id="checkbox1" />
                        <label for="checkbox1"></label>
                    </div>
                    
                </div>
                <button className='form-btn' type="submit">Log in </button>
            </form>
        </div>
    );
  };
export default Login