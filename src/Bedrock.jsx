import React, { Component } from 'react';
import logo from './logo.svg';
import './Bedrock.css';
import { Layout, Divider, Menu, Row, Col, Card } from 'antd';
import {
    GithubOutlined,
    LinkedinOutlined,
    MailOutlined,
} from '@ant-design/icons';
import Portfolio from './components/Portfolio';
import DetailedProjects from './components/DetailedProjects';
const { Header, Content, Footer, Sider } = Layout;

export default class Bedrock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: 'portfolio',
            browserHeight: 0,
            browserWidth: 0,
            randomDescription: '',
        };
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);

        fetch(
            `https://hipsum.co/api/?type=hipster-centric&sentences=${(Math.random() +
                1) *
                30}`
        )
            .then((result) => result.json())
            .then((result) => this.setState({ randomDescription: result[0] }));
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
        this.setState({
            browserWidth: window.innerWidth,
            browserHeight: window.innerHeight,
        });
    };

    render = () => {
        console.log(this.state.browserWidth, this.state.browserHeight);
        return (
            <Layout id='main'>
                <Header
                    style={{
                        backgroundColor: '#204051',
                        zIndex: 9999,
                        boxShadow: '0px 5px 20px 1px black',
                    }}
                >
                    <h1
                        style={{
                            color: '#82A3A1',
                            float: 'left',
                            fontWeight: '900',
                        }}
                    >
                        Nicholas Evans
                    </h1>
                    <Menu
                        defaultSelectedKeys={['portfolio']}
                        mode='horizontal'
                        theme='dark'
                        multiple={false}
                        onClick={(e) => this.setState({ selected: e.key })}
                        style={{ float: 'right', marginBottom: '2px' }}
                    >
                        <Menu.Item
                            key='portfolio'
                            style={{
                                boxShadow: `inset 0 -2px 0px 0px ${
                                    this.state.selected === 'portfolio'
                                        ? 'white'
                                        : 'transparent'
                                }`,
                            }}
                        >
                            Portfolio
                        </Menu.Item>
                        <Menu.Item
                            key='detailedProjects'
                            style={{
                                boxShadow: `inset 0 -2px 0px 0px ${
                                    this.state.selected === 'detailedProjects'
                                        ? 'white'
                                        : 'transparent'
                                }`,
                            }}
                        >
                            Detailed Projects
                        </Menu.Item>
                    </Menu>
                    <a
                        href='https://github.com/pertinate'
                        target='_blank'
                        rel='noopener noreferrer'
                        style={{ float: 'right' }}
                    >
                        <GithubOutlined
                            style={{
                                fontSize: '32px',
                                margin: '15px',
                            }}
                        />
                    </a>
                    <a
                        href='https://www.linkedin.com/in/nicholas-evans-712b69a4/'
                        target='_blank'
                        rel='noopener noreferrer'
                        style={{ float: 'right' }}
                    >
                        <LinkedinOutlined
                            style={{
                                fontSize: '32px',
                                margin: '15px',
                            }}
                        />
                    </a>
                    <a
                        href='mailto:nicholas@pertinate.info'
                        target='_blank'
                        rel='noopener noreferrer'
                        style={{ float: 'right' }}
                    >
                        <MailOutlined
                            style={{
                                fontSize: '32px',
                                margin: '15px',
                            }}
                        />
                    </a>
                </Header>
                <Layout style={{ backgroundColor: '#1b262c' }}>
                    <Content
                        style={{
                            margin: '30px 120px 30px 120px',
                            backgroundColor: '#84a9ac',
                            boxShadow: '0px 0px 15px 2px black',
                            overflow: 'auto',
                            overflowX: 'auto',
                        }}
                    >
                        {this.state.selected === 'portfolio' && (
                            <Portfolio
                                test='Portfolio'
                                randomDescription={this.state.randomDescription}
                            />
                        )}
                        {this.state.selected === 'detailedProjects' && (
                            <DetailedProjects
                                test='DetailedProjects'
                                width={this.state.browserWidth}
                            />
                        )}
                    </Content>
                </Layout>
            </Layout>
        );
    };
}
