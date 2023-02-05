import React, { useContext, useEffect, useState } from 'react';
import "./Home.css";
import logo from "../../assets/img/logo.png"
import Loader from '../../Components/Loader/Loader';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Home = () => {

    const { user } = useContext(AuthContext);

    const navigate = useNavigate();

    const checkLog = () => {

        if (user) {
            navigate('/dashboard', { replace: true })
        }
        else {
            navigate('/login', { replace: true })
        }
    }

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 1400)
    }, [])

    if (loading) {
        return <Loader />
    }

    return (
        <div className='h-screen flex justify-center items-center flex-col home gap-y-2'>

            <img src={logo} alt="" className='logo' />
            <h1 className='text-2xl mt-2 appName font-bold'>The <span >Quizulator</span></h1>
            <p className='text-center'>Get Ready for the Ultimate Quiz Experience with The Quizulator</p>
            {/* <Link to={"/login"}> */}
            <button onClick={checkLog} className="btn bg-red-500 hover:bg-red-600 text-white border-none">Get Started</button>
            {/* </Link> */}


        </div>
    );
};

export default Home;