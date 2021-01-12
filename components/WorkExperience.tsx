import React from 'react';

interface Props {
    role: string;
    company: string;
    timeSpan: string;
    roleDescription: string;
    environments: string;
}

function WorkExperience(props: Props) {
    const {
        role,
        company,
        timeSpan,
        roleDescription,
        environments
    } = props;

    return (
        <div
            className='p-4'
        >
            <div
                className='flex flex-row items-center'
            >
                <h1
                    className='text-2xl font-medium text-gray-500'
                >{role}</h1>
                <p
                    className='text-gray-500 font-medium text-3xl mx-2'
                >-</p>
                <h2
                    className='text-gray-500 font-weight-normal font-smaller text-xl'
                >{company} {timeSpan}</h2>
            </div>
            <p>{roleDescription}</p>
            <div
                className='flex flex-row items-baseline py-2'
            >
                <h4
                    className='text-lg mr-2 font-medium'
                >Environments:</h4>
                <p
                    className='font-light'
                >{environments}</p>
            </div>
        </div>
    );
}

export default WorkExperience;
