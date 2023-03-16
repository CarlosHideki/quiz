import styled, {css} from "styled-components";

export const Container = styled.div`
    background-color: #3c0e70;
    border-radius: 0.5rem;
    padding: 1rem;
    margin-bottom: 1rem;
    cursor: pointer;
    opacity: .8;
    transition: 0.4s;

    :hover{
        opacity: 1;
    }
    
    p {
        margin-bottom: 0;
    }
    
    ${(props) => {
        switch (props.$mode) {
            case "correct":
                return css`
                    background-color: #0bfc03;
                    font-weight: bold;
                `;

            default:
                return css`
                    background-color: #3c0e70;
                    opacity: 0.4;
                `; 
        }
    }}

`