import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './bin/Header';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import Content from './bin/Content';

function App() {
    return (
        <div
            className='h-screen flex flex-col'
        >
            <Header />
            <Content />
        </div>
        // <div
        //     className="flex flex-row h-screen"
        // >
        //     <div
        //         className="w-32 flex-none flex flex-col bg-gray-200 text-black"
        //     >
        //         <h1
        //             className="flex-none text-center text-xl p-2 font-weight-bolder"
        //         >
        //             Nicholas Evans
        //         </h1>
        //         <div
        //             className="flex-auto flex flex-col justify-between"
        //         >
        //             <div
        //                 className="flex flex-col"
        //             >
        //                 <a
        //                     href="/"
        //                     className='bg-gray-400 hover:bg-gray-600 text-black font-bold py-2 px-4 rounded m-1 text-center'
        //                 >
        //                     Home
        //                 </a>
        //                 <a
        //                     href="/blog"
        //                     className='bg-gray-400 hover:bg-gray-600 text-black font-bold py-2 px-4 rounded m-1 text-center'
        //                 >
        //                     Blog
        //                 </a>
        //                 <a
        //                     href="/contact"
        //                     className='bg-gray-400 hover:bg-gray-600 text-black font-bold py-2 px-4 rounded m-1 text-center'
        //                 >
        //                     Contact Me
        //                 </a>
        //             </div>
        //             <div
        //                 className="flex flex-row justify-center align-middle"
        //             >
        //                 <a
        //                     href="https://linkedin.com/in/nicholas-evans-712b69a4/"
        //                     target="_blank"
        //                     rel="noreferrer"
        //                     className='flex justify-center p-4'
        //                 >
        //                     <SiLinkedin
        //                         className="w-8 h-8"
        //                     />
        //                 </a>
        //                 <a
        //                     href="https://www.github.com/pertinate"
        //                     target="_blank"
        //                     rel="noreferrer"
        //                     className='flex justify-center p-4'
        //                 >
        //                     <SiGithub
        //                         className="w-8 h-8"
        //                     />
        //                 </a>
        //             </div>
        //         </div>
        //     </div>
        //     <div
        //         className="flex-auto bg-white flex"
        //     >

        //     </div>
        // </div>
        // <Router>

        //     <Header />
        //     <Switch>
        //         <Route
        //             path='/'
        //             exact
        //             render={() => (
        //                 <p
        //                     className='text-center'
        //                 >
        //                     Hello World!
        //                 </p>
        //             )}
        //         />
        //         <Route
        //             path='/projects'
        //             exact
        //             render={() => (
        //                 <>
        //                     This is my projects page
        //                 </>
        //             )}
        //         />
        //         <Route
        //             path='/blog'
        //             exact
        //         />
        //         <Route
        //             path='/contact'
        //             exact
        //         />
        //     </Switch>
        // </Router>
    );
}

export default App;
