import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Profile = () => {
    const { user, logOut } = useContext(AuthContext);
    return (
        <div className='bg-base-100 pt-8'>

            <div className="flex flex-col justify-center max-w-xs p-6 rounded-xl sm:px-12">
                {
                    user.photoURL ? <img src={user.photoURL} alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" /> : <img src="https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg" alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
                }
                <div className="text-center divide-y">
                    <div className="my-2 space-y-1">
                        <h2 className="text-2xl font-bold ">{user.displayName}</h2>
                        <p className="px-5 text-gray-400 my-4">{user.email}</p>
                        <button className="btn btn-outline btn-error my-4" onClick={logOut}>Log Out</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;