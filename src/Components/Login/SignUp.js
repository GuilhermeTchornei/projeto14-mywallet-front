import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUpURL } from "../AxiosURL";
import { LoginStyle, Title } from "./LoginStyles";

export default function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPw, setConfirmPw] = useState('');
    const navigate = useNavigate();

    function signUp(event) {
        event.preventDefault();
        axios.post(signUpURL, { name, email, password, confirmPw })
            .then(() => {
                navigate('/');
            })
            .catch(response => {
                console.log(response);
            });
    }


    return (
        <LoginStyle onSubmit={signUp}>
            <Title>MyWallet</Title>
            <input type='text' placeholder="Nome" onChange={(e) => setName(e.target.value)} value={name} />
            <input type='email' placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} value={email}  />
            <input type='password' placeholder="Senha" onChange={(e) => setPassword(e.target.value)} value={password}  />
            <input type='password' placeholder="Confirme a senha" onChange={(e) => setConfirmPw(e.target.value)} value={confirmPw}  />
            <button type="submit">Entrar</button>
            <Link to='/'>Já tem uma conta? Entre agora!</Link>
        </LoginStyle>
    );
}
