import { Link } from "react-router-dom";
import { LoginStyle, Title } from "./LoginStyles";

export default function SignUp() {

    return (
        <LoginStyle>
            <Title onSubmit={() => console.log('teste')}>MyWallet</Title>
            <input type='text' placeholder="Nome" />
            <input type='email' placeholder="E-mail" />
            <input type='password' placeholder="Senha" />
            <input type='password' placeholder="Confirme a senha" />
            <button type="submit">Entrar</button>
            <Link to='/'>Já tem uma conta? Entre agora!</Link>
        </LoginStyle>
    );
}
