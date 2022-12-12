import styled from 'styled-components';

export const StyledTecnoloigDiv = styled.div`
    width: 100%;
    height: 416px;
    
    margin-top: 20px;

    display: flex;
    justify-content: center;
    /* align-items: center; */

    background-color: var(--color-grey-3);

    & ul{
        width: 90%;
        
        margin-top: 23px;

        overflow-y: scroll;

        display: flex;

        justify-content: center;

        gap: 16px;

        &::-webkit-scrollbar{
            width: 2px;
        }

        &::-webkit-scrollbar-button{
            width: 100%;
            background-color: var(--color-grey-3);
            border: none;
            border-radius: 8px;
        }
    }
    
`