import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import "./Home/Home.css"

const SignUp = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/dashboard';


    const handleUserUpdate = (fullName) => {
        const profile = {
            displayName: fullName
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setError(null);
        const form = event.target;
        const fullName = form.fullName.value;
        const email = form.email.value;
        const password = form.password.value;


        if (password.length < 6) {
            setError('Your password is not long enough')
            return
        }

        createUser(email, password)
            .then(userData => {
                const user = userData.user;
                handleUserUpdate(fullName);
                form.reset();
                navigate(from, { replace: true })

            })
            .catch(error => {
                console.error(error);
                const errorCode = error.code;
                setError(errorCode);
                form.reset();

            })

    }



    return (
        <div className="bg-grey-lighter min-h-screen flex flex-col mb-5 home">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <form onSubmit={handleSubmit} className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <Link to={"/"}><h1 className='text-2xl mt-2 text-center appName font-bold cursor-pointer'>The <span >Quizulator</span></h1></Link>
                    <h1 className="mb-8 text-xl font-semibold text-center">Sign up</h1>
                    <input
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullName"
                        placeholder="Full Name" />

                    <input
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />
                    <input
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-blue-500 text-white hover:bg-blue-700 focus:outline-none my-1"
                    >Create Account</button>

                    <p className="text-error mt-3">{error}</p>

                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the
                        <Link className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </Link> and
                        <Link className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </Link>
                    </div>
                </form>

                <div className="text-grey-dark mt-6">
                    Already have an account?
                    <Link className="no-underline border-b border-blue text-blue" to="../login/">
                        Log in
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SignUp;