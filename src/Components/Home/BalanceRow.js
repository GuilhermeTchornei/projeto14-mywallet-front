import styled from "styled-components";

export default function BalanceRow({ date, description, value, type }) {
    return (
        <BalanceRowStyle>
            <Date>
                {date}
            </Date>
            <Description>
                {description}
            </Description>
            <Value color={type == "entry" ? "#03AC00" : "#C70000"}>{
                Number(value).toLocaleString('pt-br', {
                    style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2
                })}</Value>
        </BalanceRowStyle>
    );
}

const BalanceRowStyle = styled.div`
    width: 100%;
    height: 16px;
    display: flex;
    font-size: 16px;
    justify-content: space-between;
    margin-bottom: 15px;
`;

const Date = styled.p`
    min-width: 48px;
    color: #C6C6C6;
`;

const Description = styled.p`
    width: 100%;
    margin: 0 3px;
    color: black;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    overflow-wrap: break-word;
`;

const Value = styled.p`
    min-width: 62px;
    color: ${props => props.color};
    text-align: right;
`;