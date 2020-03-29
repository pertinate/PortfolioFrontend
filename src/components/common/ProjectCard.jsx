import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;

export default function ProjectCard(props) {
    return (
        <Card
            style={{
                width: '100% - 128px',
                margin: '64px',
                padding: '8px',
                backgroundColor: '#204051',
            }}
            className='projectCard'
            cover={
                <img
                    alt='example'
                    style={{
                        margin: '64px auto',
                        width: 442,
                    }}
                    src={props.project.coverImg}
                />
            }
            actions={props.project.cardActions.map((action) => {
                return (
                    <a
                        href={action.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='projectCardAnchor'
                    >
                        <p>{action.linkName}</p>
                    </a>
                );
            })}
            key={`project#${props.index}`}
        >
            <Meta
                avatar={
                    <img
                        alt='example'
                        style={{
                            width: 80,
                            height: 80,
                        }}
                        src={props.project.avatarImg}
                    />
                }
                title={
                    <span
                        style={{
                            fontWeight: 'bold',
                            fontSize: '30px',
                            color: '#cae8d5',
                        }}
                    >
                        {props.project.projectShortName}
                        {props.project.projectLongName !== null
                            ? ` (${props.project.projectLongName})`
                            : ''}
                    </span>
                }
                description={
                    <p style={{ color: '#cae8d5' }}>
                        {props.project.description}
                    </p>
                }
            />
        </Card>
    );
}
