import React from "react";
import Head from 'next/head';
import Link from 'next/link';
import Button from '../components/Button';
import { useAppContext } from "../components/Contexts/AppContext";
import { HiMail, HiDownload } from "react-icons/hi";
import { SiGooglemaps } from "react-icons/si";
import WorkExperience from "../components/WorkExperience";

export default function Home() {
    const states = useAppContext();
    return (

        <div
            className='flex-auto bg-gray-300 md:overflow-auto '
        >
            <div
                className='flex flex-col md:flex-row justify-center pt-8'
            >

                <div
                    className='flex flex-col pr-4 mb-8'
                >
                    <div
                        className='bg-white h-auto p-4 shadow-md pr-48'
                    >
                        <h2
                            className='text-gray-600 font-bold text-2xl mb-8'
                        >About Me</h2>
                        <div
                            className='flex flex-row items-baseline py-2'
                        >
                            <h4
                                className='text-lg mr-2 font-medium'
                            >Languages:</h4>
                            <p
                                className='font-light'
                            >Node.JS, TypeScript, C#</p>
                        </div>
                        <div
                            className='flex flex-row items-baseline py-2'
                        >
                            <h4
                                className='text-lg mr-2 font-medium'
                            >Frameworks:</h4>
                            <p
                                className='font-light'
                            >React, Tailwind CSS, Firebase</p>
                        </div>
                        <div
                            className='flex flex-row items-baseline py-2'
                        >
                            <h4
                                className='text-lg mr-2 font-medium'
                            >Databases:</h4>
                            <p
                                className='font-light'
                            >Azure SQL, MySQL, SQLite, Google BigQuery, PostGRE</p>
                        </div>
                        <div
                            className='flex flex-row items-baseline py-2'
                        >
                            <h4
                                className='text-lg mr-2 font-medium'
                            >Tools:</h4>
                            <p
                                className='font-light'
                            >Git, CI/CD, Docker</p>
                        </div>
                        <div
                            className='flex flex-row items-baseline py-2'
                        >
                            <h4
                                className='text-lg mr-2 font-medium'
                            >Operating Systems:</h4>
                            <p
                                className='font-light'
                            >Windows, Mac, Ubuntu, CentOS</p>
                        </div>
                    </div>
                    <div
                        className='bg-white h-auto p-4 shadow-md pr-48 mt-8'
                    >
                        <h2
                            className='text-gray-600 font-bold text-2xl mb-8'
                        >Latest Project</h2>

                    </div>
                    <div
                        className='bg-white h-auto p-4 shadow-md pr-48 mt-8'
                    >
                        <h2
                            className='text-gray-600 font-bold text-2xl mb-8'
                        >Project List</h2>

                    </div>
                    <div
                        className='bg-white h-auto p-4 shadow-md pr-48 mt-8'
                    >
                        <h2
                            className='text-gray-600 font-bold text-2xl mb-8'
                        >Work Experience</h2>
                        <WorkExperience
                            role='FullStack / DevOps Developer'
                            company='Wal-Mart'
                            timeSpan='(Sept 2019 - CURRENT)'
                            roleDescription='Project Blue (Store down detection), Associate Call In tool'
                            environments='React, Typescript, SQL, BigQuery, PostGRE, Nats.IO, Kafka, Cloud'
                        />
                    </div>
                </div>
                <div
                    className='pl-4 flex flex-col pb-8'
                >
                    <div
                        className='bg-white h-auto p-4 shadow-md pr-16'
                    >
                        <div
                            className='flex flex-row my-8 mx-4'
                        >
                            <SiGooglemaps className='h-6 w-6 mr-2' />
                            <p>Prairie Grove, Arkansas, United States</p>
                        </div>
                        <div
                            className='flex flex-row my-8 mx-4'
                        >
                            <HiMail className='h-6 w-6 mr-2' />
                            <a>nicholas@pertinate.info</a>
                        </div>
                        <div
                            className='flex flex-row my-8 mx-4'
                        >
                            <HiDownload className='h-6 w-6 mr-2' />
                            <a>Download Resume</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
