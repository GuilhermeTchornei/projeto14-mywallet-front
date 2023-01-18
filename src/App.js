import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Login from './Components/Login/Login';
import SignUp from './Components/Login/SignUp';


function App() {
    console.log("teste");
    return (
        <Background>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/cadastro' element={<SignUp />} />
                </Routes>
            </BrowserRouter>
        </Background>
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