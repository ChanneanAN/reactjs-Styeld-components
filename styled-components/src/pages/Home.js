import React from 'react'
import styled from 'styled-components'
import Container from '../components/GlobalStyled'
const Home = () => {
    return (
        <Container>
            <Content>
            <h1>Home Page</h1>
            <button>Submit</button>
            </Content>
            
        </Container>
    )
}

export default Home;

const Content = styled.div `

h1{
    color: white;
    justify-content: space-around;
}
`