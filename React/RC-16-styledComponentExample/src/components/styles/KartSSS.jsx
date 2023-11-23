import styled from 'styled-components';

const CardDiv = styled.div`
    background-color:aquamarine;
    border-radius:15px;
    margin-bottom:2rem;
    gap: 2rem;
    padding:60px;
    display:flex;
    flex-direction:${({ferhat})=>ferhat || "row" };
    box-shadow:${({theme})=>theme.golge};
    @media screen and (max-width:${({theme})=>theme.responsive}){
        background-color:pink;
        flex-direction:column;
    }
`;

export default CardDiv;

