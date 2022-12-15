import styled from "styled-components";

export const StyledTecnologiCard = styled.li`
    width: 100%;
    height: 49px;

    padding: 13px 18px 13px 22px;

    border: none;

    border-radius: 8px;

    display: flex;

    justify-content: space-between;
    align-items: center;
    background-color: var(--color-grey-4);

    cursor: pointer;

    & div{
        width: 90%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    & h2{
        color: var(--color-grey-0);

        font-weight: 700;
        font-size: 14.21px;
        line-height: 22px;
    }

    & p{
        color: var(--collor-grey-1);

        font-weight: 400;
        font-size: 12.182px;
        line-height: 22px;
    }

    &:hover{
        background-color: var(--color-grey-2);
    }

    & button.Trash{
        width: fit-content;
        background-color: transparent;
        border: none;
        padding: 10px;
        border-radius: 8px;
        cursor: pointer;
    }

    & button.Trash:hover{
        background-color: var(--Negative);
    }
`