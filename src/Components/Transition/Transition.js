import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Transition({ transitionStr }) {
    const navigate = useNavigate();

    return (
        <>
            <h1>Nova {transitionStr}</h1>
            <Form onSubmit={() => navigate("/home")}>
                <input type='number' placeholder="Valor" />
                <input type='text' placeholder="Descrição" />
                <button type="submit">Salvar {transitionStr}</button>
            </Form>
        </>
    );
}

const Form = styled.form`
    margin-top: 40px;


    button{
        width: 100%;
        height: 46px;
        font-size: 20px;
        font-weight: 700;
    }
`;