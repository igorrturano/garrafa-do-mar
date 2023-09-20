
import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 6rem;
    display:flex;
    justify-content: center;
    align-items:center;
`;

export const LoginButton = styled.button`
    width: auto;
    padding-left: 1rem;
    padding-right: 1rem;
    height:2rem;
    background-color: #3C3C3C;
    color: white;
    border: none;
    outline: none;
    border-radius: 10px;

    cursor:pointer;

`;

export const HeaderDetails = styled.div`
    width: 80%;
    display:flex;
    justify-content: space-between;
    align-items:center;
`

export const ModalContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(10px);
    background-color: rgba(0,0,0,0.2);
    z-index: 1;

    display:flex;
    justify-content:center;
    align-items:center;
`

export const ModalBox = styled.div`
    width: 40rem;
    height: 40rem;
    border-radius: 2rem;
    padding:2rem;
    color: black;
    background-color: white;
`

export const ModalHeader = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const ModalClose = styled.span`
    font-size: 1.5rem;
    font-weight: 900;
    cursor: pointer;

    &:hover{
        color: #3C3C3C;
    }
`

export const ModalTitle = styled.h1`
    font-size: 1.2rem;
    font-weight: 600;

`

export const ModalDivider = styled.hr`
    margin-top: 0.5rem;
    opacity: 0.3;
`

export const ModalCenter = styled.div`
    width: 100%;
    height: 90%;
    display:flex;
    justify-content: center;
    align-items: center;

    > div {
        width: 300px;
        height: 300px;
    }
`

export const ModalFooter = styled.div`
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
`