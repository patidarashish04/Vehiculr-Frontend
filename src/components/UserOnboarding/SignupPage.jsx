import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from "react-router-dom";
import SignInMethodPage from './SignInMethodPage';
import PhoneNumberSignIn from './PhoneNumberSignIn';

const SignupPage = () => {
    return (
        <div>
            {/* 👇 This is where nested routes will render */}
            <Outlet />

            <Routes>
                {/* Default route → redirect to email */}
                <Route index element={<Navigate to="email" replace />} />
                <Route path="email" element={<SignInMethodPage />} />
                <Route path="phone" element={<PhoneNumberSignIn />} />
            </Routes>
        </div>
    );
};

export default SignupPage;
