import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 10.0rem;
    width: 100%;
    padding: 2.4rem;
    background: ${({theme}) => theme.colors.background};
    color: white;
    border-radius: .4rem .4rem 0rem 0rem ;
    border-bottom: .4rem solid ${({theme}) => theme.colors.neutral8};
    position: sticky;
    top: -0.1rem;

    z-index: 1;
    

    .button{     
        display: flex;
        align-items: center;        
        border-radius: .8rem;
        justify-content: space-between;
        padding: .8rem;
        
        
    }

   
    h1 {
        font-size: 1.4rem;
    }

    h3{
        font-size: 1.4rem;
       color: ${({theme}) => theme.colors.neutral8};
    }
    


   
    
    
`
    