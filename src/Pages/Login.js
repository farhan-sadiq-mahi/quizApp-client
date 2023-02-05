import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa'
import { AuthContext } from '../AuthProvider/AuthProvider';
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {

    const { signInPop, logIn } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/dashboard';
    const [er, setEr] = useState(null);




    const handleSignInPop = (provider) => {
        signInPop(provider)
            .then(res => {
                const userData = res.user;
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    }

    const handleLogIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(userData => {
                const user = userData.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true })

            })
            .catch(error => {
                console.error(error)
                const errorCode = error.code;
                setEr(errorCode);
                form.reset();
            })

    }

    return (
        <div className='mb-5 home'>
            <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <form onSubmit={handleLogIn} className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <Link to={"/"}><h1 className='text-2xl mt-2 text-center appName font-bold cursor-pointer'>The <span >Quizulator</span></h1></Link>

                        <h1 className="mb-8 text-xl font-semibold text-center">Log In</h1>

                        <input
                            type="email"
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
                        >Log In</button>
                        <p className="text-error mt-3">{er}</p>
                    </form>

                    <div className='flex my-5'>
                        <hr className="my-2 mx-auto w-40 h-1 bg-info-content rounded border-0 md:my-3 " /><h1 className='mx-2'>OR</h1><hr className="my-2 mx-auto w-40 h-1 bg-info-content rounded border-0 md:my-3" />
                    </div>

                    <button onClick={() => { handleSignInPop(googleProvider) }}
                        className="w-full bg-transparent hover:bg-green-500 text-green-300 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
                    > <FaGoogle className='inline mr-1 mb-1' /> Log In With Google</button>

                    <button onClick={() => { handleSignInPop(githubProvider) }}
                        className="w-full bg-transparent hover:bg-gray-500 text-gray-300 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded my-2"
                    > <FaGithub className='inline mr-1 mb-1' /> Log In With Github</button>
                    <button onClick={() => { handleSignInPop(facebookProvider) }}
                        className="w-full bg-transparent hover:bg-blue-500 text-blue-300 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    > <FaFacebookF className='inline mr-1 mb-1' /> Log In With Facebook</button>


                    <div className="text-grey-dark mt-6">
                        Don't have an account?
                        <Link className="no-underline border-b border-blue text-blue" to="../signup/">
                            Sign Up
                        </Link>.
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;