import { Link } from "react-router-dom";
import { LoginStyle, Title } from "./LoginStyles";

export default function Login() {
    return (
        <LoginStyle>
            <Title>MyWallet</Title>
            <input type='email' placeholder="E-mail" />
            <input type='password' placeholder="Senha" />
            <button type="submit" >Entrar</button>
            <Link to='/cadastro'>Primeira vez? Cadastre-se!</Link>
        </LoginStyle>
    );
}