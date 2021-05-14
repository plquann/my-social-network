import React from 'react';
import './ThirdParty.scss';

export default function ThirdParty() {
    return (
        <>
            <p className="social-text">Or Login with social platforms</p>
            <div className="social-media">
                <a href="google.com" className="social-icon">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="google.com" className="social-icon">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="google.com" className="social-icon">
                    <i className="fab fa-google"></i>
                </a>
                <a href="google.com" className="social-icon">
                    <i className="fab fa-linkedin-in"></i>
                </a>
            </div>
        </>
    )
}
