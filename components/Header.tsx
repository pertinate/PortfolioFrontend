/* eslint-disable jsx-a11y/img-redundant-alt */
import { FirebaseAuthConsumer } from '@react-firebase/auth';
import firebase from 'firebase';
import React, { useContext } from 'react';
import { HiMail, HiOutlineShare } from 'react-icons/hi';
import { SiLinkedin, SiGithub, SiStackoverflow, SiCodewars, SiGmail, SiBlogger } from 'react-icons/si';

interface Props { }

function Header(props: Props) {
    const { } = props;

    return (
        <div
            className='flex flex-col md:flex-row h-auto px-24 py-4 md:px-64 md:py-2 w-auto bg-white shadow-md z-50'
        >
            <div
                className='flex flex-row justify-center align-middle p-2'
            >
                <img src='/images/profile_picture.jpg' alt='Profile Picture' className='shadow-lg rounded-full h-40 w-40' />
            </div>
            <div
                className='flex-auto flex flex-col px-4 py-1 justify-center items-center md:items-baseline'
            >
                <div>
                    <h1
                        className='font-bold text-5xl text-gray-600'
                    >Nicholas Evans</h1>
                    <h3
                        className=' text-gray-500'
                    >Full Stack Developer</h3>
                </div>
                <div
                    className='flex flex-row items-center'
                >
                    <a
                        href='https://linkedin.com/in/nicholas-evans-712b69a4/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <SiLinkedin className='h-8 w-8 m-2' />
                    </a>
                    <a
                        href='https://linkedin.com/in/nicholas-evans-712b69a4/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <SiGithub className='h-8 w-8 m-2' />
                    </a>
                    <a
                        href='https://linkedin.com/in/nicholas-evans-712b69a4/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <SiStackoverflow className='h-8 w-8 m-2' />
                    </a>
                    <a
                        href='https://linkedin.com/in/nicholas-evans-712b69a4/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <SiCodewars className='h-8 w-8 m-2' />
                    </a>
                </div>
            </div>
            <div
                className='flex-none flex flex-row justify-center md:items-center'
            >
                <a
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded inline-flex items-center m-2'
                    href='mailto:nicholas@pertinate.info'
                    target='_blank'
                    rel='noreferrer'
                >
                    <HiMail /><span className='ml-2'>Contact</span>
                </a>
                <a
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded inline-flex items-center m-2'
                    href='/blog'
                >
                    <HiOutlineShare /><span className='ml-2'>Blog</span>
                </a>
            </div>
        </div>
    );
}

export default Header;
