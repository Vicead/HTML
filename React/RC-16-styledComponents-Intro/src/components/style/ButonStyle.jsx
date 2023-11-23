import styled from 'styled-components';

const Button = styled.button`
    color:${({esra})=>esra ? "blue": "red"};
    background-color:${({esra,cihan})=>esra ? "lightblue": cihan ? "blue" : "orange"};
    cursor:pointer;
    padding:1rem 1.5rem;
    border-radius:10px;
    font-family:"tahoma";
    font-size:30px;
    &:hover{
        transform:scale(.95);
    }
`;

export const TomatoButton=styled(Button)`
    width:300px;
    background-color:aquamarine;
    color:${({murat})=>murat?"tomato":"green"};
`

export default Button;
