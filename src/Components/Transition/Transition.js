import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { transitionURL } from "../AxiosURL";
import UserContext from "../../Context/UserContext";

export default function Transition({ transitionStr }) {
    const navigate = useNavigate();
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const {user} = useContext(UserContext);

    function newTransition(event){
        event.preventDefault();
        const type = transitionStr === "entrada" ? "entry" : "exit";
        const config = {
            headers: {"Authorization": `Bearer ${user.token}`}
        }
        axios.post(transitionURL, {value, description, type}, config)
        .then((res) => {
            console.log("Criado com sucesso!");
            navigate('/home');
        })
        .catch((res) => {
            console.log(res);
            alert("Algo deu errado!");
        })
    }

    return (
        <>
            <h1>Nova {transitionStr}</h1>
            <Form onSubmit={newTransition}>
                <input type='number' placeholder="Valor" onChange={(e) => setValue(parseFloat(e.target.value))} value={value} />
                <input type='text' placeholder="Descrição" onChange={(e) => setDescription(e.target.value)} value={description} />
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