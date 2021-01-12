import React from 'react';
import { useAppContext } from '../components/Contexts/AppContext';

interface Props { }

function About(props: Props) {
    const { } = props;
    const states = useAppContext();

    return (
        <div>
            my about page
            {states.counter}
        </div>
    );
}

export default About;
