import React from 'react';
import { Divider } from 'antd';
import Wheel from './common/Wheel';

const skillSets = [
    // {
    //     skillName:
    // },
    {
        skillName: 'Backend Dev',
        skillDescription:
            'Morbi accumsan aliquam erat. Nam eget nisi neque. Maecenas at dolor non nulla sollicitudin pretium sed in urna. Vivamus eget turpis vel dolor malesuada eleifend. Nunc commodo vitae libero in tincidunt. Sed tincidunt libero sem, at scelerisque velit commodo a. Phasellus ultrices vel velit ut sodales. Duis eget ante mauris.',
        skillFullDescription: 'More into my Backend Dev experience.',
    },
    {
        skillName: 'Frontend Dev',
        skillDescription:
            'Morbi accumsan aliquam erat. Nam eget nisi neque. Maecenas at dolor non nulla sollicitudin pretium sed in urna. Vivamus eget turpis vel dolor malesuada eleifend. Nunc commodo vitae libero in tincidunt. Sed tincidunt libero sem, at scelerisque velit commodo a. Phasellus ultrices vel velit ut sodales. Duis eget ante mauris.',
        skillFullDescription: 'More into my Frontend Dev experience.',
    },
    {
        skillName: 'Database Management',
        skillDescription:
            'Morbi accumsan aliquam erat. Nam eget nisi neque. Maecenas at dolor non nulla sollicitudin pretium sed in urna. Vivamus eget turpis vel dolor malesuada eleifend. Nunc commodo vitae libero in tincidunt. Sed tincidunt libero sem, at scelerisque velit commodo a. Phasellus ultrices vel velit ut sodales. Duis eget ante mauris.',
        skillFullDescription: 'More into my Database Management experience.',
    },
    {
        skillName: 'Messaging Queues (Kafka)',
        skillDescription:
            'Morbi accumsan aliquam erat. Nam eget nisi neque. Maecenas at dolor non nulla sollicitudin pretium sed in urna. Vivamus eget turpis vel dolor malesuada eleifend. Nunc commodo vitae libero in tincidunt. Sed tincidunt libero sem, at scelerisque velit commodo a. Phasellus ultrices vel velit ut sodales. Duis eget ante mauris.',
        skillFullDescription: 'More into my Messaging Queues experience.',
    },
    {
        skillName: 'Linux Server Management',
        skillDescription:
            'Morbi accumsan aliquam erat. Nam eget nisi neque. Maecenas at dolor non nulla sollicitudin pretium sed in urna. Vivamus eget turpis vel dolor malesuada eleifend. Nunc commodo vitae libero in tincidunt. Sed tincidunt libero sem, at scelerisque velit commodo a. Phasellus ultrices vel velit ut sodales. Duis eget ante mauris.',
        skillFullDescription:
            'More into my Linux Server Management experience.',
    },
    {
        skillName: 'Webserver Management',
        skillDescription:
            'Morbi accumsan aliquam erat. Nam eget nisi neque. Maecenas at dolor non nulla sollicitudin pretium sed in urna. Vivamus eget turpis vel dolor malesuada eleifend. Nunc commodo vitae libero in tincidunt. Sed tincidunt libero sem, at scelerisque velit commodo a. Phasellus ultrices vel velit ut sodales. Duis eget ante mauris.',
        skillFullDescription: 'More into my Webserver experience.',
    },
];

export default function Portfolio(props) {
    return (
        <div style={{ margin: '15px' }}>
            <Wheel skillSets={skillSets} />
            <div
                style={{
                    textAlign: 'center',
                    color: '#204051',
                }}
            >
                <h2
                    style={{
                        color: '#204051',
                        fontWeight: 'bold',
                        textDecoration: 'underline',
                        cursor: 'pointer',
                    }}
                    onClick={() => props.changeToBio()}
                >
                    Bio →
                </h2>
            </div>
            {skillSets.map((skill, index) => {
                return (
                    <div key={`skillSet#${index}`}>
                        <Divider />
                        <div
                            id={skill.skillName}
                            style={{
                                textAlign: 'center',
                                color: '#204051',
                            }}
                        >
                            <h2
                                style={{
                                    color: '#204051',
                                    fontWeight: 'bold',
                                }}
                            >
                                {skill.skillName}
                            </h2>
                            <p>{props.randomDescription}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
