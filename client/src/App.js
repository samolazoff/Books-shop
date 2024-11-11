import './App.scss';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Registration from './pages/Registration/Registration';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path = '/' element = {<Layout/>}>
                    <Route index element = {<Home/>}></Route>
                    <Route path = '/Registration' element = {<Registration/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
