import React from 'react';
import { Carousel } from 'antd';

export default function Portfolio(props) {
    return (
        <div style={{ margin: '15px' }}>
            <Carousel autoplay autoplaySpeed={5000} effect='fade'>
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
            </Carousel>
        </div>
    );
}
