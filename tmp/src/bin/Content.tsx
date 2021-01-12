import React from 'react';
import { SiGooglemaps } from 'react-icons/si';
import { HiDownload, HiMail } from 'react-icons/hi';

interface Props { }

function Content(props: Props) {
    const { } = props;

    return (
        <div
            className='flex-auto bg-gray-300 md:overflow-auto flex flex-col md:flex-row justify-center pt-8'
        >
            <div
                className='flex flex-col pr-4 pb-8'
            >
                <div
                    className='bg-white h-auto p-4 shadow-md pr-48'
                >
                    <h2
                        className='text-gray-600 font-weight-bolder text-2xl mb-8'
                    >About Me</h2>
                    <div
                        className='flex flex-row items-baseline py-2'
                    >
                        <h4
                            className='text-lg mr-2'
                        >Languages:</h4>
                        <p
                            className=''
                        >Node.JS, TypeScript, C#</p>
                    </div>
                    <div
                        className='flex flex-row items-baseline py-2'
                    >
                        <h4
                            className='text-lg mr-2'
                        >Frameworks:</h4>
                        <p>React, Tailwind CSS, Firebase</p>
                    </div>
                    <div
                        className='flex flex-row items-baseline py-2'
                    >
                        <h4
                            className='text-lg mr-2'
                        >Databases:</h4>
                        <p>Azure SQL, MySQL, SQLite, Google BigQuery, PostGRE</p>
                    </div>
                    <div
                        className='flex flex-row items-baseline py-2'
                    >
                        <h4
                            className='text-lg mr-2'
                        >Tools:</h4>
                        <p>Git, CI/CD, Docker</p>
                    </div>
                    <div
                        className='flex flex-row items-baseline py-2'
                    >
                        <h4
                            className='text-lg mr-2'
                        >Operating Systems:</h4>
                        <p>Windows, Mac, Ubuntu, CentOS</p>
                    </div>
                </div>
                <div
                    className='bg-white h-auto p-4 shadow-md pr-48 mt-8'
                >
                    <h2
                        className='text-gray-600 font-weight-bolder text-2xl mb-8'
                    >Latest Project</h2>

                </div>
                <div
                    className='bg-white h-auto p-4 shadow-md pr-48 mt-8'
                >
                    <h2
                        className='text-gray-600 font-weight-bolder text-2xl mb-8'
                    >Project List</h2>

                </div>
                <div
                    className='bg-white h-auto p-4 shadow-md pr-48 mt-8'
                >
                    <h2
                        className='text-gray-600 font-weight-bolder text-2xl mb-8'
                    >Work Experience</h2>

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
    );
}

export default Content;
