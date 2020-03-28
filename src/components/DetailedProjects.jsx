import React from 'react';
import { Card, Col, Row } from 'antd';
const { Meta } = Card;

const projects = [
    {
        projectShortName: 'FS ACI',
        projectLongName: 'Field Services Associate Call In',
        description: 'Project description to be done.',
        coverImg:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/800px-Walmart_logo.svg.png',
        avatarImg:
            'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
        cardActions: [
            {
                linkName: 'GitHub',
                link: 'https://www.github.com/',
            },
        ],
    },
    {
        projectShortName: 'proj1',
        projectLongName: null,
        description: 'Project description to be done.',
        coverImg:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/800px-Walmart_logo.svg.png',
        avatarImg:
            'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
        cardActions: [],
    },
    {
        projectShortName: 'proj2',
        projectLongName: null,
        description: 'Project description to be done.',
        coverImg:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/800px-Walmart_logo.svg.png',
        avatarImg:
            'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
        cardActions: [],
    },
    {
        projectShortName: 'proj2',
        projectLongName: null,
        description: 'Project description to be done.',
        coverImg:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/800px-Walmart_logo.svg.png',
        avatarImg:
            'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
        cardActions: [],
    },
    {
        projectShortName: 'proj2',
        projectLongName: null,
        description: 'Project description to be done.',
        coverImg:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/800px-Walmart_logo.svg.png',
        avatarImg:
            'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
        cardActions: [],
    },
    {
        projectShortName: 'proj2',
        projectLongName: null,
        description: 'Project description to be done.',
        coverImg:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/800px-Walmart_logo.svg.png',
        avatarImg:
            'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
        cardActions: [],
    },
    {
        projectShortName: 'proj2',
        projectLongName: null,
        description: 'Project description to be done.',
        coverImg:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/800px-Walmart_logo.svg.png',
        avatarImg:
            'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
        cardActions: [],
    },
    {
        projectShortName: 'proj2',
        projectLongName: null,
        description: 'Project description to be done.',
        coverImg:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/800px-Walmart_logo.svg.png',
        avatarImg:
            'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
        cardActions: [],
    },
    {
        projectShortName: 'proj2',
        projectLongName: null,
        description: 'Project description to be done.',
        coverImg:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/800px-Walmart_logo.svg.png',
        avatarImg:
            'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
        cardActions: [],
    },
];

export default function DetailedProjects(props) {
    let projectList = projects.reduce((acc, next) => {
        let index = acc.length - 1;
        if (index === -1 || acc[index].length === 2) {
            acc.push([next]);
        } else {
            acc[index].push(next);
        }
        return acc;
    }, []);
    return (
        <div
            style={{
                margin: '15px',
            }}
        >
            {projectList.map((row, index) => {
                return row.map((project, projectIndex) => {
                    return (
                        <Card
                            style={{
                                width: 500,
                                float: `${index % 2 === 0 ? 'left' : 'right'}`,
                                margin: '20px',
                                padding: '8px',
                            }}
                            className='projectCard'
                            cover={
                                <img
                                    alt='example'
                                    style={{
                                        margin: '64px 24px',
                                        width: 442,
                                    }}
                                    src={project.coverImg}
                                />
                            }
                            actions={project.cardActions.map((action) => {
                                return (
                                    <a href={action.link} target='_blank'>
                                        <p>{action.linkName}</p>
                                    </a>
                                );
                            })}
                            key={`project#${index}`}
                        >
                            <Meta
                                avatar={
                                    <img
                                        alt='example'
                                        style={{
                                            width: 80,
                                            height: 80,
                                        }}
                                        src={project.avatarImg}
                                    />
                                }
                                title={`${project.projectShortName}${
                                    project.projectLongName !== null
                                        ? ` (${project.projectLongName})`
                                        : ''
                                }`}
                                description={project.description}
                            />
                        </Card>
                    );
                });
            })}
        </div>
    );
}
