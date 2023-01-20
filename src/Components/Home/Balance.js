import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { transitionURL } from "../AxiosURL";

export default function Balance() {
    const [balance, setBalance] = useState([]);

    useEffect(() => {
        axios.get(transitionURL)
            .then((res) => {
                console.log(res.data);
                setBalance(res.data);
            })
            .catch(res => console.log(res));
    }, []);

    return (
        <Main>
            {balance.length > 0 ?
                balance.map((b, i) => <p key={i}>{b.description}</p>) :
                <Empty>Não há registros de entrada ou saída</Empty>}
        </Main>
    );
}


const Main = styled.main`
    width: 100%;
    height: 446px;
    border-radius: 5px;
    background-color: white;
    overflow-y: auto;
    margin-top: 20px;
    margin-bottom: 13px;
    display: grid;
    padding: 12px;
`;

const Empty = styled.p`
    align-self: center;
    justify-self: center;
`;