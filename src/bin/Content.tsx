import React from 'react';

interface Props { }

function Content(props: Props) {
    const { } = props;

    return (
        <div
            className='flex-auto bg-gray-300 overflow-auto flex flex-row justify-center pt-2'
        >
            <div
                className='w-96'
            >
                test
            </div>
            <div>
                test
            </div>
        </div>
    );
}

export default Content;
