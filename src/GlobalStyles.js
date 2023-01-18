import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *, .App{
        font-family: 'Raleway', sans-serif;
        box-sizing: border-box;
    }
    input{
        width: 100%;
        height: 58px;
        background-color: white;
        color: black;
        padding: 18px 15px;
        font-size: 20px;
        border: none;
        border-radius: 5px;
        ::placeholder{
            font-size: inherit;
            color: inherit;
        }
        :focus{
            outline: none;
        }
    }

    button{
        background-color: #A328D6;
        border: none;
        border-radius: 5px;
        font-weight: 700;
        color: white;
    }

    h1{
        font-size: 26px;
        font-weight: 700;
        color: white;
    }
    a{
        font-family: 'Raleway';
    }
`;

export default GlobalStyles;