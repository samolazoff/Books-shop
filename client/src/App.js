import './App.scss';

import fromArrayToString from './utils/fromArrayToString.js';

import Header from './components/Header/Header.jsx';
import Logo from './components/Logo/Logo.jsx';

function App() {
    const classNameForHeader = ['Header', 'header-top'];
    return (
        <div className="App">
           <Header className={fromArrayToString(classNameForHeader)}>
            
           </Header>
           <h1 className='logo'>
                <a href='/'>
                    <Logo></Logo>
                </a>
           </h1>
    
        </div>
    );
}

export default App;
