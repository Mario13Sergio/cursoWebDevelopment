import styled from "styled-components";

export const Container = styled.div `

    h1{
        color: ${({theme}) => theme.colors.main3};
    }
    a{
        color: ${({theme}) => theme.colors.main1 };
    }

    .select {
        color: orange;
    }
`;