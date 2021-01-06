/* eslint-disable jsx-a11y/img-redundant-alt */
import { FirebaseAuthConsumer } from '@react-firebase/auth';
import firebase from 'firebase';
import React, { useContext } from 'react';
import { Nav } from 'react-bootstrap';
import { SiLinkedin, SiGithub, SiStackoverflow, SiCodewars, SiGmail } from 'react-icons/si';

interface Props { }

function Header(props: Props) {
    const { } = props;

    return (
        <FirebaseAuthConsumer>
            {
                ({ isSignedIn, user, providerId }) => {
                    return (
                        <div
                            className='flex flex-row h-48 px-64 py-2 w-auto bg-white shadow-md z-50'
                        >
                            <div
                                className='flex flex-col justify-center align-middle p-2'
                            >
                                <img src='/images/profile_picture.jpg' alt='Profile Picture' className='shadow-lg rounded-full h-40' />
                            </div>
                            <div
                                className='flex-auto flex flex-col px-4 py-1 justify-center'
                            >
                                <div>
                                    <h1
                                        className='font-weight-bolder text-5xl text-gray-600'
                                    >Nicholas Evans</h1>
                                    <h3
                                        className='font-weight-light text-gray-500'
                                    >Full Stack Developer</h3>
                                </div>
                                <div
                                    className='flex flex-row items-center'
                                >
                                    <SiLinkedin className='h-8 w-8 m-2' />
                                    <SiGithub className='h-8 w-8 m-2' />
                                    <SiStackoverflow className='h-8 w-8 m-2' />
                                    <SiCodewars className='h-8 w-8 m-2' />
                                </div>
                            </div>
                            <div
                                className='flex-none flex flex-row items-center'
                            >
                                <a
                                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded inline-flex items-center'
                                    href='/s'
                                ><SiGmail /><span className='ml-2'>Contact</span></a>
                            </div>
                        </div>
                        // <di>
                        //     {JSON.stringify({ isSignedIn, user, providerId }, null, 2)}
                        //     <button
                        //         onClick={() => {
                        //             const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
                        //             firebase.auth().signInWithPopup(googleAuthProvider);
                        //         }}
                        //     >
                        //         Sign In with Google
                        //     </button>
                        //     <img
                        //         src={user?.photoURL || ''}
                        //         alt={'hello'}
                        //     />
                        // </di>
                    );
                }
            }
        </FirebaseAuthConsumer>
    );
}

export default Header;
