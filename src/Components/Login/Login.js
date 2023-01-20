import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../Context/UserContext";
import { LoginStyle, Title } from "./LoginStyles";
import axios from 'axios';
import { loginURL } from "../AxiosURL";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    function login(event) {
        event.preventDefault();
        axios.post(loginURL, { email: email, password: password })
            .then((res) => {
                setUser(res.data);
                navigate('/home');
            })
            .catch(response => {
                console.log(response);
            });
    }

    return (
        <LoginStyle onSubmit={login}>
            <Title>MyWallet</Title>
            <input type='email' placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} value={email} />
            <input type='password' placeholder="Senha" onChange={(e) => setPassword(e.target.value)} value={password} />
            <button type="submit" >Entrar</button>
            <Link to='/cadastro'>Primeira vez? Cadastre-se!</Link>
        </LoginStyle>
    );
}