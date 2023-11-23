import styled from 'styled-components';

const ButtonSSS = styled.button`
  background-color:${({osman})=>osman?"#A62440":"white"};
  color:${({hasan})=>hasan || "white"};
  border:2px solid #A62440;
  border-radius:5px;
  box-shadow:${({theme})=>theme.golge};
  padding:1rem 1.2rem;
  font-size:1.1rem;
  margin:2rem .5rem;
  cursor:pointer;
  &:hover{
    opacity:.9;
    transform:scale(.98)
  }
  
`;
export const DetailButton=styled(ButtonSSS)`
  border-radius:20px 0;
  background-color:white;
  color:tomato;
  border-left:3px solid blue;



`

export default ButtonSSS;
