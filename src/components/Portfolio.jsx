import React from 'react';
import { Carousel, Divider } from 'antd';
import Wheel from './common/Wheel';

const skillSets = [
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
            {/* <Carousel autoplay autoplaySpeed={5000} effect='fade'>
                <div>
                    <h1
                        style={{
                            fontSize: '35px',
                            fontWeight: 'bold',
                            color: '#faf4f4',
                        }}
                    >
                        Full Stack Developer
                    </h1>
                    <p
                        style={{
                            fontSize: '20px',
                            color: '#faf4f4',
                        }}
                    >
                        Able to support backend development, frontend
                        development (using Component Libraries such as{' '}
                        <a
                            href='https://ant.design/'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            AntDesign
                        </a>
                        ).
                    </p>
                </div>
                <div>
                    <h1
                        style={{
                            fontSize: '35px',
                            fontWeight: 'bold',
                            color: '#faf4f4',
                        }}
                    >
                        Continous Integration | Continuous Deployment
                    </h1>
                    <p
                        style={{
                            fontSize: '20px',
                            color: '#faf4f4',
                            margin: '15px',
                        }}
                    >
                        Utilizing CI/CD practices within Wal-Mart workspace.
                        Using tools such as Concord for Continuous Deployment
                        and Looper for Continuous Integration.
                    </p>
                </div>
            </Carousel> */}
        </div>
    );
}
