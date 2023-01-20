import { useContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import SignUp from './Components/Login/SignUp';
import Entry from './Components/Transition/Entry';
import Exit from './Components/Transition/Exit';
import UserContext from './Context/UserContext';


function App() {
    const [user, setUser] = useState(useContext(UserContext));


    return (
        <UserContext.Provider value={{ user, setUser }} >
            <Background className='App'>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Login />} />
                        <Route path='/cadastro' element={<SignUp />} />
                        <Route path='/home' element={<Home />} />
                        <Route path='/nova-entrada' element={<Entry />} />
                        <Route path='/nova-saida' element={<Exit />} />
                    </Routes>
                </BrowserRouter>
            </Background>
        </UserContext.Provider>
    )
}

export default App;


const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #8C11BE;
    padding: 25px;
    padding-bottom: 15px;
`;